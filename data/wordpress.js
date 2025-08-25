// lib/wordpress.js
const WORDPRESS_API = process.env.WORDPRESS_API_URL || 'https://a2zdm.com/wp-json/wp/v2';

export const wpFetch = async (endpoint, method = "GET", body = null) => {
  const options = {
    method,
    headers: { "Content-Type": "application/json" },
    ...(body && { body: JSON.stringify(body) }),
  };

  try {
    const response = await fetch(`${WORDPRESS_API}${endpoint}`, options);
    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("WordPress API Error:", error);
    throw error;
  }
};

// Calculate read time
const calculateReadTime = (content) => {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

// Process and enrich blog data
const processBlogData = async (posts) => {
  return await Promise.all(
    posts.map(async (post) => {
      // Get featured media
      let imageUrl = "/search.jpg";
      let altText = post.title?.rendered || "Blog post image";

      if (post.featured_media) {
        try {
          const media = await wpFetch(`/media/${post.featured_media}`);
          imageUrl = media.source_url;
          altText = media.alt_text || altText;
        } catch (error) {
          console.error("Error fetching media:", error);
        }
      }

      // Get category names
      const categoryNames = await Promise.all(
        (post.categories || []).map(async (catId) => {
          try {
            const category = await wpFetch(`/categories/${catId}`);
            return category.name;
          } catch (error) {
            console.error("Error fetching category:", error);
            return "Uncategorized";
          }
        })
      );

      // Get tag names
      const tagNames = await Promise.all(
        (post.tags || []).map(async (tagId) => {
          try {
            const tag = await wpFetch(`/tags/${tagId}`);
            return tag.name;
          } catch (error) {
            console.error("Error fetching tag:", error);
            return "";
          }
        })
      ).then((tags) => tags.filter(Boolean));

      return {
        id: post.id,
        slug: post.slug,
        title: post.title?.rendered || "Untitled",
        excerpt: post.excerpt?.rendered?.replace(/<[^>]*>?/gm, "") || "No excerpt available",
        content: post.content?.rendered || "",
        image: imageUrl,
        altText: altText,
        categories: categoryNames,
        primaryCategory: categoryNames[0] || "Uncategorized",
        tags: tagNames,
        author: post._embedded?.author?.[0]?.name || "Admin",
        date: new Date(post.date).toLocaleDateString(),
        readTime: calculateReadTime(post.content?.rendered || ""),
        yoast_head_json: post.yoast_head_json,
      };
    })
  );
};

// Fetch all blogs
export const fetchBlogs = async () => {
  try {
    // Fetch posts with embedded data
    const posts = await wpFetch("/posts?_embed");
    const processedBlogs = await processBlogData(posts);

    // Fetch all categories
    const allCategories = await wpFetch("/categories");

    // Fetch all tags
    const allTags = await wpFetch("/tags");

    return {
      blogs: processedBlogs,
      categories: allCategories,
      tags: allTags
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      blogs: [],
      categories: [],
      tags: []
    };
  }
};

// Fetch blog by slug
export const fetchBlogBySlug = async (slug) => {
  try {
    const posts = await wpFetch(`/posts?slug=${slug}&_embed`);
    if (posts.length === 0) return null;
    
    const processedPosts = await processBlogData(posts);
    return processedPosts[0];
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return null;
  }
};

// Fetch related blogs
export const fetchRelatedBlogs = async (currentBlog, currentSlug) => {
  try {
    // Fetch all blogs and filter for related ones
    const { blogs } = await fetchBlogs();
    
    return blogs.filter(blog => 
      blog.slug !== currentSlug && 
      (blog.categories.some(cat => currentBlog.categories.includes(cat)) || 
      (blog.tags?.some(tag => currentBlog.tags.includes(tag)))))
      .slice(0, 3);
  } catch (error) {
    console.error("Error fetching related blogs:", error);
    return [];
  }
};

// Fetch only blog slugs for generateStaticParams
export const fetchAllBlogSlugs = async () => {
  try {
    const posts = await wpFetch("/posts?per_page=100&fields=slug");
    return posts.map(post => post.slug);
  } catch (error) {
    console.error("Error fetching blog slugs:", error);
    return [];
  }
};
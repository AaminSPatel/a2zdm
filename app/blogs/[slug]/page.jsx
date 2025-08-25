import BlogDetail from './BlogDetail';
import { fetchBlogBySlug, fetchRelatedBlogs, fetchAllBlogSlugs } from '@/data/wordpress';

export default async function BlogPage({ params }) {
  const blog = await fetchBlogBySlug(params.slug);
  const relatedPosts = blog ? await fetchRelatedBlogs(blog, params.slug) : [];
  
  return <BlogDetail blog={blog} relatedPosts={relatedPosts} slug={params.slug} />;
}

export async function generateStaticParams() {
  // Use the correct function to get all blog slugs
  const slugs = await fetchAllBlogSlugs();
  
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const blog = await fetchBlogBySlug(params.slug);
  const siteUrl = "https://a2zdm.com";
  const logoUrl = "/logo.png";

  if (!blog) {
    return {
      title: "Blog Post Not Found | A2ZDM Private Limited",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
      url: `${siteUrl}/blogs/${params.slug}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt,
      images: [blog.image],
    },
  };
}
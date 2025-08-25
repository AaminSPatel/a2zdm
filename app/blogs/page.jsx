// app/blogs/page.js
import BlogsClient from './BlogsClient';
import { fetchBlogs } from '@/data/wordpress';

// This is a server component that fetches data
export default async function BlogsPage() {
  const { blogs, categories, tags } = await fetchBlogs();
  
  return <BlogsClient blogs={blogs} categories={categories} tags={tags} />;
}

export const metadata = {
  title: 'Digital Marketing Insights & Blog | A2ZDM',
  description: 'Expert insights on SEO, analytics, performance marketing and digital trends. Learn actionable strategies to grow your business online.',
};
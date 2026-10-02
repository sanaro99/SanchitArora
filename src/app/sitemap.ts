import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  return [
    { url: DATA.url },
    { url: `${DATA.url}/blog` },
    ...posts.map((post) => ({ url: `${DATA.url}/blog/${post.slug}` })),
  ];
}

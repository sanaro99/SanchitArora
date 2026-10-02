import assert from "node:assert/strict";
import test from "node:test";
import { getBlogPosts, getPost } from "../src/data/blog.ts";

test("a missing blog post returns no post so the route can serve a 404", async () => {
  assert.equal(await getPost("this-post-does-not-exist"), undefined);
});

test("a slug cannot read a file outside the content directory", async () => {
  assert.equal(await getPost("../README"), undefined);
});

test("existing posts retain their metadata and rendered content", async () => {
  const post = await getPost("self-hosting");
  assert.equal(post.metadata.title, "Building My Private Cloud: A TrueNAS Self-Hosting Journey");
  assert.match(post.source, /<h2>Why I Started<\/h2>/);
  const posts = await getBlogPosts();
  assert.equal(posts.filter((item) => item.slug === "self-hosting").length, 1);
});

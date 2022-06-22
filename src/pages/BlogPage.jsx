import React from "react";
import Articles from "../component/blog/articles/articles";
import Blog from "../component/blog/blog";
import LastPost from "../component/blog/lastPosts/lastPost";

function BlogPage() {
  return (
    <>
      <Blog />
      <LastPost />
      <Articles />
    </>
  );
}

export default BlogPage;

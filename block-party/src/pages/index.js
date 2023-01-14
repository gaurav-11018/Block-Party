import { userState, useEffect, useState } from "react";

async function fetchPost() {
  //Fetch from my database

  return {
    title: "My post",
    content: "My post content",
    authorId: 1,
  };
}

async function fetchAuthor(id) {
  //fetch author from the database okay?
  //that id above can be passed here.

  return {
    name: "hasbulla singh",
  };
}

export default function Home() {
  const [loadoingPost, setLoadingPost] = useState(true);
  const [postError, setPostError] = useState(null);
  const [post, setPost] = useState(null);
  const [loadoingAuthor, setLoadingAuthor] = useState(true);
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    async () => {
      const post = await fetchPost();
      setPost(post);
    };
  }, []);

  useEffect(() => {
    async () => {
      if (!post) return;

      const author = await fetchAuthor(post.authorId);
      setAuthor(author);
    };
  }, [post]);

  return (
    <>
      {/*  Post  */}
      {post?.title}

      {/* Author */}
      {author?.name}
    </>
  );
}

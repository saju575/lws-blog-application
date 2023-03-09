import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../features/posts/postsSlice";
import Loading from "../ui/Loading";
import Post from "./Post";

const Posts = () => {
  const { isLoading, isError, error, posts } = useSelector(
    (state) => state.posts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  //decide what to rander
  let content = null;
  if (isLoading) {
    content = (
      <div>
        <Loading />
      </div>
    );
  }
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && posts?.length === 0) {
    content = <div className="col-span-12">No blogs found!</div>;
  }
  if (!isLoading && !isError && posts?.length > 0) {
    content = posts.map((post) => <Post key={post.id} post={post} />);
  }
  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default Posts;

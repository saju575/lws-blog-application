import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import DetailedPosts from "../components/detailedPosts/DetailedPosts";
import RelatedPosts from "../components/relatedPosts/RelatedPosts";

import Loading from "../components/ui/Loading";
import { fetchPost } from "../features/post/postSlice";

const BlogDetails = () => {
  const { isLoading, isError, error, post } = useSelector(
    (state) => state.post
  );
  const { blogId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost({ id: blogId }));
  }, [dispatch, blogId]);
  // console.log(post);
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
  if (!isLoading && !isError && post?.id) {
    content = <div className="col-span-12">No blog found!</div>;
  }
  if (!isLoading && !isError && post?.id) {
    content = <DetailedPosts post={post} />;
  }
  return (
    <>
      <div className="container mt-8">
        <Link
          to={"/"}
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      <section className="post-page-container">
        {content}
        <RelatedPosts id={post?.id} tags={post?.tags} />
      </section>
    </>
  );
};

export default BlogDetails;

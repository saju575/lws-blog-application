import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPosts } from "../../features/relatedPosts/relatedPostsSlice";
import Loading from "../ui/Loading";
import RelatedPost from "./RelatedPost";

const RelatedPosts = ({ id, tags }) => {
  const { isLoading, relatedPosts } = useSelector(
    (state) => state.relatedPosts
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRelatedPosts({ id, tags, limit: 5 }));
  }, [dispatch, id, tags]);
  //what to rander
  let content = null;
  if (isLoading) {
    content = <Loading />;
  }
  if (!isLoading && relatedPosts.length > 0) {
    content = relatedPosts.map((relatedPost) => (
      <RelatedPost key={relatedPost.id} relatedPost={relatedPost} />
    ));
  }
  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">{content}</div>
    </aside>
  );
};

export default RelatedPosts;

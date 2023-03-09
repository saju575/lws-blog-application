import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title, image, tags, likes, isSaved, createdAt } = post || {};
  return (
    <div className="lws-card">
      <Link to={`/blogDetails/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>
            {likes}
          </p>
        </div>
        <Link to={`/blogDetails/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          {tags.map((tag, k) => (
            <span key={k} style={{ fontSize: "12px" }}>{`#${tag}`}</span>
          ))}
          {/* <span>#python,</span> <span>#tech,</span> <span>#git</span> */}
        </div>
        {/* <!-- Show this element if post is saved --> */}
        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}
        {/* <!-- Show this element if post is saved Ends --> */}
      </div>
    </div>
  );
};

export default Post;

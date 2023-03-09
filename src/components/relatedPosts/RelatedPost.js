import React from "react";
import { Link } from "react-router-dom";

const RelatedPost = ({ relatedPost }) => {
  const { image, id, title, tags, createdAt } = relatedPost || {};
  return (
    <div className="card">
      <Link to={`/blogDetails/${id}`}>
        <img src={image} className="card-image" alt={title} />
      </Link>
      <div className="p-4">
        <Link
          to={`/blogDetails/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          {tags.map((tag, k) => (
            <span key={k} style={{ fontSize: "18px" }}>{`#${tag}`}</span>
          ))}
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedPost;

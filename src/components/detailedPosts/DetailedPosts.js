import React from "react";
import { useDispatch } from "react-redux";
import { setPostLikes, setPostSaved } from "../../features/post/postSlice";

const DetailedPosts = ({ post }) => {
  const { id, description, title, image, tags, likes, isSaved, createdAt } =
    post || {};

  const dispatch = useDispatch();
  const handleSave = () => {
    if (isSaved) {
      dispatch(setPostSaved({ id, isSaved: false }));
    } else {
      dispatch(setPostSaved({ id, isSaved: true }));
    }
  };

  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags.map((tag, k) => (
            <span key={k} style={{ fontSize: "18px" }}>{`#${tag}`}</span>
          ))}
        </div>
        <div className="btn-group">
          {/* <!-- handle like on button click --> */}
          <button
            className="like-btn"
            id="lws-singleLinks"
            onClick={() => dispatch(setPostLikes({ id, likes: likes + 1 }))}
          >
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          {/* <!-- handle save on button click -->
  <!-- use ".active" class and "Saved" text  if a post is saved, other wise "Save" --> */}
          <button
            onClick={handleSave}
            className={`${isSaved ? "active" : ""} save-btn`}
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i>{" "}
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default DetailedPosts;

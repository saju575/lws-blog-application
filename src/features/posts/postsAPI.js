import axios from "../../utils/axios";
export const getPosts = async ({ sort, filter }) => {
  let queryString = "";
  if (filter === "saved") {
    queryString += "isSaved_ne=false";
  }
  if (sort) {
    if (sort === "most_liked") {
      queryString += "&_sort=likes&_order=desc";
    } else if (sort === "newest") {
      queryString += "&_sort=createdAt&_order=desc";
    }
  }
  const response = await axios.get(`/blogs?${queryString}`);
  return response.data;
};

import axios from "../../utils/axios";
export const getPost = async ({ id }) => {
  const response = await axios.get(`/blogs/${id}`);
  return response.data;
};

export const setLikes = async ({ id, likes }) => {
  const response = await axios.patch(`/blogs/${id}`, { likes });
  return response.data;
};

export const setSaved = async ({ id, isSaved }) => {
  const response = await axios.patch(`/blogs/${id}`, { isSaved });
  return response.data;
};

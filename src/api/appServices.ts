import axios from "axios";
import iEdittedPost from "../interfaces/iEdittedPost";

const baseUrl = "https://dev.codeleap.co.uk/careers/";

const getIP = async () => {
  const response = await axios.get("https://api.ipify.org?format=json");
  return response.data.ip;
};

const createPost = async (username: string, title: string, content: string) => {
  const body = {
    username,
    title,
    content,
  };
  const response = await axios.post(baseUrl, body);
  return response;
};

const getAllPosts = async () => {
  const response = await axios.get(baseUrl);
  return response;
};

const deletePost = async (id: number) => {
  const response = await axios.delete(`${baseUrl}${id}/`);
  return response;
};

const editPost = async (id: number, object: iEdittedPost) => {
  const response = await axios.patch(`${baseUrl}${id}/`, object);
  return response;
};

export { createPost, getAllPosts, deletePost, getIP, editPost };

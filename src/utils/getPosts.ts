import { getAllPosts } from "../api/appServices";

export default async function getPosts(setAllPosts: any) {
  const response = await getAllPosts();
  if (response.status == 200) {
    setAllPosts(response.data.results);
  }
}

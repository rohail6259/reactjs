import axios from "axios";
import { apiPostsEndPoint } from "../config.json";

export function getPostData() {
  try {
    return axios.get(apiPostsEndPoint);
  } catch (error) {
    console.log(error);
  }
}

export function getPostById(id) {
  try {
    return axios.get(`${apiPostsEndPoint}/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export function addPostData(data) {
  try {
    return axios.post(apiPostsEndPoint, data);
  } catch (error) {
    console.log(error);
  }
}

export function updatePostData(data, id) {
  try {
    return axios.put(`${apiPostsEndPoint}${id}`, data);
  } catch (error) {
    console.log(error);
  }
}


export function deletePostData(id) {
  try {
    return axios.delete(`${apiPostsEndPoint}/${id}`);
  } catch (error) {
    console.log(error);
  }
}

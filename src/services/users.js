import axios from "axios";
import { apiUsersEndPoint } from "../config.json";

export default async function getUserData() {
  try {
    const { data } = await axios.get(apiUsersEndPoint);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}

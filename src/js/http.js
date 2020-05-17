import axios from "axios";

export const posts = () => {
  console.log("Fetching data...");
  return axios
    .get("https://jsonplaceholder.typicode.com/todos/2")
    .then((response) => {
      return response.data;
    });
};
// export const posts = axios.get(url).then((response) => response.data);

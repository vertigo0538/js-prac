import axios from "axios";

export const posts = async () => {
  console.log("Fetching data...");
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/2"
  );
  return response;
};
// export const posts = axios.get(url).then((response) => response.data);

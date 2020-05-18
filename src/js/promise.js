export const posts = [
  { title: "post1", content: "post1 content" },
  { title: "post2", content: "post2 content" },
];

export function getPosts() {
  let outPut = "";
  // setTimeout(() => {
  posts.forEach((posts) => {
    outPut += `<li>${posts.content}</li>`;
  });
  document.body.innerHTML = outPut;
  // }, 1000);
}
export function createPost(post, callback) {
  // setTimeout(() => {
  posts.push(post);
  callback();
  // }, 2000);
}

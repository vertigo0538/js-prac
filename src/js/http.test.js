import { posts } from "./http";

// promise
test("promise test ", async () => {
  expect.assertions(1);
  const { data } = await posts();
  expect(data.content).toEqual("test");
});

import { posts } from "./http";

// promise
test("promise test ", () => {
  expect.assertions(1);
  return posts().then((data) => {
    expect(data.content).toEqual("test");
  });
});

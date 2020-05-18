import mockAxios from "axios";
import { posts } from "./http";

// promise
test("promise test ", async () => {
  mockAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        id: 1,
        title: "hi",
        content: "test",
      },
    })
  );
  // work
  const { data } = await posts();
  // assertions / expects
  expect.assertions(3);
  expect(data.content).toEqual("test");
  expect(mockAxios.get).toHaveBeenCalledTimes(1);
  expect(mockAxios.get).toHaveBeenCalledWith(
    "https://jsonplaceholder.typicode.com/todos/2"
  );
});

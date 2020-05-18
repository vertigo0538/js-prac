export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        id: 1,
        title: "hello, world",
        content: "test",
      },
    })
  ),
};

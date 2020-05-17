const get = (url) => {
  return Promise.resolve({
    data: { id: 3, title: "delectus aut autem", content: "test" },
  });
};

exports.get = get;

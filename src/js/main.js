import { pick } from "./restParameter";
import { spreadOperator } from "./spreadOperator";

let book = {
  title: "test",
  author: "khk",
  year: 2020,
};
let bookData = pick(book, "author", "title");
console.log(bookData.author);

// spreadOperator
spreadOperator();

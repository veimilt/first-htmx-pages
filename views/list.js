import BOOKS_DATA from "../data/data.js";
import createBookTemplate from "./book.js";

const createListTemplate = (books = BOOKS_DATA) => /*html*/ `
<ul>
  ${books
    .map((book) => createBookTemplate(book))
    .reverse()
    .join("")}
</ul>
`;

export default createListTemplate;

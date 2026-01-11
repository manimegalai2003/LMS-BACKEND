
export function getAuthors() {
  return JSON.parse(localStorage.getItem("authors")) || [];
}

export function addAuthor(name) {
  const authors = getAuthors();
  authors.push(name);
  localStorage.setItem("authors", JSON.stringify(authors));
}
export function deleteAuthor(name) {
  const authors = getAuthors().filter((a) => a !== name);
  localStorage.setItem("authors", JSON.stringify(authors));
}
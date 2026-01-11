
export function getCategories() {
  return JSON.parse(localStorage.getItem("categories")) || [];
}

export function addCategory(name) {
  const categories = getCategories();
  categories.push(name);
  localStorage.setItem("categories", JSON.stringify(categories));
}
export function deleteCategory(name) {
  const categories = getCategories().filter((c) => c !== name);
  localStorage.setItem("categories", JSON.stringify(categories));
}
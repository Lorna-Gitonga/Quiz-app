const BASE_URL = "https://opentdb.com";

export const fetchCategories = async () => {
  
  const res = await fetch(`${BASE_URL}/api_category.php`);
  if (!res.ok) throw new Error("Failed to fetch categories");
  const data = await res.json();
  return data.trivia_categories;
};

export const fetchQuestions = async ({ amount, category, difficulty }) => {
  const url = `${BASE_URL}/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch questions");

  const data = await res.json();
  if (data.response_code !== 0) throw new Error("No questions found");
  return data.results;
};
const BASE_URL = "https://opentdb.com";

export const fetchCategories = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api_category.php`);
    if (!res.ok) throw new Error("Failed to fetch categories");
    const data = await res.json();
    return data.trivia_categories;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchQuestions = async ({ amount, category, difficulty }) => {
  try {

    const url = `${BASE_URL}/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch questions");

    const data = await res.json();
    if (data.response_code !== 0) {
      throw new Error("No questions found for your selection.");
    }

    return data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
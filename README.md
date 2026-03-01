  A basic Quiz Application built with React and Zustand for state management.
What it does;

Users can search for quiz topics using a search bar.

If no topics match the search, it shows a friendly message instead of breaking.

Users can select a category and take a quiz.

The app tracks the score while the quiz is happening.

After finishing, the score is saved in Quiz History.

Users can see all their previous quiz attempts and scores.

Features

Search Functionality
You can type something like "history" and it will filter the available categories. It also properly handles cases where nothing matches the search.

Quiz System
Each quiz shows questions one by one and keeps track of your score. It makes sure a category is selected before starting (but doesn’t incorrectly block valid searches anymore).

Quiz History
All completed quizzes are saved so users can see what they scored in the past.

The Tech Used

React

React Router

Zustand (for global state management)

Vite

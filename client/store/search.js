import axios from "axios";
import { makeActionCreator, makeReducer } from "./factoryFunctions";

// ACTION TYPES
const SET_BOOKS = "SET_BOOKS";
const SET_ERROR = "SET_ERROR";

// ACTION CREATORS
// const setBooks = (books) => ({
//   type: SET_BOOKS,
//   books,
// });
const setBooks = makeActionCreator(SET_BOOKS, "books");
const setError = makeActionCreator(SET_ERROR, "error");

// THUNKS
export const fetchBooks = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/search");
    dispatch(setBooks(data)); 
  } catch (error) {
    dispatch(setError(error));
  }
}

// REDUCER
const selectBooks = (_, action) => action.books;
const selectError = (_, action) => action.error;

const searchReducer = makeReducer({}, {
  SET_BOOKS: selectBooks,
  SET_ERROR: selectError,
});

export default searchReducer;
import axios from "axios";
import history from "../history";
import { makeActionCreator, makeReducer } from "./factoryFunctions";

const TOKEN = "token";

/**
 * ACTION TYPES
 */
const SET_AUTH_USER = "SET_AUTH_USER";
const SET_AUTH_ERROR = "SET_AUTH_ERROR";

/**
 * ACTION CREATORS
 */
const setAuthUser = makeActionCreator(SET_AUTH_USER, "user");
const setAuthError = makeActionCreator(SET_AUTH_ERROR, "error");

/**
 * THUNK CREATORS
 */
export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);
  if (token) {
    const res = await axios.get("/auth/me", {
      headers: {
        authorization: token,
      },
    });
    return dispatch(setAuthUser(res.data));
  }
};

export const authenticate =
  (username, password, method) => async (dispatch) => {
    try {
      const res = await axios.post(`/auth/${method}`, { username, password });
      window.localStorage.setItem(TOKEN, res.data.token);
      dispatch(me());
    } catch (authError) {
      return dispatch(setAuthError({ error: authError }));
    }
  };

export const logout = () => {
  window.localStorage.removeItem(TOKEN);
  return setAuthUser({});
};

/**
 * REDUCER
 */
const selectUser = (state, action) => action.user;
const selectError = (state, action) => action.error;

const authReducer = makeReducer({}, {
  SET_AUTH_USER: selectUser,
  SET_AUTH_ERROR: selectError,
});

export default authReducer;
export const makeActionCreator = (type, ...argNames) => {
  return (...args) => {
    const action = { type };
    argNames.forEach((arg, idx) => action[arg] = args[idx]);
    return action;
  }
}

export const makeReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else return state;
  } 
}
const APP_TITLE = "APP_TITLE";

const stateInitial = {
  title: "Panel",
};

export const appReducer = (state = stateInitial, action) => {
  console.log('action', action)
  switch (action.type) {
    case APP_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    default:
      return state;
  }
};

export const setTitle = title => {
  return dispatch => {
    dispatch({
      type: APP_TITLE,
      payload: title
    });
  }
}
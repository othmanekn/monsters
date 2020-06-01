import { CHANGE_SERACH_FIELD } from "./constants";

const initialState = {
  serachField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SERACH_FIELD:
      return { ...state, serachField: action.payload };
    default:
      return state;
  }
};

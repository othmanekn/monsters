import { CHANGE_SERACH_FIELD } from "./constants";

export const setSearchField = (text) => ({
  type: CHANGE_SERACH_FIELD,
  payload: text,
});

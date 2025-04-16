import { RootState } from "../store";

export const habits = (state: RootState) => {
  return state.habit;
};

import { createSlice } from "@reduxjs/toolkit";
interface HabitState {
  name: string;
  category: string;
  suggestedTime: string;
  reminderEnabled: boolean;
}

const initialState: HabitState[] = [
  {
    name: "",
    category: "",
    suggestedTime: "",
    reminderEnabled: false,
  },
];

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    add_habit: (state, action) => {
      state.push(action.payload);
    },
    delete_habit: (state, action) => {
      state = state.filter((habit) => habit.name !== action.payload.name);
      return state;
    },
  },
});

export default habitSlice.reducer;
export const { add_habit, delete_habit } = habitSlice.actions;

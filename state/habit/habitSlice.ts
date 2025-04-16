import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface HabitState {
  name?: string;
  category?: string;
  suggestedTime?: string;
  reminder?: boolean;
  goalType?: string;
}

const initialState: HabitState[] = [];

const habitSlice = createSlice({
  name: "habit",
  initialState,
  reducers: {
    add_habit: (state, action: PayloadAction<HabitState>) => {
      state.push(action.payload);
    },
    delete_habit: (state, action: PayloadAction<HabitState>) => {
      state = state.filter((habit) => habit.name !== action.payload.name);
      return state;
    },
  },
});

export default habitSlice.reducer;
export const { add_habit, delete_habit } = habitSlice.actions;

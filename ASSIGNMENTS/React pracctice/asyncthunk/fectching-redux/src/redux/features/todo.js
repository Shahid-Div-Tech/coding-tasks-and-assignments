import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchdata = createAsyncThunk("tododata", async () => {
  const response = await fetch("https://dummyjson.com/todos");

  return await response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: null,
    loding: false,
    error: false,
  },

  reducers: {
    deleteTodo: (state, action) => {
      state.todo.todos = state.todo.todos.filter((item) => {
        return item.id != action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchdata.pending, (state) => {
      state.loding = true;
    });

    builder.addCase(fetchdata.fulfilled, (state, action) => {
      state.todo = action.payload;
      state.loding = false;
    });

    builder.addCase(fetchdata.rejected, (state, action) => {
      state.loding = false;
      state.error = action.error.message;
    });
  },
});

export default todoSlice.reducer;

export const { deleteTodo } = todoSlice.actions;

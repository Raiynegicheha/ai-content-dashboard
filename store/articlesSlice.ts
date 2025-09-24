import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Article {
  id: number;
  title: string;
  status: string;
}

interface ArticlesState {
  list: Article[];
}

const initialState: ArticlesState = {
  list: [],
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles(state, action: PayloadAction<Article[]>) {
      state.list = action.payload;
    },
    addArticle(state, action: PayloadAction<Article>) {
      state.list.push(action.payload);
    },
    updateArticle(state, action: PayloadAction<Article>) {
      const index = state.list.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteArticle(state, action: PayloadAction<number>) {
      state.list = state.list.filter(a => a.id !== action.payload);
    }
  },
});

export const { setArticles, addArticle, updateArticle, deleteArticle } = articlesSlice.actions;
export default articlesSlice.reducer;

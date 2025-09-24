"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setArticles, addArticle } from "../../store/articlesSlice";
import ArticleTable from "../../Components/ArticleTable";
import { Button } from "@mui/material";

export default function Dashboard() {
  const dispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.articles.list);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => dispatch(setArticles(data)));
  }, [dispatch]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <Button
        variant="contained"
        color="primary"
        className="mb-4"
        onClick={() => {
          const newArticle = {
            id: Date.now(),
            title: "New Article",
            status: "Draft",
          };
          dispatch(addArticle(newArticle));
        }}
      >
        Add Article
      </Button>
      <ArticleTable articles={articles} />
    </div>
  );
}

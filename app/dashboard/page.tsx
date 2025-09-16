"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setArticles } from "../../store/articlesSlice";
import ArticleTable from "../../Components/ArticleTable";

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
      <ArticleTable articles={articles} />
    </div>
  );
}

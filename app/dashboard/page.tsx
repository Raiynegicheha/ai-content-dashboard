"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setArticles, addArticle, updateArticle } from "../../store/articlesSlice";
import ArticleTable from "../../Components/ArticleTable";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

export default function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const [editingArticle, setEditingArticle] = React.useState<{
    id: number;
    title: string;
    status: string;
  } | null>(null);
  console.log("EditArticles:", editingArticle);
  const dispatch = useDispatch();
  const articles = useSelector((state: RootState) => state.articles.list);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((data) => dispatch(setArticles(data)));
  }, [dispatch]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData as any).entries());
    const title = formJson.title;
    const status = formJson.status;
    console.log({ title, status });
    if (editingArticle) {
      const updatedArticle = { ...editingArticle, title, status };
      dispatch(updateArticle(updatedArticle));
    }else {
      const newArticle = {
        id: Date.now(),
        title: title as string,
        status: status as string,
      };
      dispatch(addArticle(newArticle));
    }
    handleClose();
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Articles</h1>
      <Button
        variant="contained"
        color="primary"
        className="mb-4"
        onClick={() => {
          setEditingArticle(null);
          handleOpen();
        }}
        // onClick={() => {
        //   const newArticle = {
        //     id: Date.now(),
        //     title: "New Article",
        //     status: "Draft",
        //   };
        //   dispatch(addArticle(newArticle));
        // }}
      >
        Add Article
      </Button>
      <ArticleTable articles={articles} handleOpen={handleOpen} setEditArticle={setEditingArticle} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editingArticle
            ? `Update Article: ${editingArticle.title}`
            : "Add article"}{" "}
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} id="subscription-form">
            <TextField
              id="title"
              autoFocus
              required
              name="title"
              label="Title"
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue={editingArticle?.title || ""}
            />
            <TextField
              id="status"
              label="Status"
              name="status"
              hiddenLabel
              variant="outlined"
              fullWidth
              margin="normal"
              defaultValue={editingArticle?.status || ""}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            {editingArticle ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

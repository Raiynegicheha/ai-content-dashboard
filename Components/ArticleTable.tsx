"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import React from "react";
import { updateArticle, deleteArticle } from "../store/articlesSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Article {
  id: number;
  title: string;
  status: string;
}

export default function ArticleTable({
  articles,
  setEditArticle,
  handleOpen,
}: {
  articles: Article[];
  setEditArticle: (article: Article) => void;
  handleOpen: () => void;
}) {
  // const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   const formJson = Object.fromEntries((formData as any).entries());
  //   const title = formJson.title;
  //   const status = formJson.status;
  //   console.log({ title, status });
  //   if (editingArticle) {
  //     const updatedArticle = { ...editingArticle, title, status };
  //     dispatch(updateArticle(updatedArticle));
  //   }
  //   handleClose();
  // };
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.id}</TableCell>
              <TableCell>{a.title}</TableCell>
              <TableCell>{a.status}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setEditArticle(a);
                    // setOpen(true);
                    handleOpen();
                  }}
                  style={{
                    padding: "6px 12px",
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Update
                </Button>
                <Button
                  onClick={() => {
                    dispatch(deleteArticle(a.id));
                  }}
                  style={{
                    padding: "6px 12px",
                    background: "#d32f2f",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    margin: "0 8px",
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Dialog open={open} onClose={handleClose}>
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
            Update
          </Button>
        </DialogActions>
      </Dialog> */}
    </Paper>
  );
}

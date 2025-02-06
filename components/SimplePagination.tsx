import React, { useState, useEffect } from "react";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

interface Post {
  id: number;
  title: string;
  body: string;
}

const SimplePagination: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);

  const fetchData = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`);
    const newData: Post[] = await response.json();
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleNextClick = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <Typography variant="h4" gutterBottom>
        Posts
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.title}</TableCell>
                <TableCell>{post.body}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNextClick}
        sx={{ mt: 2 }}
      >
        Next
      </Button>
    </div>
  );
};

export default SimplePagination;

import BookCard from "./Card/BookCard";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

const Cards = ({ books }) => {
  const [visible, setVisible] = useState(6);
  return (
    <Container fixed sx={{ p: 10 }}>
      <Grid container spacing={2}>
        {books?.slice(0, visible).map((book) => (
          <Grid key={book.id} item xs={12} sm={6} md={3}>
            <BookCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;

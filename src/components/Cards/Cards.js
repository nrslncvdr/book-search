import BookCard from "./Card/BookCard";
import { Container, Grid } from "@mui/material";

const Cards = () => {
  return (
    <Container fixed sx={{ p: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BookCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <BookCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cards;

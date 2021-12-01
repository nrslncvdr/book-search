import BookCard from "./Card/BookCard";
import { Container, Grid } from "@mui/material";

const Cards = ({ books, setSelectedBook, showModal, isLoading }) => {
  return (
    <Container fixed sx={{ p: 2.5 }}>
      <Grid container spacing={2}>
        {books?.map((book) => (
          <Grid key={book.id} item xs={12} sm={6} md={4} lg={3}>
            <BookCard
              book={book}
              setSelectedBook={setSelectedBook}
              showModal={showModal}
              isLoading={isLoading}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Cards;

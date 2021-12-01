import { Container, Grid, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <>
      <Container fixed sx={{ p: 2.5, paddingBottom: 30 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Skeleton
              variant="rectangular"
              width={230}
              height={300}
              sx={{ borderRadius: 2.5, marginBottom: 1, mx: "auto" }}
            />
            <Skeleton
              width={230}
              sx={{ marginBottom: 0.5, mx: "auto" }}
              animation="wave"
            />
            <Skeleton width={230} animation="wave" sx={{ mx: "auto" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Skeleton
              variant="rectangular"
              width={230}
              height={300}
              sx={{ borderRadius: 2.5, marginBottom: 1, mx: "auto" }}
            />
            <Skeleton
              width={230}
              sx={{ marginBottom: 0.5, mx: "auto" }}
              animation="wave"
            />
            <Skeleton width={230} animation="wave" sx={{ mx: "auto" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Skeleton
              variant="rectangular"
              width={230}
              height={300}
              sx={{ borderRadius: 2.5, marginBottom: 1, mx: "auto" }}
            />
            <Skeleton
              width={230}
              sx={{ marginBottom: 0.5, mx: "auto" }}
              animation="wave"
            />
            <Skeleton width={230} animation="wave" sx={{ mx: "auto" }} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Skeleton
              variant="rectangular"
              width={230}
              height={300}
              sx={{ borderRadius: 2.5, marginBottom: 1, mx: "auto" }}
            />
            <Skeleton
              width={230}
              sx={{ marginBottom: 0.5, mx: "auto" }}
              animation="wave"
            />
            <Skeleton width={230} animation="wave" sx={{ mx: "auto" }} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CardSkeleton;

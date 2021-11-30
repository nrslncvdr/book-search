import { Container, Grid, Box, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <>
      <Container fixed sx={{ p: 5 }}>
        <Grid container spacing={2.5}>
          <Grid container spacing={2} item xs={12} sm={6} md={3}>
            <Box>
              <Skeleton
                variant="rectangular"
                width={230}
                height={300}
                sx={{ borderRadius: 2.5, marginBottom: 1 }}
              />
              <Skeleton sx={{ marginBottom: 0.5 }} animation="wave" />
              <Skeleton animation="wave" />
            </Box>
          </Grid>
          <Grid container spacing={2} item xs={12} sm={6} md={3}>
            <Box>
              <Skeleton
                variant="rectangular"
                width={230}
                height={300}
                sx={{ borderRadius: 2.5, marginBottom: 1 }}
              />
              <Skeleton sx={{ marginBottom: 0.5 }} animation="wave" />
              <Skeleton animation="wave" />
            </Box>
          </Grid>
          <Grid container spacing={2} item xs={12} sm={6} md={3}>
            <Box>
              <Skeleton
                variant="rectangular"
                width={230}
                height={300}
                sx={{ borderRadius: 2.5, marginBottom: 1 }}
              />
              <Skeleton sx={{ marginBottom: 0.5 }} animation="wave" />
              <Skeleton animation="wave" />
            </Box>
          </Grid>
          <Grid container spacing={2} item xs={12} sm={6} md={3}>
            <Box>
              <Skeleton
                variant="rectangular"
                width={230}
                height={300}
                sx={{ borderRadius: 2.5, marginBottom: 1 }}
              />
              <Skeleton sx={{ marginBottom: 0.5 }} animation="wave" />
              <Skeleton animation="wave" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CardSkeleton;

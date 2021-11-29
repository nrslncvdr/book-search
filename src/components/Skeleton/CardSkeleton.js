import { Box, Skeleton } from "@mui/material";

const CardSkeleton = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default CardSkeleton;

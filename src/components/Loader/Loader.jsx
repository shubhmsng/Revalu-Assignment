import { CircularProgress } from "@mui/material";
import { LoaderContainer } from "./styles";

const Loader = () => {
  return (
    <LoaderContainer>
      <CircularProgress />
    </LoaderContainer>
  );
};

export default Loader;

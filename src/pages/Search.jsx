import { useLocation } from 'react-router-dom';
import { Container } from "react-bootstrap";

const Search = () => {
  const { state } = useLocation();
  return (
    <Container>
      <h2>Results for: {state?.query}</h2>
      {/* Display search results here */}
    </Container>
  );
};

export default Search;
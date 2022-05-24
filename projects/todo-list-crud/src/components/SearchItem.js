import styled from 'styled-components';

const SearchItem = ({ search, setSearch }) => {
  return (
    // pass in prevent default method straight away
    <Form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="search"
        id="search"
        role="searchbox"
        placeholder="Search items"
        // set initial state
        value={search}
        // updated state based on user typing
        onChange={(e) => setSearch(e.target.value)}
      />
    </Form>
  );
};

export default SearchItem;

// styles
const Form = styled.form`
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: #e7e9eb;
  border-radius: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  label {
    display: none;
  }
  input {
    border: none;
    background: transparent;
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 0.35rem;
    background-color: #ffffff;
    &::placeholder {
      color: grey;
    }
  }
`;

import styled from 'styled-components';

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    // pass in onSubmit event with 'handleSubmit' (event is implicitly passed with function)
    <Form onSubmit={handleSubmit}>
      <label>Add item</label>
      <input
        type="text"
        placeholder="Add item"
        required
        // set value for controlled input
        value={newItem}
        // as we type in the input, it will set the new state for newItem
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default AddItem;

// styles
const Form = styled.form`
  margin-top: 1rem;
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
  button {
    border: none;
    background: transparent;
    height: 100%;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
    font-size: 0.9rem;
    color: white;
    background-color: darkorange;
    border-radius: 0.35rem;
    &:hover {
      opacity: 0.9;
    }
  }
`;

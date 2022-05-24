import styled from 'styled-components';

// styles for when the item is complete
const taskComplete = {
  textDecoration: 'line-through',
  color: 'grey',
};

const LineItem = ({ item, handleChecked, handleDelete }) => {
  return (
    <Li>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChecked(item.id)}
      />
      <label style={item.checked ? taskComplete : null}>{item.task}</label>
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </Li>
  );
};

export default LineItem;

// styles
const Li = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.35rem 0.5rem;
  background-color: #e7e9eb;
  border-radius: 0.35rem;
  input {
    cursor: pointer;
  }
  button {
    border: none;
    background: transparent;
    padding: 0.25rem;
    cursor: pointer;
    font-size: 0.7rem;
    color: white;
    background-color: crimson;
    border-radius: 0.35rem;
    &:hover {
      opacity: 0.9;
    }
  }
`;

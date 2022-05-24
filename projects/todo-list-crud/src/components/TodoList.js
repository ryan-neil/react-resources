import styled from 'styled-components';
// components
import ItemList from './ItemList';

const TodoList = ({ items, handleChecked, handleDelete }) => {
  return (
    <TodoStyled>
      {items.length ? (
        <ItemList
          items={items}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ) : (
        <h3>Your list is empty...</h3>
      )}
    </TodoStyled>
  );
};

export default TodoList;

// styles
const TodoStyled = styled.div`
  height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

import styled from 'styled-components';
// components
import LineItem from './LineItem';

const ItemList = ({ items, handleChecked, handleDelete }) => {
  return (
    <Ul>
      {items.map((item) => {
        return (
          <LineItem
            key={item.id}
            item={item}
            handleChecked={handleChecked}
            handleDelete={handleDelete}
          />
        );
      })}
    </Ul>
  );
};

export default ItemList;

// styles
const Ul = styled.ul`
  width: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

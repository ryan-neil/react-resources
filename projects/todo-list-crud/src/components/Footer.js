import styled from 'styled-components';

const Footer = ({ length }) => {
  return (
    <FooterStyled>
      <h2>
        {length} Todo {length === 1 ? 'item' : 'items'}
      </h2>
    </FooterStyled>
  );
};

Footer.defaultProps = {
  length: 0,
};

export default Footer;

// styles
const FooterStyled = styled.footer`
  width: 100%;
  text-align: center;
  background-color: royalblue;
  color: white;
  padding: 0.5rem 0;
  h2 {
    font-size: 1.6rem;
    font-weight: 400;
  }
  p {
    font-size: 0.6rem;
    font-weight: 400;
  }
`;

import { Link } from "react-router-dom";
import { Container, CardWrapper, ProductName } from "./ProductList.styled";
import PropTypes from 'prop-types';

export const ProductList = ({ products }) => {
    return(
        <Container>
            {products.map((product) => (
                <CardWrapper key={product.id}>
                    <Link to={`${product.id}`}>
                    <img src="https://via.placeholder.com/200x100" alt="" />
                    <ProductName>{product.name}</ProductName>
                    </Link>
                </CardWrapper>
            ))}
        </Container>
    )
}
ProductList.propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  };
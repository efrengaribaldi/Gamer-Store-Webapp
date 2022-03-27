import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobails, tablet } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobails} {
    padding: 0;
    flex-direction: column;
  }

  ${tablet} {
    padding: 5px;
    flex-direction: column;
  }
`;

const Categories: React.FC = () => {
  return (
    <Container>
      
      {categories.map((item) => (
        <Link to={`/products/${item.cat}`}>
        <CategoryItem
          id={item.id}
          img={item.img}
          title={item.title}
          cat={item.cat}
          key={item.id}
        />
        </Link>
      ))}
    </Container>
  );
};

export default Categories;

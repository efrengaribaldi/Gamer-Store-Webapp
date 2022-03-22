import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobails } from "../responsive";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  ${mobails} {
    padding: 0;
    flex-direction: column;
  }
`;

const Categories: React.FC = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem
          id={item.id}
          img={item.img}
          title={item.title}
          cat={item.cat}
          key={item.id}
        />
      ))}
    </Container>
  );
};

export default Categories;

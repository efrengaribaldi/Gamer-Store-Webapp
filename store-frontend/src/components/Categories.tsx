import styled from "styled-components";
import {categories} from "../data";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Categories: React.FC = () => {
    return <Container>
         {categories.map(item=>(
              <CategoryItem id={item.id} img={item.img} title={item.title} key={item.id}/> 
                ))}
        </Container>
        ;
  };
  
  export default Categories;
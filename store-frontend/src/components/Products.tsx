import styled from "styled-components";
import {popularProducts} from "../data"
import Product from "./Product"

const Container = styled.div`
   padding: 20px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`

const Products: React.FC = () => {
    return <Container>
            {popularProducts.map(item=>(
              <Product id={item.id} img={item.img} key={item.id}/>  
            ))}
        </Container>
        ;
  };
  
  export default Products;
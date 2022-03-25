import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobails, tablet } from "../responsive";

interface PropsColor {
  color: string;
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobails} {
    padding: 10px;
    flex-direction: column;
  }
  ${tablet} {
    flex-direction: column;
  }
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobails} {
    height: 75%;
  }
  ${tablet} {
    height: 80%;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobails} {
    padding: 10px;
  }
  ${tablet} {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobails} {
    width: 100%;
  }
  ${tablet} {
    width: 100%;
  }
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(p: PropsColor) => p.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobails} {
    width: 100%;
  }
  ${tablet} {
    width: 100%;
  }
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductView: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />

      <Wrapper>
        <ImgContainer>
          <Image src="https://m.media-amazon.com/images/I/71eXWvF3bEL._AC_SS450_.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Razer Mouse</Title>
          <Desc>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In,
            suscipit itaque. Voluptates, similique. Ullam voluptatem ab fuga
            nesciunt ex officia quis, facere, eos doloribus repellat est earum
            vero corporis. Quae.
          </Desc>
          <Price>$ 59</Price>

          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black"></FilterColor>
              <FilterColor color="darkblue"></FilterColor>
              <FilterColor color="gray"></FilterColor>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductView;

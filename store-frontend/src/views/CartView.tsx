import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
  types: string;
}
interface Color {
  colors: string;
}
interface Types {
  types: string;
}

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopTexts = styled.div``;
const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(p: Props) => p.types === "filled" && "none"};
  background-color: ${(p: Props) =>
    p.types === "filled" ? "black" : "transparent"};
  color: ${(p: Props) => p.types === "filled" && "white"};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(p: Color) => p.colors};
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(p: Types) => p.types === "total" && "500"};
  font-size: ${(p: Types) => p.types === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const CartView: React.FC = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR GAMER BAG</Title>
        <Top>
          <TopButton types="notFilled">KEEP SEARCHING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>

          <TopButton types="filled">BUY NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Details>
                  <ProductName>
                    <b>Product: </b>GAMER KEYBOARD
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>146516516
                  </ProductId>
                  <ProductColor colors="black" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$250</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                <Details>
                  <ProductName>
                    <b>Product: </b>GAMER KEYBOARD
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>146516516
                  </ProductId>
                  <ProductColor colors="black" />
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove />
                  <ProductAmount>2</ProductAmount>
                  <Add />
                </ProductAmountContainer>
                <ProductPrice>$250</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER CHECKOUT</SummaryTitle>
            <SummaryItem types="not">
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$440</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem types="not">
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>$30</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem types="not">
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>-$15.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem types="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>-$464.01</SummaryItemPrice>
            </SummaryItem>

            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default CartView;

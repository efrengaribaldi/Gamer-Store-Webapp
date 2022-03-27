import { Add, Remove } from "@material-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { deleteProduct } from "../redux/apiCalls";
import { removeProduct } from "../redux/cartRedux";
import { mobails, tablet } from "../responsive";

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
  ${mobails} {
    padding: 10px;
  }
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
const TopTexts = styled.div`
  ${mobails} {
    display: none;
  }
`;
const TopText = styled.div`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  ${tablet} {
    font-size: 14px;
  }
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
  ${mobails} {
    flex-direction: column;
  }
  ${tablet} {
    flex-direction: column;
  }
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobails} {
    flex-direction: column;
    margin-bottom: 15px;
  }
  ${tablet} {
    flex-direction: column;
    margin-bottom: 10px;
  }
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
  ${mobails} {
    transform: scale(1.2);
  }
  ${tablet} {
    transform: scale(1.5);
  }
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobails} {
    margin: 5px 15px;
  }
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobails} {
    margin-bottom: 20px;
  }
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
  height: 70vh;
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
  const cart = useSelector((state: any) => state.cart);
  const items = useSelector((state: any) => state.cart.quantity);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleDelete = (product: any) => {
    deleteProduct(product, dispatch);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR GAMER BAG</Title>
        <Top>
          <TopButton types="notFilled">KEEP SEARCHING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag ({items})</TopText>
          </TopTexts>

          <TopButton types="filled">BUY NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map((product: any, index: number) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>Product: </b>
                      {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID: </b>
                      {product._id}
                    </ProductId>
                    <ProductColor colors={product.color} />
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Button onClick={() => handleDelete({...product, index})}>Remove</Button>
                    <ProductAmount>{product.quantity}</ProductAmount>
                  </ProductAmountContainer>
                  <ProductPrice>
                    $ {product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}

            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER CHECKOUT</SummaryTitle>
            <SummaryItem types="not">
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem types="not">
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>$0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem types="not">
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$0</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem types="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
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

import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

interface Props {
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
const Info = styled.div``;
const Summary = styled.div``;

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
          <Info>Info</Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>

      <Footer />
    </Container>
  );
};

export default CartView;

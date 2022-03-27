import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  PhoneEnabled,
  Room,
  Twitter,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobails, tablet } from "../responsive";

interface PropsColor {
  color: string;
}

const Container = styled.div`
  display: flex;
  ${mobails} {
    flex-direction: column;
    width: 100%;
  }
  ${tablet} {
    flex-direction: column;
    width: 100%;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SoacialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(p: PropsColor) => p.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobails} {
    display: none;
  }
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobails} {
    background-color: #eee;
  }
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  ${tablet} {
  }
`;
const Payment = styled.img`
  width: 50%;
  ${tablet} {
    display: none;
  }
`;

const Footer: React.FC = () => {
  return (
    <Container>
      <Left>
        <Logo>GAME-STORE</Logo>
        <Desc>
          Your online gaming store. We have the best and latest PC hardware for
          your gaming needs. Check out our catalog.
        </Desc>
        <SocialContainer>
          <SoacialIcon color="3B5999">
            <Facebook />
          </SoacialIcon>

          <SoacialIcon color="E4405F">
            <Instagram />
          </SoacialIcon>

          <SoacialIcon color="55ACEE">
            <GitHub />
          </SoacialIcon>

          <SoacialIcon color="E60023">
            <Twitter />
          </SoacialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/cart">Cart </Link>
          </ListItem>
          <ListItem>
            <Link to="/products/pc-parts">PC Parts </Link>
          </ListItem>
          <ListItem>
            <Link to="/products/pc-cases">PC Cases </Link>
          </ListItem>
          <ListItem>
            <Link to="/products/pc-add-ons">PC Add-ons </Link>
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Calle 53, Delegacion Coyoacan
          CDMX
        </ContactItem>
        <ContactItem>
          <PhoneEnabled style={{ marginRight: "10px" }} /> 55 7962 1523
        </ContactItem>
        <ContactItem>
          {" "}
          <Email style={{ marginRight: "10px" }} /> gamerStore@gmail.com
        </ContactItem>

        <Payment src="https://www.pngitem.com/pimgs/m/47-479964_accepted-payment-types-payment-types-hd-png-download.png" />
      </Right>
    </Container>
  );
};

export default Footer;

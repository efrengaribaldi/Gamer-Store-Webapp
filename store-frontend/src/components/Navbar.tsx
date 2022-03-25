import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { mobails, tablet } from "../responsive";

const Container = styled.div`
  height: 60px;
  ${mobails} {
    height: 50px;
  }
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobails} {
    padding: 0px 5px;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobails} {
    display: none;
  }
`;
const SearchContainger = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobails} {
    padding-left: 0;
  }
  ${tablet} {
    padding-left: 0;
  }
`;

const Input = styled.input`
  border: none;
  ${mobails} {
    width: 50px;
  }
  ${tablet} {
    width: 60px;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  ${tablet} {
    flex: 0;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobails} {
    display: none;
  }
  ${tablet} {
    font-size: 12px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobails} {
    justify-content: flex-start;
    flex: 4;
    transform: scale(0.8);
  }
  ${tablet} {
    justify-content: flex-end;
    flex: 1;
  }
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobails} {
    font-size: 10px;
    margin-left: 5px;
  }
  ${tablet} {
    font-size: 11px;
    margin-left: 10px;
  }
`;

const Navbar: React.FC = () => {
  const quantity = useSelector((state: any) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainger>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainger>
        </Left>
        <Center>
          <Logo>Gamer-Store</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

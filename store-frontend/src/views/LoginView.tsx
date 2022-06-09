import { IconButton } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobails, tablet } from "../responsive";
import GoogleIcon from "@mui/icons-material/Google";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
  width: 110v;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940https://images.pexels.com/photos/7360387/pexels-photo-7360387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobails} {
    width: 75%;
  }
  ${tablet} {
    width: 70%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  ${tablet} {
    margin-bottom: 10px;
  }
`;
const Error = styled.span`
  color: red;
`;
const LoginView: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { error } = useSelector((state: any) => state.user);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  const handleGoogleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.open(
      `https://gamer-store-webapp-backend.herokuapp.com/api/auth/google`,
      "_self"
    );
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            id="userN"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          ></Input>

          <Input
            id="pwd"
            placeholder="password"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>

          <Button onClick={handleClick}>LOGIN</Button>
          <IconButton onClick={handleGoogleLogin}>
            {"Login with Google"}
            &nbsp;
            <GoogleIcon fontSize="medium" />
          </IconButton>
          {error && <Error>Something went wrong...</Error>}
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginView;

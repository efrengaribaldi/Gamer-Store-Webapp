import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import { mobails, tablet } from "../responsive";

const Container = styled.div`
  width: 110v;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  ${mobails} {
    background: none;
  }
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobails} {
    width: 75%;
    margin: 0 10px;
    padding: 0;
    position: relative;
  }
  ${tablet} {
    width: 80%;
  }
`;
const Title = styled.h1`
  font-size: 12px;
  font-weight: 200;
  ${mobails} {
    position: absolute;
  }
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobails} {
    flex-direction: column;
  }
  ${tablet} {
    flex-direction: column;
  }
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 60%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  ${mobails} {
    width: 75%;
  }
  ${tablet} {
    width: 80%;
  }
`;

const RegisterView: React.FC = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState<any>({ isAdmin: "false" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setInputs((prev: any) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await register(inputs, dispatch);
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            name="username"
            type="text"
            placeholder="username"
            onChange={handleChange}
          ></Input>
          <Input
            name="email"
            type="email"
            placeholder="email@gmail.com"
            onChange={handleChange}
          ></Input>
          <Input
            name="password"
            type="password"
            placeholder="password"
            onChange={handleChange}
          ></Input>

          <Agreement>
            By creating an account with Gamer-Store y accept this is my own
            information<b>PRIVACY POLICY</b>
          </Agreement>
          <Link to="/">
            <Button onClick={handleClick}>CREATE ACCOUNT</Button>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default RegisterView;

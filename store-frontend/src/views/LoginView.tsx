import styled from "styled-components";

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
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const LoginView: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username"></Input>

          <Input placeholder="password"></Input>

          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginView;

import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div``;
const Title = styled.div``;
const Form = styled.div``;
const Input = styled.div``;
const Button = styled.div``;
const Link = styled.div``;

const Login: React.FC = () => {
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

export default Login;

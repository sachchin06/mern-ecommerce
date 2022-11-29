import styled from "styled-components"
import {mobile} from "../responsive"

const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
),
url("https://plus.unsplash.com/premium_photo-1661492274003-784f2c63a431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU3fHxzYWxlcyUyMHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60");
background-size: cover;
display: flex;
align-items: center;
justify-content: center;


`
const Wrapper = styled.div`
width: 30%;
padding: 20px;
margin-right: 100px;
background-color: white;

${mobile({
    width: "70%",
    marginRight: "0px"
  })}


`
const Title = styled.h2`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;

`
const Form = styled.form`
display: flex;
flex-direction: column;
row-gap: 20px;
`
const Input = styled.input`
min-width: 80%;
padding: 10px;

`

const Button = styled.button`
width: 40%;
border: none;
padding: 12px 18px;
background-color: teal;
color: white;
cursor: pointer;

`
const Link = styled.a`
    font-size: 10px;
    text-decoration: underline;
    cursor: pointer;

`


const Login = () => {
  return (
    <Container>
          <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
               
                <Button>LOGIN</Button>
                <Link>DON'T YOU REMEMBER YOUR PASSWORD ?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
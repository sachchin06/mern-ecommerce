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
width: 40%;
padding: 20px;
margin-right: 30px;
background-color: white;

${mobile({
    width: "70%",
    marginRight: "0px"
  })}


`
const Title = styled.h2`
font-size: 24px;
font-weight: 300;

`
const Form = styled.form`
display: flex;
flex-wrap: wrap;

`
const Input = styled.input`
min-width: 40%;
margin: 15px 10px 0px 0px;
padding: 10px;

`
const Agreement = styled.div`
font-size: 12px;
margin: 10px 0px;

`
const Button = styled.button`
width: 40%;
border: none;
padding: 12px 18px;
background-color: teal;
color: white;
cursor: pointer;

`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name" />
                <Input placeholder="last name" />
                <Input placeholder="user name" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account , I consent to the processing 
                    of my personal data in accordance with the <b>Privacy polivy</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
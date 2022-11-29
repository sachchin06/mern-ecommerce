import styled from "styled-components"
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import {mobile} from "../responsive"

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;


`
const Description = styled.div`

font-size: 24px;
font-weight: 300;
margin-bottom: 20px;

${mobile({
    textAlign: "center"
  })}

`
const InputContainer = styled.div`

width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;

${mobile({
    width: "80%"
  })}


`
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;


`
const Button = styled.button`
flex: 1;
border: none;
border-radius: 5px;
background-color: teal;
color: white;
transform: scale(1.1);

`

const Newsletter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>
            Get every updates from your products!!
        </Description>
        <InputContainer>    
            <Input placeholder="your email"/>
            <Button>
                <SendOutlinedIcon />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter
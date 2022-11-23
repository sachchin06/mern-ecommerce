import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Container = styled.div``
const Wrapper = styled.div`
padding: 20px;

`
const Title = styled.h2`
font-weight: 300;
text-align: center;
margin-bottom: 10px;

`
const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

`
const Bottom = styled.div``

const TopButton = styled.div`
padding: 10px;
border: 1px solid gray;
border: ${props=> props.type === "filled" && "none"};
background-color: ${props=> props.type === "filled" ? "black" : "transparent"};
color: ${props=> props.type === "filled" && "white" };


`

const TopTexts = styled.div``
const TopText = styled.span`
padding: 0px 10px;

`

const Cart = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton >CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag (2)</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom></Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart
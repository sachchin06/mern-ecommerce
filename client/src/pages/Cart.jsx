import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {mobile} from "../responsive"

const Container = styled.div`

`;
const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;


  ${mobile({
    padding: "10px"
  })}
`;
const Title = styled.h2`
  font-weight: 300;
  text-align: center;
  margin-bottom: 20px;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
 justify-content: space-around;
  
`;

const TopButton = styled.div`
  padding: 10px;
  border: 1px solid gray;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
  props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({
    padding: "5px",
    fontSize: "12px"
  })}
`;

const TopTexts = styled.div`
  ${mobile({
    display: "none"
  })}
`;
const TopText = styled.span`
  padding: 0px 10px;
`;

const Bottom = styled.div`
  padding: 25px 0px;
  display: flex;
  justify-content: space-between;

  ${mobile({
    flexDirection: "column"
  })}
`;

const Info = styled.div`
  flex: 3;
  width: 100%;
  height: 100%;

  
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
 
  ${mobile({
    gap: "10px",
      flexDirection: "column"
  })}
  
 
`;
const ProductDetail = styled.div`
  display: flex;
  flex: 2;
  gap: 15px;
  padding-left: 10px;
  
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  font-size: 14px;
  
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`;
const ProductSize = styled.span``;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;


const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
 


  ${mobile({
      marginLeft: "20px",
      alignItems: "center"
  })}
`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
gap: 5px;

`
const ProductAmount = styled.span`
font-size: 22px;

`
const ProductPrice = styled.span`
font-size: 24px;
font-weight: 300;


`

const Summary = styled.div`
padding: 10px;
border:0.5px solid lightgray;
border-radius: 10px;
  flex: 1;
  height: 50vh;

  ${mobile({
    margin: "0px 15px"
  })}
`;


const SummaryTitle = styled.h2`

font-weight: 300;
margin-bottom: 30px;

`
const SummaryItem = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 25px;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24"};

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`

width: 100%;
padding: 10px;
background-color: #000000bb;
color: white;
font-weight: 600;

`




const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://e7.pngegg.com/pngimages/323/773/png-clipart-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-thumbnail.png" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Denta Shoe
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>45566487
                  </ProductId>
                  <ProductColor color="black"/>
                  <ProductSize>
                    <b>Size:</b>35.67
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <AmountContainer>
                  <RemoveIcon style={{fontSize:16}} />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon style={{fontSize:16}} />
                </AmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
    <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://e7.pngegg.com/pngimages/323/773/png-clipart-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running-thumbnail.png" />
                <Details>
                  <ProductName>
                    <b>Product: </b>Denta Shoe
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>45566487
                  </ProductId>
                  <ProductColor color="black"/>
                  <ProductSize>
                    <b>Size:</b>35.67
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <AmountContainer>
                  <RemoveIcon style={{fontSize:16}} />
                  <ProductAmount>2</ProductAmount>
                  <AddIcon style={{fontSize:16}} />
                </AmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
             <SummaryTitle>ORDER SUMMARY</SummaryTitle>
             <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ 800</SummaryItemPrice>
             </SummaryItem>

             <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 50</SummaryItemPrice>
             </SummaryItem>

             <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ - 20</SummaryItemPrice>
             </SummaryItem>

             <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ 830</SummaryItemPrice>
             </SummaryItem>

             <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;

import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Container = styled.div``
const Wrapper = styled.div`
display: flex;
padding: 50PX;
gap: 20px;

`
const Image = styled.img`

height: 90vh;
width: 100%;
object-fit: cover;
flex: 1;

`
const InfoContainer = styled.div`
flex: 1;

`
const Title = styled.h2`
font-weight: 200;


`
const Desc = styled.p`
margin: 20px 0px;

`
const Price = styled.span`
font-size: 30px;
font-weight: 100;

`

const FilterContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
padding: 20px 0px;

`
const Filter = styled.div`
display: flex;
align-items: center;
gap: 5px;

`
const FilterTitle = styled.span`
font-size: 2opx;
font-weight: 200;
margin-right: 15px;

`
const FilterColor = styled.div`
width: 15px;
height: 15px;
border-radius: 50%;
background-color: ${props=>props.color};

`
const FilterSize = styled.select`

`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
justify-content: space-between;
align-items: center;

`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;

`
const Amount = styled.span`
width: 20px;
height: 20px;
font-size: 10px;
border: 1px solid black;
border-radius: 5px;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;

`
const Button = styled.button`
padding: 8px;
border: 1px solid teal;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover {
    background-color: #f8f4f4;
}

`




const Product = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRheQklZ5n0bOiTFN3fTemmdryG5EXUXTMFHQ&usqp=CAU" />
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, voluptates quam nemo culpa harum atque sapiente placeat similique corporis eaque laborum dolorem natus in, fugiat eligendi tempora aspernatur mollitia at.</Desc>
                <Price>$ 3000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black"></FilterColor>
                        <FilterColor color="darkblue"></FilterColor>
                        <FilterColor color="gray"></FilterColor>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <RemoveIcon style={{fontSize:16}} />
                            <Amount>1</Amount>
                        <AddIcon style={{fontSize:16}} />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product
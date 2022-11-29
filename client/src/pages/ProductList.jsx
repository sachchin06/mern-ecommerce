import styled  from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import {mobile} from "../responsive"

const Container = styled.div``
const Title = styled.h2`
margin: 20px 5px;

`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
/* align-items: center; */

`
const Filter = styled.div`
margin: 20px;

${mobile({
    margin: "0px 10px",
    
  })}

`
const FilterText = styled.span`
font-size: 20px;
font-weight: 500;
${mobile({
    fontSize: "15px",
   
  })}
`
const Select = styled.select`
padding: 8px;
margin-right: 20px;

${mobile({
    padding: "5px",
    marginRight: "18px",
    marginTop: "10px"
  })}
`
const Option = styled.option``
const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Green</Option>
                    <Option>Yellow</Option>
                    <Option>Orange</Option>
                </Select>

                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                   
                </Select>
                </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option  selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                    
                   
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList
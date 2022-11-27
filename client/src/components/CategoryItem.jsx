
import styled from "styled-components"

const Container = styled.div`
flex: 1;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 10px;
`
const Info = styled.div`
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

`
const Title = styled.h1`

color: white;
margin-bottom: 25px;

`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: grey;
cursor: pointer;
font-weight: 600;

`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info >
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default CategoryItem
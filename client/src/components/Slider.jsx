import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { useState } from "react";
import {sliderItems} from "../data"
import {mobile} from "../responsive"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;

  ${mobile({
    display: "none"
  })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flexbox;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.9;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translate(${props=>props.slideIndex * -100}vw);
`;

const Slide = styled.div`
 width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`

  flex: 1;
  height: 100%;
  padding-left: 50px;
  
`;

const Image = styled.img`
height:80%;

`

const InfoContainer = styled.div`
  flex: 1;
  padding: 70px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
margin: 40px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction)=>{
        if(direction === "left"){
            setSlideIndex(slideIndex>0 ? slideIndex-1 : 2)
        }else {
            setSlideIndex(slideIndex<2 ? slideIndex+1 : 0)
        }
    }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon  style={{fontSize: 30}} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {
            sliderItems.map(item=>(
                <Slide key={item.id} bg={item.bg}>
                <ImageContainer>
                  <Image src={item.img} alt="img"/>
                </ImageContainer>
                <InfoContainer> 
             
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
              </Slide>
            ))
        }
      
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon style={{fontSize: 30}} />
      </Arrow>
    </Container>
  );
};

export default Slider;

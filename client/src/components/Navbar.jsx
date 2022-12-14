import styled from "styled-components";
import Search from "@material-ui/icons/Search";
import { Badge } from "@material-ui/core";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {mobile} from "../responsive"


const Container = styled.div`
  height: 60px;

  ${mobile({
    height: "50px"
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    padding: "10px 0px"
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;

  ${mobile({
    display: "none"
  })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({
    margin: "8px",
    padding: "3px"
  })}
`;

const Input = styled.input`
  border: none;

  ${mobile({
    width: "50px"
  })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 24px;

  ${mobile({
    fontSize: "18px"
  })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;

  ${mobile({
    flex: 2,
    justifyContent: "center"
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;

  ${mobile({
    fontSize: "10px",

  })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{color:"gray", fontSize: 16}}  />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>ECOMMERCE</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGNIN</MenuItem>
          <MenuItem>
          <Badge overlap="rectangular" badgeContent={4} color="primary">
        <ShoppingCartOutlinedIcon />
      </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

import styled from "styled-components";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import RoomIcon from '@material-ui/icons/Room';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
`;

const Logo = styled.h2``;
const Desc = styled.p``;
const SocialContainer = styled.div`
display: flex;
gap: 15px;


`;
const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #${props=>props.color};
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title  = styled.h3`
margin-bottom: 30px;

`

const List  = styled.ul`
list-style: none;
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;

`
const ListItem  = styled.li`
    width: 50%;
margin-bottom: 15px;
cursor: pointer;

`

const Right = styled.div`
padding: 20px;
  flex: 1;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 20px;
    cursor: pointer;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ECOMMERCE.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          amet. Assumenda libero eveniet autem magnam! Placeat, eum suscipit!
          Eius corrupti cum iure minus est accusamus ad nesciunt laboriosam
          mollitia incidunt.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="E60023">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Fashion</ListItem>
            <ListItem>Tracking</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Men Special</ListItem>
            <ListItem>Ladies Special</ListItem>
            <ListItem>Wishlisy</ListItem>
            <ListItem>Our Team</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <RoomIcon /> 233, lotest Street, Colombo</ContactItem>
        <ContactItem> <PhoneInTalkIcon />+94 076 5326026</ContactItem>
        <ContactItem> <MailOutlineIcon />Sachchin06#gmail.com</ContactItem>
        <Payment src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLjwzcn_doIcFMgZgxFgj6PADajbk3Zr29w&usqp=CAU" />
      </Right>
    </Container>
  );
};

export default Footer;

import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`

const Announcement = () => {
  return (
    <Container>
        Here we inform some news , offers ...
    </Container>
  )
}

export default Announcement
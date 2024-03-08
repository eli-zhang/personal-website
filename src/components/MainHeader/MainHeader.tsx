import { ImageContainer, Background, ShiftedTextContainer, Heading, Body, BodyElement, BoldText} from './styled'

const MainHeader = () => {
    return (
        <ImageContainer>
            <Background src={`${process.env.PUBLIC_URL}/media/main_img.jpg`} alt="background"/>
            <ShiftedTextContainer>
                <Heading>@zeli</Heading>
                <Body>
                    <BoldText>eli zhang</BoldText>
                    <BodyElement pos={0}><BoldText>CS</BoldText> and <BoldText>ECE</BoldText> back at Cornell</BodyElement>
                    <BodyElement pos={1}>Software Developer</BodyElement>
                    <BodyElement pos={2}>Game Designer</BodyElement>
                    <BodyElement pos={3}>Music Maker</BodyElement>
                    <BodyElement pos={4}>Amateur Baker</BodyElement>
                    <BodyElement pos={5}>Video Producer</BodyElement>
                    <BodyElement pos={6}>Type Racer</BodyElement>
                    <BodyElement pos={7}>Equate Lover</BodyElement>
                </Body>
            </ShiftedTextContainer>
        </ImageContainer>
    )
}

export default MainHeader;
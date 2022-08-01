import { ImageContainer, Background, ShiftedTextContainer, Heading, Body, BodyElement, BoldText} from './Styled'

const MainHeader = () => {
    return (
        <ImageContainer>
            <Background src={`${process.env.PUBLIC_URL}/media/main_img.jpg`} alt="background"/>
            <ShiftedTextContainer>
                <Heading>Hey, Im Eli.</Heading>
                <Body>
                    <BoldText>CS</BoldText> and <BoldText>ECE</BoldText> at Cornell
                    <BodyElement pos={0}>Software Developer</BodyElement>
                    <BodyElement pos={1}>Game Designer</BodyElement>
                    <BodyElement pos={2}>Music Maker</BodyElement>
                    <BodyElement pos={3}>Amateur Baker</BodyElement>
                    <BodyElement pos={4}>Video Producer</BodyElement>
                    <BodyElement pos={5}>Type Racer</BodyElement>
                    <BodyElement pos={6}>Equate Lover</BodyElement>
                </Body>
            </ShiftedTextContainer>
        </ImageContainer>
    )
}

export default MainHeader;
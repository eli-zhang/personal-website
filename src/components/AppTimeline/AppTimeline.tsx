import { ImageContainer, Background, ShiftedTextContainer, Heading, Body, BodyElement, BoldText} from './Styled'

const AppTimeline = () => {
    return (
        <ImageContainer>
            <Background src={`${process.env.PUBLIC_URL}/media/colorful_background.png`} alt="background"/>
            <ShiftedTextContainer>
                <Heading>App Timeline</Heading>
            </ShiftedTextContainer>
        </ImageContainer>
    )
}

export default AppTimeline;
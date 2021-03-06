import styled from 'styled-components'
import { keyframes } from 'styled-components'

interface Props {
    pos: number
}

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
`

export const Background = styled.img`
    width: 100%;
    z-index: -1;
`
export const ShiftedTextContainer = styled.div`
    position: absolute;
    color: white;
    top: 18vw;
    left: 50vw;
    width: 100%;
    text-transform: lowercase; 
    text-align: left;
    line-height: 0px;
`

export const Heading = styled.h1`
    font-size: 12vw;
    margin-left: -0.4vw;
    font-family: Canter-Bold3D, Arial, serif;
`

export const Body = styled.div`
    margin-top: -0.1vw;
    font-size: 3.7vw;
    font-family: Canter-Light, Arial, serif;
`

export const BoldText = styled.b`
    font-family: Canter-Bold, Arial, serif;
`

const fadeInAnimation = keyframes`
    0%   {opacity: 0;}
    100% {opacity: 1;}
`

export const BodyElement = styled.p`
    opacity: 0;
    color: rgba(255, 255, 255, ${(props: Props) => (0.7 - (0.1 * props.pos))});
    animation: ${fadeInAnimation} 0.5s linear forwards;
    animation-delay: ${(props: Props) => (0.25 * props.pos)}s;
`

// #hideMe {
//     -webkit-animation: cssAnimation 5s forwards; 
//     animation: cssAnimation 5s forwards;
// }

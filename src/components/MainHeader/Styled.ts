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
    top: 22vw;
    left: 48vw;
    width: 100%;
    text-transform: lowercase; 
    text-align: left;
    line-height: 0px;
    z-index: 1;
`

export const Heading = styled.h1`
    font-size: 80px;
    font-family: "Voltaire", sans-serif;
    font-weight: 200;
`

export const Body = styled.div`
    margin-top: 70px;
    font-size: 40px;
    font-family: "Voltaire", sans-serif;
    font-weight: 200;
`

export const BoldText = styled.b`
    font-family: "Voltaire", sans-serif;
    font-weight: 400;
`

const fadeInAnimation = keyframes`
    0%   {opacity: 0;}
    100% {opacity: 1;}
`

export const BodyElement = styled.p`
    opacity: 0;
    color: rgba(255, 255, 255, ${(props: Props) => (0.7 - (0.08 * props.pos))});
    animation: ${fadeInAnimation} 0.5s linear forwards;
    animation-delay: ${(props: Props) => (0.25 * props.pos)}s;
    margin-top: 45px;
`

// #hideMe {
//     -webkit-animation: cssAnimation 5s forwards; 
//     animation: cssAnimation 5s forwards;
// }

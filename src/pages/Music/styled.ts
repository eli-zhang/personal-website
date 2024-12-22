import styled from 'styled-components'

export const BackgroundContainer = styled.div`
    background-color: #101010;
    color: white;
    font-family: "Voltaire", sans-serif;
    position: relative; /* Changed from fixed to relative */
    width: 100%;
    min-height: 100vh; /* Ensure it covers at least the viewport height */
    padding: 20px; /* Add padding */
    @media (max-width: 768px) {
        padding: 10px; /* Reduced padding for smaller screens */
    }
`

export const InteractiveContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-weight: 100;
    width: 100%; /* Ensure full width */
`

export const Heading = styled.h1`
    color: #efefef;
    font-size: 80px;
    font-family: "Voltaire", sans-serif;
    font-weight: 200;
    text-transform: lowercase;
    text-align: center;
    margin-top: 30px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 40px; /* Smaller font size for smaller screens */
    }
`

export const TextContainer = styled.div`
    text-align: center;
`

export const Description = styled.p`
    color: #c0c0c0;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
`

export const NoteRangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 768px) {
        flex-direction: column; /* Stack vertically on small screens */
    }
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const Prompt = styled.p`
    color: white;
    font-size: 20px;
    margin: 10px 0;
`

export const Button = styled.button`
    border-radius: 8px;
    background-color: #246F5A;
    border: none;
    color: white;
    padding: 15px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 20px;
    margin: 20px 2px;
    cursor: pointer;
    font-family: "Voltaire", sans-serif;

    @media (max-width: 768px) {
        padding: 10px 15px; /* Smaller padding */
        font-size: 16px; /* Smaller font size */
    }
`

export const SongCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;
    padding: 0 50px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr); /* Less columns on smaller screens */
        padding: 0 10px; /* Further reduce padding for smaller screens */
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* Single column for very small screens */
        padding: 0 5px; /* Minimal padding for very small screens */
    }
`

export const InlineContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 10px;
`;

export const Dropdown = styled.select`
    display: inline-block;
    background-color: white;
    color: black;
    padding: 10px 5px 10px 10px;
    margin: 5px;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 16px;
    font-family: "Voltaire", sans-serif;
    cursor: pointer;

    @media (max-width: 768px) {
        padding: 8px; /* Smaller padding */
        font-size: 14px; /* Smaller font size */
    }
`

export const CategoryButtonContainer = styled.div`
    margin-top: 10px;
`;

export const CategoryButton = styled(Button)<{ isSelected: boolean }>`
    margin-right: 10px;
    background: ${({ isSelected }) => (isSelected ? '#246F5A' : 'black')}; 
    color: white; 
    padding: 8px 10px;
    font-size: 14px; 
`;
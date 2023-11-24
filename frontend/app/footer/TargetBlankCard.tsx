import { FaRegArrowAltCircleRight } from "react-icons/fa";
import styled from 'styled-components';

const Section = styled.section`
  width: 20rem; /* Adjust width */
  height: 5rem; /* Adjust height */
  background-color: rgba(255, 255, 255, 0.1); /* For the background color and transparency */
  border-radius: 0.75rem; /* For the border radius */
  padding: 0.5rem; /* Adjust padding */
`;

const InnerSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Circle = styled.div`
  width: 3rem; 
  height: 3rem; 
  background-color: #ffffff;
  border-radius: 50%; 
`;

const TargetBlankCard = () => {
  return (
    <Section>
      <InnerSection>
        <Circle />
        <FaRegArrowAltCircleRight />
      </InnerSection>
    </Section>
  );
};

export default TargetBlankCard;

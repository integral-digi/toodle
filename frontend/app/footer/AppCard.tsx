import styled from 'styled-components';

const Section = styled.section`
  background-color: #333333; /* Change to your background color */
  border-radius: 1rem; /* for setting border radius */
  width: 15rem; /* for setting width */
  height: 5rem; /* for setting height */
  padding: 0.5rem; /* for setting padding */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  width: 7rem; /* for setting width */
  color: #ffffff; /* Text color */
  font-size: 1rem; 
  font-weight: medium; 
  line-height: 1.5; 
`;

const Icon = styled.section`
  width: 3.5rem; 
  height: 3.5rem; 
  background-color: #ffffff; 
  border-radius: 0.5rem; 
`;

const AppCard = () => {
  return (
    <Section>
      <Text>Download the app</Text>
      <Icon />
    </Section>
  );
};

export default AppCard;

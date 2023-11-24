import React from "react";
import { FaBeer } from "react-icons/fa";
import styled from "styled-components";

interface SubChildrenProps {
    title: string;
    placeholder: string;
    icon: JSX.Element;
}

const subChildren: SubChildrenProps = {
    title: "Get the latest from hims",
    placeholder: "Email address...",
    icon: <FaBeer />,
};

//section styles
const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.75rem; 
  color: #ffffff; /* Text color */
`;

const Title = styled.h2`
  width: 100%;
  font-size: 1.875rem; /* Adjust font size */
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  background-color: transparent;
  border: 1px solid #657786; /* Border color */
  border-radius: 0.375rem; /* Adjust border radius */
  color: #ffffff; /* Text color */
`;

const SubscribeIcon = styled.div`
  /* Styles for the icon container */
  svg {
    /* Styles for the icon */
    color: #ffffff; /* Icon color */
    /* Additional icon styles as needed */
  }
`;

const Subscribe = () => {
    return (
        <Section>
            <Title>
                {subChildren.title}
            </Title>
            <Input
                id="subscribe"
                type="email"
                placeholder={subChildren.placeholder}
            />
            <SubscribeIcon>
                {subChildren.icon}
            </SubscribeIcon>
        </Section>
    );
};

export default Subscribe;

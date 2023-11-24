import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";

interface SocialLinkProps {
  name: string;
  href: string;
  icon: JSX.Element;
}

interface SocialProps {
  title: string;
  links: SocialLinkProps[];
}

const socials: SocialProps = {
  title: "Connect with us",
  links: [
    { name: "Facebook", href: "#", icon: <FaFacebookF /> },
    { name: "Twitter", href: "#", icon: <FaTwitter /> },
    { name: "Instagram", href: "#", icon: <FaInstagram /> },
    { name: "TikTok", href: "#", icon: <FaTiktok /> },
  ],
};

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.75rem; /* For the spacing between sections */
`;

const Title = styled.h2`
  width: 100%;
  color: #ffffff; /* Text color */
  font-size: 1.5rem; /* Font size */
  font-weight: bold; /* Font weight */
  line-height: 1.25; /* Line height */
  @media (min-width: 768px) {
    display: none; /* Hide on larger screens */
  }
`;

const SocialLinks = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem; /* Adjust spacing between links */
`;

const LinkContainer = styled.section`
  width: 3rem; /* Adjust link container width */
  height: 3rem; /* Adjust link container height */
`;

const Socials = () => {
  return (
    <Section>
      <Title>{socials.title}</Title>
      <SocialLinks>
        {socials.links.map((link, index) => (
          <LinkContainer key={index}>
            <Link to={link.href}>{link.icon}</Link>
          </LinkContainer>
        ))}
      </SocialLinks>
    </Section>
  );
};

export default Socials;
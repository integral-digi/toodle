import styled from 'styled-components';
import { Link } from 'gatsby';

interface LegalProps {
  id: number;
  name: string;
  href: string;
}

const legalLinks: LegalProps[] = [
  { id: 1, name: "Privacy policy", href: "" },
  { id: 2, name: "Terms of service", href: "" },
  { id: 3, name: "Sitemap", href: "" },
  { id: 4, name: "Telehealth Consent & Open Payments", href: "" },
  { id: 5, name: "Your privacy choices", href: "" },
];

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Adjust space between sections */
`;

const LegalLink = styled(Link)`
  color: #a0aec0; /* Link color */
  font-size: 1rem; /* Font size */
  font-weight: normal; /* Font weight */
  line-height: normal; /* Line height */
  text-decoration: none; /* Remove default underline */
`;

const Copyright = styled.section`
  color: #ffffff; /* Text color */
  font-size: 1rem; /* Font size */
  font-weight: medium; /* Font weight */
  line-height: normal; /* Line height */
`;

const Legal = () => {
  return (
    <Section>
      {legalLinks.map((link) => (
        <LegalLink to={link.href} key={link.id}>
          <p>{link.name}</p>
        </LegalLink>
      ))}
      <Copyright>
        © 2023 Hims and Hers inc, All rights reserved.
      </Copyright>
    </Section>
  );
};

export default Legal;
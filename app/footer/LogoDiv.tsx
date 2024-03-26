import styled from 'styled-components';
import { StaticImage } from 'gatsby';

const LogoWrapper = styled.section`
  width: 100%;
  height: auto;
`;

const LogoDiv = ({ logoSrc }: { logoSrc: string }) => {
  return (
    <LogoWrapper>
      <StaticImage src={logoSrc} width={100} height={100} alt="logo" />
    </LogoWrapper>
  );
};

export default LogoDiv;

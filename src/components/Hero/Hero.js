import React from 'react';

import { 
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there, <br />
        I'm Modou Lmain Jagne
      </SectionTitle>
      <SectionText>
       I'm a Web Developer, a programmer and UI/UX designer. I can help build your websites, create greate designs for you websites or mobile apps.
      </SectionText>
      <Button
        onClick={() => (window.location = 'https://github.com/ModouLaminJagne')}
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

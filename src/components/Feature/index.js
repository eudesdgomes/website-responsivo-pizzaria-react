import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza do Dia</h1>
      <p>Queijo Mussarela com Azeitona roxa e pó de ouro 18k</p>
      <FeatureButton>Compre Agora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;

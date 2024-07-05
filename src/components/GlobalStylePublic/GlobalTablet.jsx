import React from 'react';
import { useWidth } from 'hooks/useWidth.js';
import { GlobalTabletStyle } from './GlobalTabletStyle';
import { GlobalStylePublic } from './GlobalStylePublic.styled';

const GlobalTablet = () => {
  const width = useWidth();
  return width >= 768 && width < 1280 ? (
    <GlobalTabletStyle />
  ) : (
    <GlobalStylePublic />
  );
};

export default GlobalTablet;

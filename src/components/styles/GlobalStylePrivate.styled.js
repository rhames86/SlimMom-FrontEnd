import { createGlobalStyle } from 'styled-components';

import LeafDesktop1x from 'img/leaf-desktop@1x-min.png';
import LeafDesktop2x from 'img/leaf-desktop@2x-min.png';
import LeafDesktopAvift1x from 'img/leaf-desktop@1x-min.avif';
import LeafDesktopAvift2x from 'img/leaf-desktop@2x-min.avif';
import LeafDesktopWebp1x from 'img/leaf-desktop@1x-min.webp';
import LeafDesktopWebp2x from 'img/leaf-desktop@2x-min.webp';

import LeafTablet1x from 'img/leaf-bottom-tablet@1x-min.png';
import LeafTablet2x from 'img/leaf-bottom-tablet@2x-min.png';
import LeafTabletAvift1x from 'img/leaf-bottom-tablet@1x-min.avif';
import LeafTabletAvift2x from 'img/leaf-bottom-tablet@2x-min.avif';
import LeafTabletWebp1x from 'img/leaf-bottom-tablet@1x-min.webp';
import LeafTabletWebp2x from 'img/leaf-bottom-tablet@2x-min.webp';

export const GlobalStylesPrivate = createGlobalStyle`
body {
  color: ${({ theme }) => theme.colors.secondText};
  font-family: 'Verdana', -apple-system, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.21;
  width: 100vw;
  min-height: 100vh;
  @media screen and (max-width: 767px){
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background: ${({ theme }) => theme.colors.background};}

    @media screen and (min-width: 768px) {
    background-image: image-set(url(${LeafTabletAvift1x}) type("image/avif") 1x,
     url(${LeafTabletAvift2x}) type("image/avif") 2x,
     url(${LeafTabletWebp1x}) type("image/webp") 1x, 
     url(${LeafTabletWebp2x}) type("image/webp") 2x,
     url(${LeafTablet1x}) type("image/png") 1x, 
     url(${LeafTablet2x}) type("image/png") 2x), ${({ theme }) =>
  theme.colors.backgroundGradientTablet};
    background-repeat: no-repeat;
    background-size: 428px 602px, auto;
    background-position: bottom right;
    };

    @media screen and (min-width: 1280px) {
    background-image: image-set(url(${LeafDesktopAvift1x}) type("image/avif") 1x,
     url(${LeafDesktopAvift2x}) type("image/avif") 2x,
     url(${LeafDesktopWebp1x}) type("image/webp") 1x, 
     url(${LeafDesktopWebp2x}) type("image/webp") 2x,
     url(${LeafDesktop1x}) type("image/png") 1x, 
     url(${LeafDesktop2x}) type("image/png") 2x), ${({ theme }) =>
  theme.colors.backgroundGradientDesktop};
    background-repeat: no-repeat;
    background-size: 740px 842px, auto;
    background-position: right bottom;
    };

  }`;

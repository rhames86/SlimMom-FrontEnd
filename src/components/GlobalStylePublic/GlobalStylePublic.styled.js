import { createGlobalStyle } from 'styled-components';

import MainLeafdDesktop1x from 'img/main-leaf-desktop@1x-min.png';
import MainLeafDesktop2x from 'img/main-leaf-desktop@2x-min.png';
import MainLeafDesktopAvif1x from 'img/main-leaf-desktop@1x-min.avif';
import MainLeafDesktopAvif2x from 'img/main-leaf-desktop@2x-min.avif';
import MainLeafDesktopWebp1x from 'img/main-leaf-desktop@1x-min.webp';
import MainLeafDesktopWebp2x from 'img/main-leaf-desktop@2x-min.webp';
import StrawberryDesktop1x from 'img/Strawberry-desktop@1x-min.png';
import StrawberryDesktop2x from 'img/Strawberry-desktop@2x-min.png';
import StrawberryDesktopAvif1x from 'img/Strawberry-desktop@1x-min.avif';
import StrawberryDesktopAvif2x from 'img/Strawberry-desktop@2x-min.avif';
import StrawberryDesktopWebp1x from 'img/Strawberry-desktop@1x-min.webp';
import StrawberryDesktopWebp2x from 'img/Strawberry-desktop@2x-min.webp';
import Banan1x from 'img/banana.png';
import Banan2x from 'img/banana@2x.png';
import BananAvif1x from 'img/banana.avif';
import BananAvif2x from 'img/banana@2x.avif';
import BananWebp1x from 'img/banana.webp';
import BananWebp2x from 'img/banana@2x.webp';
import LiniaDesktop1x from 'img/linia.png';
import LiniaDesktop2x from 'img/linia@2x-min.png';
import LiniaDesktopAvif1x from 'img/linia.avif';
import LiniaDesktopAvif2x from 'img/linia@2x.avif';
import LiniaDesktopWebp1x from 'img/linia.webp';
import LiniaDesktopWebp2x from 'img/linia@2x-min.webp';

import MainLeafTablet1x from 'img/main-leaf-tablet@1x-min.png';
import MainLeafTablet2x from 'img/main-leaf-tablet@2x-min.png';
import MainLeafTabletAvif1x from 'img/main-leaf-tablet@1x-min.avif';
import MainLeafTabletAvif2x from 'img/main-leaf-tablet@2x-min.avif';
import MainLeafTabletWebp1x from 'img/main-leaf-tablet@1x-min.webp';
import MainLeafTabletWebp2x from 'img/main-leaf-tablet@2x-min.webp';
import MainStrawberryTablet1x from 'img/main-strawberry-tablet@1x-min.png';
import MainStrawberryTablet2x from 'img/main-strawberry-tablet@2x-min.png';
import MainStrawberryTabletpAvif1x from 'img/main-strawberry-tablet@1x-min.avif';
import MainStrawberryTabletpAvif2x from 'img/main-strawberry-tablet@2x-min.avif';
import MainStrawberryTabletpWebp1x from 'img/main-strawberry-tablet@1x-min.webp';
import MainStrawberryTabletpWebp2x from 'img/main-strawberry-tablet@2x-min.webp';
import MainBananTablet1x from 'img/banana-tablet.png';
import MainBananTablet2x from 'img/banana-tablet@2x.png';
import MainBananTabletAvif1x from 'img/banana-tablet.avif';
import MainBananTabletAvif2x from 'img/banana-tablet@2x.avif';
import MainBananTabletWebp1x from 'img/banana-tablet.webp';
import MainBananTabletWebp2x from 'img/banana-tablet@2x.webp';
import LiniaTablet1x from 'img/linia-tablet.png';
import LiniaTablet2x from 'img/linia-tablet@2x.png';
import LiniaTabletAvif1x from 'img/linia-tablet.avif';
import LiniaTabletAvif2x from 'img/linia-tablet@2x.avif';
import LiniaTabletWebp1x from 'img/linia.webp';
import LiniaTabletWebp2x from 'img/linia-tablet@2x.webp';

export const GlobalStylePublic = createGlobalStyle`
body{
  color: ${({ theme }) => theme.colors.secondText};
  font-family: 'Verdana', -apple-system, sans-serif;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.04em;  
  line-height: 1.21; 
  min-height: 100vh;
    width: 100vw;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (min-width: 768px) {
    background-image: 
    image-set(url(${MainLeafTabletAvif1x}) type("image/avif") 1x,
     url(${MainLeafTabletAvif2x}) type("image/avif") 2x,
     url(${MainLeafTabletWebp1x}) type("image/webp") 1x, 
     url(${MainLeafTabletWebp2x}) type("image/webp") 2x,
     url(${MainLeafTablet1x}) type("image/png") 1x, 
     url(${MainLeafTablet2x}) type("image/png") 2x), 
    image-set(url(${MainStrawberryTabletpAvif1x}) type("image/avif") 1x,
      url(${MainStrawberryTabletpAvif2x}) type("image/avif") 2x,
      url(${MainStrawberryTabletpWebp1x}) type("image/webp") 1x,
      url(${MainStrawberryTabletpWebp2x}) type("image/webp") 2x,
      url(${MainStrawberryTablet1x}) type("image/png") 1x, 
      url(${MainStrawberryTablet2x}) type("image/png") 2x), 
    image-set(url(${MainBananTabletAvif1x}) type("image/avif") 1x,
      url(${MainBananTabletAvif2x}) type("image/avif") 2x,
      url(${MainBananTabletWebp1x}) type("image/webp") 1x,
      url(${MainBananTabletWebp2x}) type("image/webp") 2x,
      url(${MainBananTablet1x}) type("image/png") 1x,
      url(${MainBananTablet2x}) type("image/png") 2x),
    image-set(url(${LiniaTabletAvif1x}) type("image/avif") 1x,
      url(${LiniaTabletAvif2x}) type("image/avif") 2x,
      url(${LiniaTabletWebp1x}) type("image/webp") 1x,
      url(${LiniaTabletWebp2x}) type("image/webp") 2x,
      url(${LiniaTablet1x}) type("image/png") 1x, 
      url(${LiniaTablet2x}) type("image/png") 2x);

    background-repeat: no-repeat;
        background-size: 608px 496px, 370px 370px, 750px 550px,602px 760px;
        background-position: right 12em bottom 0em, right -1em bottom 13em, right -16em bottom -7em, right -2em bottom -12em;
   } 


  @media screen and (min-width: 1280px) {
    background-image: 
    image-set(url(${MainLeafDesktopAvif1x}) type("image/avif") 1x,
      url(${MainLeafDesktopAvif2x}) type("image/avif") 2x,
      url(${MainLeafDesktopWebp1x}) type("image/webp") 1x,
      url(${MainLeafDesktopWebp2x}) type("image/webp") 2x,
      url(${MainLeafdDesktop1x}) type("image/png") 1x,
      url(${MainLeafDesktop2x}) type("image/png") 2x),
    image-set(url(${StrawberryDesktopAvif1x}) type("image/avif") 1x,
      url(${StrawberryDesktopAvif2x}) type("image/avif") 2x,
      url(${StrawberryDesktopWebp1x}) type("image/webp") 1x,
      url(${StrawberryDesktopWebp2x}) type("image/webp") 2x,
      url(${StrawberryDesktop1x}) type("image/png") 1x,
      url(${StrawberryDesktop2x}) type("image/png") 2x),
    image-set(url(${BananAvif1x}) type("image/avif") 1x,
      url(${BananAvif2x}) type("image/avif") 2x,
      url(${BananWebp1x}) type("image/webp") 1x,
      url(${BananWebp2x}) type("image/webp") 2x,
      url(${Banan1x}) type("image/png") 1x, 
      url(${Banan2x}) type("image/png") 2x),
    image-set(url(${LiniaDesktopAvif1x}) type("image/avif") 1x,
      url(${LiniaDesktopAvif2x}) type("image/avif") 2x,
      url(${LiniaDesktopWebp1x}) type("image/webp") 1x,
      url(${LiniaDesktopWebp2x}) type("image/webp") 2x,
      url(${LiniaDesktop1x}) type("image/png") 1x,
      url(${LiniaDesktop2x}) type("image/png") 2x);

    background-repeat: no-repeat;
    background-size: 760px 760px, 360px 360px, 700px 500px, 602px 816px;
    background-position: right 16em bottom 5em, right 3em bottom 0em, right -15em bottom 30em, right 0em bottom 0em;
  }

}`;

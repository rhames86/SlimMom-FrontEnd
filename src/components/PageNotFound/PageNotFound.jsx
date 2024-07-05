import React from 'react';
import { useSelector } from 'react-redux';
import {
  PageNotFd,
  StyledHeader,
  StyledImg,
  StyledLine,
  StyledSpan,
  StyledText,
} from './PageNotFound.styled';
// import { createRoot } from 'react-dom/client';
import strawberry from 'img/Strawberry-desktop@2x-min.png';
import strawberry_png_d from 'img/Strawberry-desktop@2x-min.png';
import strawberry_webp_d from 'img/Strawberry-desktop@2x-min.webp';
import strawberry_avif_d from 'img/Strawberry-desktop@2x-min.avif';
import strawberry_png_t from 'img/main-strawberry-tablet@2x-min.png';
import strawberry_webp_t from 'img/main-strawberry-tablet@2x-min.webp';
import strawberry_avif_t from 'img/main-strawberry-tablet@2x-min.avif';

// const root = createRoot(document.getElementById('root'));
function PageNotFound() {
  const lang = useSelector(state => state.auth.lang);

  return (
    <PageNotFd>
      <StyledHeader>
        <li>4</li>
        <li>
          <StyledSpan>
            <picture>
              <source
                type="image/avif"
                media="(min-width: 1280px)"
                srcSet={`${strawberry_avif_d} 1x, ${strawberry_avif_d} 2x`}
              />
              <source
                type="image/webp"
                media="(min-width: 1280px)"
                srcSet={`${strawberry_webp_d} 1x, ${strawberry_webp_d} 2x`}
              />
              <source
                type="image/png"
                media="(min-width: 1280px)"
                srcSet={`${strawberry_png_d} 1x, ${strawberry_png_d} 2x`}
              />
              <source
                type="image/avif"
                width="120"
                height="150"
                media="(min-width: 768px)"
                srcSet={`${strawberry_avif_t} 1x, ${strawberry_avif_t} 2x`}
              />
              <source
                type="image/webp"
                width="120"
                height="150"
                media="(min-width: 768px)"
                srcSet={`${strawberry_webp_t} 1x, ${strawberry_webp_t} 2x`}
              />
              <source
                type="image/png"
                width="120"
                height="150"
                media="(min-width: 768px)"
                srcSet={`${strawberry_png_t} 1x, ${strawberry_png_t} 2x`}
              />
              <source
                type="image/avif"
                width="85"
                height="100"
                media="(max-width: 767px)"
                srcSet={`${strawberry_avif_t} 1x, ${strawberry_avif_t} 2x`}
              />
              <source
                type="image/webp"
                width="85"
                height="100"
                media="(max-width: 767px)"
                srcSet={`${strawberry_webp_t} 1x, ${strawberry_webp_t} 2x`}
              />
              <source
                type="image/png"
                width="85"
                height="100"
                media="(max-width: 767px)"
                srcSet={`${strawberry_png_t} 1x, ${strawberry_png_t} 2x`}
              />
              <StyledImg
                src={strawberry}
                alt="strawberry"
                width="150"
                height="150"
              ></StyledImg>
            </picture>
          </StyledSpan>
        </li>
        <li>4</li>
      </StyledHeader>
      <StyledLine>{lang.notFoundTitle}</StyledLine>
      <div className="container">
        <p className="text">
          <StyledText>{lang.notFoundText}</StyledText>
        </p>
      </div>
    </PageNotFd>
  );
}

// root.render(<PageNotFound />);

export default PageNotFound;

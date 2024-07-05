import React from 'react';
import {
  Box,
  List,
  ListTitle,
  PreContent,
  Item,
  BoxList,
  Container,
  Title,
  Content,
  ContainerItem,
} from './RightSideBar.styled';
import { useSelector } from 'react-redux';
import { getDaySummary } from 'redux/day/day-selectors';
import { getNotAllowedProducts } from 'redux/auth/auth-selectors';
import { nanoid } from 'nanoid';

const RightSideBar = () => {
  const daySummary = useSelector(getDaySummary);
  const notAllowedProducts = useSelector(getNotAllowedProducts);
  const lang = useSelector(state => state.auth.lang);

  const normalizedSelectedDate = new Date(daySummary?.date || new Date())
    .toISOString()
    .split('T')[0];

  return (
    <Box>
      <BoxList>
        <ListTitle>
          {lang.summaryTitle} {normalizedSelectedDate}
        </ListTitle>
        <Container>
          <ContainerItem>
            <Title>{lang.leftTitle}</Title>
            <Content>
              {daySummary?.dailyRate > 0 ? Math.round(daySummary.kcalLeft) : 0}{' '}
              {lang.kcal}
            </Content>{' '}
          </ContainerItem>
          <ContainerItem>
            <Title>{lang.consumedTitle}</Title>
            <Content>
              {daySummary?.dailyRate > 0
                ? Math.round(daySummary.kcalConsumed)
                : 0}{' '}
              {lang.kcal}
            </Content>
          </ContainerItem>
          <ContainerItem>
            <Title>{lang.dailyRateTitle} </Title>
            <Content>
              {' '}
              {daySummary?.dailyRate > 0
                ? Math.round(daySummary.dailyRate)
                : 0}{' '}
              {lang.kcal}{' '}
            </Content>
          </ContainerItem>
          <ContainerItem>
            <Title>{lang.percentNormal}</Title>
            <Content>
              {daySummary?.dailyRate > 0
                ? Math.round(daySummary.percentsOfDailyRate)
                : 0}{' '}
              %
            </Content>
          </ContainerItem>
        </Container>
      </BoxList>
      <BoxList>
        <ListTitle>{lang.notRecomended}</ListTitle>
        {daySummary?.dailyRate > 0 ? (
          <List>
            {notAllowedProducts.map((product, idx) => (
              <Item key={nanoid()}>
                {idx + 1}. {product}
              </Item>
            ))}
          </List>
        ) : (
          <PreContent> {lang.yourDiet} </PreContent>
        )}
      </BoxList>
    </Box>
  );
};

export default RightSideBar;

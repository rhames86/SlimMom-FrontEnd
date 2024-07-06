import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsersAdvice } from 'redux/app/auth/auth-operations';
import { authSelectors } from 'redux/app/auth';
import { diaryPerDayOperation, updateDate } from 'redux/app/diaryPerDay';

import { DailyCaloriesForm, Header, SideBar } from 'components';

import { Thumb, ContainerBar } from './CalculatorPage.styled';

const CalculatorPage = () => {
  const dispatch = useDispatch();
  const currentDate = new Date().toLocaleDateString('ru-RU');
  const userInfo = useSelector(authSelectors.getUserInfo);

  useEffect(() => {
    dispatch(updateDate(currentDate));
    dispatch(diaryPerDayOperation.actionGetProducts({ date: currentDate }));
  }, [currentDate, dispatch]);

  const submitForm = async data => {
    dispatch(getUsersAdvice(data));
  };

  return (
    <>
      <Header localPage="CalculatorPage" />
      <Thumb>
        <DailyCaloriesForm
          onFormSubmit={submitForm}
          userInfo={userInfo}
          isCleanUserInfo={false}
        />

        <ContainerBar>
          <SideBar date={currentDate} />
        </ContainerBar>
      </Thumb>
    </>
  );
};
export default CalculatorPage;

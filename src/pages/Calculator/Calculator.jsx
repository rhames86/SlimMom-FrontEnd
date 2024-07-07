import { useEffect } from 'react';
import { Box } from './Calculator.styled';
import { useDispatch } from 'react-redux';
import { dayInfo } from 'redux/day/day-operations';
import { useWidth } from 'hooks/useWidth';
import { useSelector } from 'react-redux';
import { getIsModalOpen } from 'redux/modal/modal-selectors';
// import Loader from 'components/Loader/Loader';
import CalculatorCalorieForm from 'components/CalculatorСalorieForm/CalculatorСalorieForm';
// import RightSideBar from 'components/RightSideBar/RightSideBar';
import Recommendations from 'components/Modal/Recommendations/Recommendations';
// const CalculatorCalorieForm = lazy(() =>
//   import('components/CalculatorСalorieForm/CalculatorСalorieForm')
// );
// const RightSideBar = lazy(() => import('components/RightSideBar/RightSideBar'));
// const Recommendations = lazy(() =>
//   import('components/Modal/Recommendations/Recommendations')
// );

function Calculator() {
  const dispatch = useDispatch();
  const width = useWidth();
  const isModalOpen = useSelector(getIsModalOpen);

  const exportDate = () => {
    let date = new Date();
    let dateString = date.toISOString().split('T')[0];
    return { date: dateString };
  };
  useEffect(() => {
    dispatch(dayInfo(exportDate()));
  }, [dispatch]);

  return (
    // <Suspense fallback={<Loader />}>
    <Box>
      {isModalOpen && width <= 768 ? (
        <Recommendations />
      ) : (
        <>
          <div
            style={{
              flexGrow: 0.7,
            }}
          >
            <CalculatorCalorieForm />
          </div>
          {/* <RightSideBar /> */}
        </>
      )}
    </Box>
    // </Suspense>
  );
}
export default Calculator;

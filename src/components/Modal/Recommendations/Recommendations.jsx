import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import {
  EnterButton,
  Wrapper,
  Title,
  ProductsList,
  Calories,
  Caption,
  Kkal,
  ProductItem,
  Product,
  CaloriesWrapper,
  Recommend,
} from './recommendations.styled';
import { getDaily, getIsLoggedIn } from '../../../redux/auth/auth-selectors';
// import { StyledBtnAuthAccent } from 'components/Login/Login.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/modal-reducer';
import { getIsModalOpen } from 'redux/modal/modal-selectors';

function Recommendations() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isModalOpen = useSelector(getIsModalOpen);
  const products = useSelector(getDaily);
  const lang = useSelector(state => state.auth.lang);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStartLoseWeight = () => {
    dispatch(toggleModal(!isModalOpen));
    return isLoggedIn ? navigate('/diary') : navigate('/registration');
  };

  return (
    <Wrapper>
      <Title>
        {lang.modalTitleStart} <br />
        {lang.modalTitleFinish}
      </Title>
      <CaloriesWrapper>
        <Calories>
          {Math.trunc(products.dailyRate)}
          <Kkal> {lang.kcal}</Kkal>
        </Calories>
      </CaloriesWrapper>
      <Recommend>
        <Caption>{lang.modalListTitle}</Caption>
        <ProductsList>
          {products.notAllowedProducts.map((product, idx) => (
            <ProductItem key={nanoid()}>
              <Product>
                {idx + 1}. {product}
              </Product>
            </ProductItem>
          ))}
        </ProductsList>
      </Recommend>

      <EnterButton type="button" onClick={handleStartLoseWeight}>
        {lang.buttonStartloseweight}
      </EnterButton>
    </Wrapper>
  );
}

export default Recommendations;

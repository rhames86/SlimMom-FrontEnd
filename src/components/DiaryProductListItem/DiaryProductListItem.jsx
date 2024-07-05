import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as css from './DiaryProductListItem.styled';
import { dayInfo, deleteProduct } from 'redux/day/day-operations';

function DiaryProductListItem({ valueDate }) {
  const eatenProducts = useSelector(state => state.day.eatenProducts);
  const dayId = useSelector(state => state.day.id);
  const dispatch = useDispatch();
  let selectedDate = useMemo(() => ({ date: valueDate }), [valueDate]);
  const [deletedObjects, setDeletedObjects] = useState([]);
  const lang = useSelector(state => state.auth.lang);

  const handleDeleteFood = (eatenProductId, index) => {
    if (deletedObjects.includes(index)) {
      return;
    }

    const body = {
      dayId,
      eatenProductId,
    };

    setDeletedObjects([...deletedObjects, index]);

    dispatch(deleteProduct(body))
      .then(() => {
        dispatch(dayInfo(selectedDate));
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!eatenProducts) {
    return null;
  }

  return (
    <>
      {eatenProducts.map((eaten, index) => (
        <css.ListItem key={eaten.id}>
          <css.PName>{eaten.title}</css.PName>{' '}
          <css.PGrame>
            {eaten.weight} <css.Kcal>{lang.gramm}</css.Kcal>
          </css.PGrame>{' '}
          <css.PKcal>
            {eaten.kcal.toFixed(0)} <css.Kcal>{lang.kcal}</css.Kcal>
          </css.PKcal>{' '}
          <css.Button
            onClick={() => handleDeleteFood(eaten.id, index)}
            type="button"
          >
            <css.Close />
          </css.Button>
        </css.ListItem>
      ))}
    </>
  );
}

export default DiaryProductListItem;

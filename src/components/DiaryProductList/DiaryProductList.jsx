import * as css from './DiaryProductList.styled';
import DiaryProductListItem from 'components/DiaryProductListItem/DiaryProductListItem';

function DiaryProductList({valueDate}) {
  return (
    <div>
      <css.DivStyle>
        <css.List>
          <DiaryProductListItem valueDate={valueDate}/>
        </css.List>
      </css.DivStyle>
    </div>
  );
}

export default DiaryProductList;

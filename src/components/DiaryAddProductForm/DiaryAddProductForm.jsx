import React, { useEffect, useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dayInfo, postProduct } from '../../redux/day/day-operations';
import productSearch from '../../utils/productsSearch';
import * as css from './DiaryAddProductForm.styled.js';
import { useWidth } from 'hooks/useWidth';
import { toggleModal } from 'redux/modal/modal-reducer';

function DiaryAddProductForm({ valueDate, openMobileForm, isModalOpen }) {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');
  const [weight, setWeight] = useState('');
  const [suggestedProducts, setSuggestedProducts] = useState([]);
  const [productId, setIdProduct] = useState('');
  const inputRef = useRef(null);
  const suggestionsListRef = useRef(null);
  let selectedDate = useMemo(() => ({ date: valueDate }), [valueDate]);
  const searchTimeoutRef = useRef(null);
  const width = useWidth();
  const lang = useSelector(state => state.auth.lang);

  useEffect(() => {
    dispatch(dayInfo(selectedDate));
  }, [dispatch, selectedDate]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.keyCode === 27) {
        setSuggestedProducts([]);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        suggestionsListRef.current &&
        !suggestionsListRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setSuggestedProducts([]);
      }
    }

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    if (!productName || !weight) {
      return;
    }

    const body = {
      date: valueDate,
      productId,
      weight,
    };
    dispatch(postProduct(body))
      .then(() => {
        dispatch(dayInfo(selectedDate));
      })
      .catch(error => {
        console.log(error);
      });
    setProductName('');
    setWeight('');
    setSuggestedProducts([]);
  };

  const onSubmitMobile = e => {
    e.preventDefault();

    if (!productName || !weight) {
      return;
    }

    const body = {
      date: valueDate,
      productId,
      weight,
    };
    dispatch(postProduct(body))
      .then(() => {
        dispatch(dayInfo(selectedDate));
      })
      .catch(error => {
        console.log(error);
      });
    setProductName('');
    setWeight('');
    setSuggestedProducts([]);
    dispatch(toggleModal(false));
    // setOpenMobileForm(false);
  };

  const handleProductNameChange = e => {
    const query = e.target.value;

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    setProductName(query);

    if (query === '') {
      setSuggestedProducts([]);
      return;
    }

    searchTimeoutRef.current = setTimeout(async () => {
      const suggestions = await productSearch(query);
      setSuggestedProducts(suggestions);
    }, 500);
  };

  const handleProductSelect = product => {
    setProductName(product.title.ua);
    setIdProduct(product._id);
    setSuggestedProducts([]);
  };

  const handleGramsChange = e => {
    const value = e.target.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    setWeight(numericValue);
  };

  const handleAddForm = () => {
    dispatch(toggleModal(true));
    // setOpenMobileForm(true);
  };

  return (
    <>
      {isModalOpen ? (
        <>
          <css.Form action="" onSubmit={onSubmitMobile}>
            <css.InputProdName
              type="text"
              placeholder={lang.placeholderProductName}
              value={productName}
              onChange={handleProductNameChange}
              ref={inputRef}
            />
            {suggestedProducts && suggestedProducts.length > 0 && (
              <css.SuggestionsList ref={suggestionsListRef}>
                {suggestedProducts.map(product => (
                  <css.SuggestionItem
                    key={product._id}
                    onClick={() => handleProductSelect(product)}
                  >
                    {product.title.ua}
                  </css.SuggestionItem>
                ))}
              </css.SuggestionsList>
            )}
            <css.InputGrams
              type="text"
              placeholder={lang.placeholderProductWeight}
              value={weight}
              onChange={handleGramsChange}
            />
            <css.ButtonMob type="submit">{lang.add}</css.ButtonMob>
          </css.Form>
        </>
      ) : (
        <div>
          {width < 768 ? (
            <css.Button type="button" onClick={handleAddForm}>
              <css.Plus />
            </css.Button>
          ) : (
            <css.Form action="" onSubmit={onSubmit}>
              <css.InputProdName
                type="text"
                placeholder={lang.placeholderProductName}
                value={productName}
                onChange={handleProductNameChange}
                ref={inputRef}
              />
              {suggestedProducts && suggestedProducts.length > 0 && (
                <css.SuggestionsList ref={suggestionsListRef}>
                  {suggestedProducts.map(product => (
                    <css.SuggestionItem
                      key={product._id}
                      onClick={() => handleProductSelect(product)}
                    >
                      {product.title.ua}
                    </css.SuggestionItem>
                  ))}
                </css.SuggestionsList>
              )}
              <css.InputGrams
                type="text"
                placeholder={lang.placeholderProductWeight}
                value={weight}
                onChange={handleGramsChange}
              />
              <css.Button type="submit">
                <css.Plus />
              </css.Button>
            </css.Form>
          )}
        </div>
      )}
    </>
  );
}

export default DiaryAddProductForm;

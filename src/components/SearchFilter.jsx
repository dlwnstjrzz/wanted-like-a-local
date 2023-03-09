/* eslint-disable no-nested-ternary */
import { useSelector, useDispatch } from 'react-redux';

import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react';

import { cityNames, price } from '../constants/constant';
import { setSelectCity, setSelectPrice } from '../redux-toolkit/filterSlice';

export default function SearchFilter() {
  const { selectedCity, selectedPrice } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  return (
    <Flex fontSize="sm" fontWeight="bold">
      <Menu>
        <MenuButton mr={15}>
          {!selectedPrice.maxPrice
            ? '가격 선택'
            : selectedPrice.maxPrice !== Infinity
            ? `₩${selectedPrice.minPrice}~₩${selectedPrice.maxPrice}`
            : `₩${selectedPrice.minPrice}~`}
          <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {price.map(({ minPrice, maxPrice }) => {
            return (
              <MenuItem onClick={() => dispatch(setSelectPrice({ minPrice, maxPrice }))}>
                {maxPrice !== Infinity ? `₩${minPrice}~₩${maxPrice}` : `₩${minPrice}~`}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton>
          {!selectedCity ? '지역 선택' : selectedCity}
          <ChevronDownIcon />
        </MenuButton>
        <MenuList>
          {cityNames.map((city) => {
            return <MenuItem onClick={() => dispatch(setSelectCity(city))}>{city}</MenuItem>;
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
}

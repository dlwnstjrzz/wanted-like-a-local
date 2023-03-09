const cityColor = {
  강원: 'red',
  서울: 'green',
  부산: 'teal',
  대구: 'purple',
  제주: 'pink',
};
const cityNames = ['강원', '서울', '부산', '대구', '제주'];
const price = [
  {
    minPrice: 0,
    maxPrice: 15000,
  },
  {
    minPrice: 15000,
    maxPrice: 30000,
  },
  {
    minPrice: 30000,
    maxPrice: Infinity,
  },
];
export { cityColor, cityNames, price };

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { Flex, Grid } from '@chakra-ui/react';

import { Layout, ProductCard, SearchFilter } from '../components';
import productList from '../data/product_list.json';

export default function Main() {
  const { selectedCity, selectedPrice } = useSelector((state) => state.filter);
  const [products, setProducts] = useState(productList);

  useEffect(() => {
    let filteredProducts = productList;
    if (selectedCity) {
      filteredProducts = filteredProducts.filter(
        (product) => product.spaceCategory === selectedCity,
      );
    }
    if (selectedPrice.maxPrice) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.price >= selectedPrice.minPrice && product.price <= selectedPrice.maxPrice,
      );
    }
    setProducts(filteredProducts);
  }, [selectedCity, selectedPrice]);

  return (
    <Layout>
      <Flex width="100%" justify="flex-end" pt={15} pr={50}>
        <SearchFilter />
      </Flex>
      <Grid maxW="80%" templateColumns="repeat(2, 1fr)" gap={0} margin="auto">
        {products?.map((product) => {
          return <ProductCard key={product.idx} product={product} />;
        })}
      </Grid>
    </Layout>
  );
}

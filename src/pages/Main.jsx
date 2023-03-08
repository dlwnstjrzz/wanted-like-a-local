import { Grid } from '@chakra-ui/react';

import { Layout } from '../components';
import ProductAddToCart from '../components/test';
import productList from '../data/product_list.json';

export default function Main() {
  return (
    <Layout>
      <Grid maxW="80%" templateColumns="repeat(2, 1fr)" gap={0} margin="auto">
        {productList.map((product) => {
          return <ProductAddToCart product={product} />;
        })}
      </Grid>
    </Layout>
  );
}

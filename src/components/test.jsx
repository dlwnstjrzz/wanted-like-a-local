/* eslint-disable react/no-array-index-key */
import { FiShoppingCart } from 'react-icons/fi';

import {
  Flex,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';

import cityColor from '../constants/constant';

function ProductAddToCart({ product: { idx, name, mainImage, price, spaceCategory } }) {
  return (
    <Flex py={5} w="250px" alignItems="center" justifyContent="center" margin="auto">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        width="80%"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        <Image src={mainImage} alt={`Picture of ${name}`} roundedTop="lg" />

        <Box p="3">
          <Box d="flex" alignItems="baseline">
            <Badge rounded="full" px="2" fontSize="0.6em" colorScheme="grey">
              {idx}
            </Badge>
            <Badge rounded="full" px="2" fontSize="0.6em" colorScheme={cityColor[spaceCategory]}>
              {spaceCategory}
            </Badge>
          </Box>
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box
              mr="5px"
              fontSize="12px"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {name}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement="top"
              color="gray.800"
              fontSize="1.2em"
            >
              <chakra.a href="#" display="flex">
                <Icon as={FiShoppingCart} h={5} w={5} alignSelf="center" />
              </chakra.a>
            </Tooltip>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color="gray.600" fontSize="md">
                ￦
              </Box>
              {price.toLocaleString()}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProductAddToCart;

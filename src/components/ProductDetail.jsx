import { Flex, Box, Image, Badge, useColorModeValue } from '@chakra-ui/react';

import { cityColor } from '../constants/constant';

export default function ProductDetail({
  product: { idx, name, mainImage, description, spaceCategory, price, maximumPurchases },
}) {
  return (
    <Flex py={3} w="80%" alignItems="center" justifyContent="center" margin="auto">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
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
          <Flex direction="column" mt="1" justifyContent="space-between" alignContent="center">
            <Box mr="5px" fontSize="12px" fontWeight="semibold" as="h4" lineHeight="tight">
              {description}
            </Box>
            <Box mr="5px" mt={1} fontSize="10px" fontWeight="semibold" as="h4" lineHeight="tight">
              최대 구매 가능 개수: {maximumPurchases}
            </Box>
          </Flex>

          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="sm" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span">￦</Box>
              {price.toLocaleString()}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
}

import { Box, Heading, Image, Text, HStack, Tag, useColorModeValue } from '@chakra-ui/react';

import cityColor from '../constants/constant';

function BlogTags({ tags, cityName }) {
  return (
    <HStack spacing={2}>
      {tags.map((tag) => {
        return (
          <Tag size="sm" variant="solid" colorScheme={cityColor[cityName]} key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
}
export default function ProductCard({ product: { idx, name, mainImage, price, spaceCategory } }) {
  return (
    <Box
      marginTop={{ base: '1', sm: '5' }}
      display="flex"
      flexDirection={{ base: 'column', sm: 'row' }}
      justifyContent="space-between"
      width="65%"
      margin="auto"
    >
      <Box display="flex" flex="1" marginRight="3" position="relative" alignItems="center">
        <Box
          width={{ base: '100%', sm: '85%' }}
          zIndex="2"
          marginLeft={{ base: '0', sm: '5%' }}
          marginTop="5%"
        >
          <Box>
            <Image borderRadius="lg" src={mainImage} alt="some good alt text" objectFit="contain" />
          </Box>
        </Box>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              'radial(orange.600 1px, transparent 1px)',
              'radial(orange.300 1px, transparent 1px)',
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: '3', sm: '0' }}
      >
        <BlogTags tags={[spaceCategory]} cityName={spaceCategory} />
        <Heading marginTop="1" as="h4" size="sm">
          <Text>{name}</Text>
        </Heading>
        <Text as="p" marginTop="2" color={useColorModeValue('black.100', 'gray.200')} fontSize="xs">
          {price}
        </Text>
        <Text fontSize="10px" color={useColorModeValue('gray.800', 'gray.500')}>
          {idx}
        </Text>
      </Box>
    </Box>
  );
}

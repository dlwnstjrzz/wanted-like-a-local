import { FiShoppingCart } from 'react-icons/fi';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Icon,
  chakra,
  Box,
} from '@chakra-ui/react';

import ProductDetail from './ProductDetail';

export default function ProductModal({ product, isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xs">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{product.name}</ModalHeader>
        <Box ml={6} fontSize="10px" fontWeight="semibold" as="h4" lineHeight="tight">
          {product.registrationDate}
        </Box>
        <ModalCloseButton />
        <ModalBody>
          <ProductDetail product={product} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="teal" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">
            장바구니에 넣기
            <chakra.a href="#" display="flex" ml={1}>
              <Icon as={FiShoppingCart} h={5} w={5} alignSelf="center" />
            </chakra.a>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

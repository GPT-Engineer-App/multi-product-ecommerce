import React, { useState } from "react";
import { Container, Box, VStack, HStack, Text, Button, Image, IconButton, Badge } from "@chakra-ui/react";
import { FaShoppingCart, FaTrash } from "react-icons/fa";

const products = [
  { id: 1, name: "Product 1", price: 29.99, image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTU2MzQ5NzJ8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Product 2", price: 49.99, image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTU2MzQ5NzN8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Product 3", price: 19.99, image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTU2MzQ5NzN8MA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 4, name: "Product 4", price: 99.99, image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwNHxlbnwwfHx8fDE3MTU2MzQ5NzN8MA&ixlib=rb-4.0.3&q=80&w=1080" },
];

const Index = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const total = cart.reduce((acc, product) => acc + product.price, 0);

  return (
    <Container maxW="container.xl" py={4}>
      <HStack justifyContent="space-between" mb={4}>
        <Text fontSize="2xl" fontWeight="bold">
          E-commerce Site
        </Text>
        <HStack>
          <IconButton aria-label="Cart" icon={<FaShoppingCart />} size="lg" />
          <Badge colorScheme="green" borderRadius="full" px={2}>
            {cart.length}
          </Badge>
        </HStack>
      </HStack>
      <HStack spacing={8} align="start">
        <VStack spacing={4} w="70%">
          {products.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="100%">
              <Image src={product.image} alt={product.name} boxSize="200px" objectFit="cover" mx="auto" />
              <VStack mt={4} spacing={2}>
                <Text fontSize="xl" fontWeight="bold">
                  {product.name}
                </Text>
                <Text>${product.price.toFixed(2)}</Text>
                <Button colorScheme="teal" onClick={() => addToCart(product)}>
                  Add to Cart
                </Button>
              </VStack>
            </Box>
          ))}
        </VStack>
        <VStack spacing={4} w="30%" borderWidth="1px" borderRadius="lg" p={4}>
          <Text fontSize="xl" fontWeight="bold">
            Shopping Cart
          </Text>
          {cart.length === 0 ? (
            <Text>Your cart is empty</Text>
          ) : (
            cart.map((product) => (
              <HStack key={product.id} justifyContent="space-between" w="100%">
                <Text>{product.name}</Text>
                <HStack>
                  <Text>${product.price.toFixed(2)}</Text>
                  <IconButton aria-label="Remove" icon={<FaTrash />} size="sm" onClick={() => removeFromCart(product.id)} />
                </HStack>
              </HStack>
            ))
          )}
          {cart.length > 0 && (
            <Box w="100%" mt={4}>
              <Text fontSize="lg" fontWeight="bold">
                Total: ${total.toFixed(2)}
              </Text>
              <Button colorScheme="teal" w="100%">
                Checkout
              </Button>
            </Box>
          )}
        </VStack>
      </HStack>
    </Container>
  );
};

export default Index;

import { ArrowRightIcon, StarIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Text,
  Image,
  OrderedList,
  ListItem,
  UnorderedList,
  Link,
  Input,
  Box,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useEffect, useRef, useState } from "react";
import BottomNav from "./bottomnavbar";
import NavBar from "./navbar";
import ShopComp from "./shopcomp";

const Cart = () => {
  return (
    <Flex direction={"column"} alignItems={"center"} width={"100%"}>
      <NavBar />
      <Flex direction={"column"} alignItems={"flex-start"} width={"80%"}>
        <Text fontSize={"30pt"} fontWeight={800} fontStyle={"italic"}>
          CART
        </Text>
      </Flex>
      <BottomNav />
    </Flex>
  );
};

export default Cart;

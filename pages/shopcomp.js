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

const ShopComp = (url, name, img, rev, orig, ne, router) => {
  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      width={{ base: "40%", md: "30%", lg: "23%" }}
      as={"a"}
      _hover={{
        cursor: "pointer",
      }}
      onClick={() => router.push("/" + url)}
    >
      <Image
        transition="transform 0.5s ease-out"
        _hover={{
          opacity: 0.7,
        }}
        src={img}
        alt={"Product"}
        width={"100%"}
        borderRadius={5}
      />
      <Text fontWeight={700} fontSize={"16pt"}>
        {name}
      </Text>
      <Flex alignItems={"center"} gap={3}>
        <Flex alignItems={"center"}>
          <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
          <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
          <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
          <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
          <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
        </Flex>
        <Text>({rev})</Text>
      </Flex>
      <Flex alignItems={"center"} gap={3}>
        <Text as={"s"} color={"gray"}>
          ${orig}
        </Text>
        <Text color={"orange"} fontSize={"14pt"}>
          ${ne} Sale
        </Text>
      </Flex>
      <Button
        backgroundColor={"green.400"}
        colorScheme={"transparent"}
        width={"50%"}
        fontWeight={700}
        color={"white"}
        fontSize={{ base: "10pt", md: "13pt" }}
        borderRadius={20}
      >
        Save ${orig - ne}
      </Button>
    </Flex>
  );
};

export default ShopComp;

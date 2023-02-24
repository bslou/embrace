import { Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  return (
    <Flex direction={"column"} alignItems={"center"} width={"100%"}>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={"#135076"}
        width={"100%"}
        paddingTop={2}
        paddingBottom={2}
      >
        <Text color={"white"} fontWeight={700}>
          $20 off on all clothes
        </Text>
      </Flex>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        backgroundColor={"#fff"}
        width={"100%"}
        paddingTop={5}
        paddingLeft={3}
        paddingRight={3}
        paddingBottom={5}
        boxShadow={"0px 2px 2px 2px rgba(50, 50, 50, 0.5)"}
        zIndex={9999999}
      >
        <Button
          colorScheme={"transparent"}
          width={170}
          onClick={() => router.push("/")}
        >
          <Image
            src={"/Embrace.png"}
            alt={"embrace"}
            width={200}
            height={200}
            layout={"responsive"}
          />
        </Button>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={2}
        >
          <Button
            _hover={{
              textDecoration: "underline",
            }}
            fontWeight={800}
            fontSize={"14pt"}
            colorScheme={"transparent"}
            color={"black"}
            onClick={() => router.push("/story")}
          >
            Our Story
          </Button>
          <Text fontSize={"14pt"}>|</Text>
          <Button
            _hover={{
              textDecoration: "underline",
            }}
            fontWeight={500}
            fontSize={"14pt"}
            colorScheme={"transparent"}
            color={"black"}
          >
            Best Sellers
          </Button>
          <Button
            _hover={{
              textDecoration: "underline",
            }}
            fontWeight={500}
            fontSize={"14pt"}
            colorScheme={"transparent"}
            color={"black"}
          >
            Shirts
          </Button>
          <Button
            _hover={{
              textDecoration: "underline",
            }}
            fontWeight={500}
            fontSize={"14pt"}
            colorScheme={"transparent"}
            color={"black"}
          >
            Hoodies
          </Button>
          <Button
            _hover={{
              textDecoration: "underline",
            }}
            fontWeight={500}
            fontSize={"14pt"}
            colorScheme={"transparent"}
            color={"black"}
          >
            Sweaters
          </Button>
        </Flex>
        <Button
          onClick={() => router.push("/cart")}
          colorScheme={"transparent"}
          width={70}
        >
          <Image src={"/cart.png"} alt={"Cart"} width={70} height={70} />
        </Button>
      </Flex>
    </Flex>
  );
};

export default NavBar;

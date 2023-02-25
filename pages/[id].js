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
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BottomNav from "./bottomnavbar";
import NavBar from "./navbar";
import ShopComp from "./shopcomp";

const Case = () => {
  const router = useRouter();
  const [ind, setInd] = useState(0);
  const [quant, setQuant] = useState(1);
  //router.query.id
  const info = [
    {
      url: "standard-embrace-shirt",
      name: "Standard Embrace Shirt",
      img: "/ex.png",
      reviews: 29,
      original: 70,
      final: 50,
    },
    {
      url: "standard-embrace-shirt",
      name: "Standard Embrace Shirt",
      img: "/ex.png",
      reviews: 29,
      original: 70,
      final: 50,
    },
    {
      url: "standard-embrace-shirt",
      name: "Standard Embrace Shirt",
      img: "/ex.png",
      reviews: 29,
      original: 70,
      final: 50,
    },
    {
      url: "standard-embrace-shirt",
      name: "Standard Embrace Shirt",
      img: "/ex.png",
      reviews: 29,
      original: 70,
      final: 50,
    },
    {
      url: "standard-embrace-shirt",
      name: "Standard Embrace Shirt",
      img: "/ex.png",
      reviews: 29,
      original: 70,
      final: 50,
    },
    {
      url: "standard-embrace-shirt",
      name: "Standard Embrace Shirt",
      img: "/ex.png",
      reviews: 29,
      original: 70,
      final: 50,
    },
  ];

  // function handleKeyDown(event) {
  //   if (event.key === "Backspace" && quant <= 9) {
  //     event.preventDefault();
  //   }
  // }

  useEffect(() => {
    if ((quant == "") | (quant == 0)) {
      setQuant(1);
    }
    var val = router.query.id;
    console.log(router.query.id);
    info.find(function (item, i) {
      if (item.name === val) {
        setInd(i);
        return i;
      }
    });
    console.log(ind);
  }, [router, quant]);
  return (
    <Flex direction={"column"} alignItems={"center"} width={"100%"}>
      <NavBar />
      <Flex
        direction={"row"}
        justifyContent={"center"}
        width={"85%"}
        alignItems={"center"}
        marginTop={5}
        marginBottom={5}
      >
        <Image
          src={info[ind].img}
          alt={info[ind].name}
          width={"47.5%"}
          height={"100%"}
        />
        <Flex
          direction={"column"}
          alignItems={"flex-start"}
          padding={10}
          gap={8}
          marginBottom={{ base: 6, md: 8, lg: 10 }}
        >
          <Text
            fontWeight={800}
            fontSize={{ base: "26pt", md: "28pt", lg: "30pt" }}
          >
            {info[ind].name}
          </Text>
          <Flex alignItems={"center"} justifyContent={"center"} gap={3}>
            <Text as={"s"}>${info[ind].original}*</Text>
            <Text
              color={"orange"}
              fontSize={{ base: "17pt", md: "19pt", lg: "21pt" }}
            >
              ${info[ind].final}
            </Text>
            <Button
              backgroundColor={"green.400"}
              colorScheme={"transparent"}
              width={100}
              fontWeight={700}
              color={"white"}
              fontSize={"13pt"}
              borderRadius={20}
              _hover={{
                cursor: "default",
              }}
            >
              Save ${info[ind].original - info[ind].final}
            </Button>
          </Flex>
          <Flex alignItems={"center"} gap={3}>
            <Flex alignItems={"center"}>
              <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={7} />
              <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={7} />
              <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={7} />
              <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={7} />
              <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={7} />
            </Flex>
            <Text fontSize={{ base: "14pt", md: "16pt", lg: "18pt" }}>
              ({info[ind].reviews})
            </Text>
          </Flex>
          <Text>Quantity</Text>
          <Flex alignItems={"center"} justifyContent={"center"} gap={2}>
            <Flex border={"1px solid black"} padding={3}>
              <Button
                color={"black"}
                colorScheme={"transparent"}
                onClick={() => {
                  setQuant(quant + 1);
                  return;
                }}
              >
                +
              </Button>
              <Input
                type={"number"}
                border={"none"}
                value={quant}
                textAlign={"center"}
                maxWidth={80}
                //onKeyDown={handleKeyDown}
                onChange={(e) => setQuant(e.target.value)}
              />
              <Button
                color={"black"}
                colorScheme={"transparent"}
                onClick={() => {
                  if (quant <= 1) {
                    return;
                  }
                  setQuant(quant - 1);
                  return;
                }}
              >
                -
              </Button>
            </Flex>
            <Button
              paddingLeft={5}
              paddingRight={5}
              backgroundColor={"orange.500"}
              color={"white"}
              borderRadius={0}
              height={"9.3vh"}
              colorScheme={"transparent"}
              fontSize={{ base: "10pt", md: "11pt", lg: "12pt" }}
            >
              Add to Cart
            </Button>
          </Flex>
          <Text
            textAlign={"center"}
            fontSize={{ base: "8pt", md: "10pt", lg: "12pt" }}
          >
            *Strikethrough price will be discounted with code SUMMER taking the
            end value to ${info[ind].final} Offer is limited and can end at
            anytime.
          </Text>
        </Flex>
      </Flex>
      <BottomNav />
    </Flex>
  );
};

export default Case;

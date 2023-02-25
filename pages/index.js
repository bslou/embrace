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
  Spinner,
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BottomNav from "./bottomnavbar";
import NavBar from "./navbar";
import ShopComp from "./shopcomp";

export default function Home() {
  const HUNTER_API_KEY = "f1a8d6ee93ae02348e0c0a2bd693e42b010c375e";
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  const quotes = [
    {
      quote: '"I really love the brand and what it stands for"',
      author: "- Emma",
    },
    {
      quote: '"The design is exquisite and the clothes is really comfortable"',
      author: "- Ryan",
    },
    {
      quote:
        '"The quality of the clothes is wonderful, and I am proud to wear this brand"',
      author: "- Samuel",
    },
  ];
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [rows, setRows] = useState([]);
  const [temprows, setTemprows] = useState([]);
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(4);
  useEffect(() => {
    function updateScreenSize() {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  useEffect(() => {
    if (innerWidth >= 1200) {
      setNum(4);
    } else if (innerWidth >= 900) {
      setNum(3);
    } else if (innerWidth < 900) {
      setNum(2);
    }
    setRows([]);
    info.forEach((element) => {
      if (temprows.length % 4 == 0 && temprows.length != 0 && num % 4 == 0) {
        setRows((prevRows) => [
          ...prevRows,
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            gap={2}
          >
            {temprows[0]}
            {temprows[1]}
            {temprows[2]}
            {temprows[3]}
          </Flex>,
        ]);
        if (rows.includes(temprows[3])) {
          setTemprows([]);
        }
      } else if (temprows.length % num == 0 && temprows.length != 0) {
        setRows((prevRows) => [
          ...prevRows,
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            width={"100%"}
            gap={2}
          >
            {num - 4 >= 0 ? temprows[num - 4] : null}
            {num - 3 >= 0 ? temprows[num - 3] : null}
            {num - 2 >= 0 ? temprows[num - 2] : null}
            {temprows[num - 1]}
          </Flex>,
        ]);
        if (rows.includes(temprows[3])) {
          setTemprows([]);
        }
      } else {
        console.log("URL " + element.url);
        setTemprows((prevRows) => [
          ...prevRows,
          ShopComp(
            element.url,
            element.name,
            element.img,
            element.reviews,
            element.original,
            element.final,
            router
          ),
        ]);
      }
    });
    if (count == 0) {
      setCount(1);
    }
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % quotes.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentSlide, count, num, screenWidth]);

  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      width={"100%"}
      height={"100%"}
    >
      <NavBar />
      <Flex
        as={"a"}
        width={"100%"}
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => router.push("/all")}
      >
        <NextImage
          src={"/embracedesign.png"}
          alt={"Embrace design"}
          width={100}
          height={100}
          layout={"responsive"}
        />
      </Flex>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        backgroundColor={"#EDF8FF"}
        height={150}
        gap={3}
      >
        <Text
          //visibility={index === currentSlide ? "visible" : "hidden"}
          transition="opacity 0.5s ease-in-out"
          //position={"absolute"}
          fontWeight={600}
          fontSize={{ base: "10pt", md: "12pt", lg: "14pt" }}
          color={"#0A2A3E"}
          textAlign={"center"}
          //bottom={135}
        >
          {quotes[currentSlide].quote}
        </Text>
        <Text
          //visibility={index === currentSlide ? "visible" : "hidden"}
          //position={"absolute"}
          fontSize={{ base: "8pt", md: "10pt", lg: "12pt" }}
          fontStyle={"italic"}
          textAlign={"center"}
          color={"#0A2A3E"}
          //bottom={100}
        >
          {quotes[currentSlide].author}
        </Text>
      </Flex>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        marginTop={50}
        gap={10}
      >
        <Text fontWeight={800} fontSize={"23pt"} letterSpacing={-1}>
          SHOP BY CATEGORY
        </Text>
        <Flex
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"85%"}
          gap={"3%"}
        >
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundImage={"url('/ex.png')"}
            backgroundSize={"100% 100%"}
            height={{ base: 180, md: 280, lg: 380 }}
            width={"30%"}
            borderRadius={15}
            as={"a"}
            transition="opacity 0.5s ease-in-out"
            _hover={{
              //backgroundSize: "110% 110%",
              opacity: 0.7,
              cursor: "pointer",
            }}
            onClick={() => router.push("/all")}
          >
            <Text
              color={"white"}
              fontWeight={700}
              fontSize={{ base: "13pt", md: "18pt", lg: "23pt" }}
            >
              Shop Embrace
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundImage={"url('/ex.png')"}
            backgroundSize={"100% 100%"}
            height={{ base: 180, md: 280, lg: 380 }}
            width={"30%"}
            borderRadius={15}
            as={"a"}
            transition="opacity 0.5s ease-in-out"
            _hover={{
              //backgroundSize: "110% 110%",
              opacity: 0.7,
              cursor: "pointer",
            }}
            onClick={() => router.push("/sweaters")}
          >
            <Text
              color={"white"}
              fontWeight={700}
              fontSize={{ base: "13pt", md: "18pt", lg: "23pt" }}
            >
              Shop Sweaters
            </Text>
          </Flex>
          <Flex
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            backgroundImage={"url('/ex.png')"}
            height={{ base: 180, md: 280, lg: 380 }}
            backgroundSize={"100% 100%"}
            width={"30%"}
            borderRadius={15}
            as={"a"}
            transition="opacity 0.5s ease-in-out"
            _hover={{
              //backgroundSize: "110% 110%",
              opacity: 0.7,
              cursor: "pointer",
            }}
            onClick={() => router.push("/hoodies")}
          >
            <Text
              color={"white"}
              fontWeight={700}
              fontSize={{ base: "13pt", md: "18pt", lg: "23pt" }}
            >
              Shop Hoodies
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        alignItems={"center"}
        minWidth={"85%"}
        maxWidth={"100%"}
        gap={10}
        marginTop={50}
      >
        <Text fontWeight={800} fontSize={"23pt"} letterSpacing={-1}>
          WHICH WILL YOU CHOOSE?
        </Text>

        {rows.length != 6 ? <Spinner size={"xl"} /> : rows}
        <Button
          backgroundColor={"black"}
          color={"white"}
          fontWeight={700}
          fontSize={"15pt"}
          borderRadius={20}
          colorScheme={"transparent"}
          onClick={() => router.push("/all")}
        >
          View More
        </Button>
      </Flex>
      <Flex
        direction={"column"}
        alignItems={"center"}
        width={"100%"}
        gap={10}
        marginTop={50}
      >
        <Text fontWeight={800} fontSize={"23pt"} letterSpacing={-1}>
          WHAT'S EMBRACE?
        </Text>

        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"85%"}
          height={500}
          gap={"5%"}
        >
          <Image
            src="/ex.png"
            width={"47.5%"}
            alt={"Image"}
            height={{ base: "70%", md: "85%", lg: "100%" }}
          />
          <Flex
            direction={"column"}
            alignItems={"left"}
            justifyContent={"center"}
            width={"47.5%"}
            gap={5}
          >
            <Text
              fontWeight={700}
              fontSize={{ base: "14pt", md: "16pt", lg: "18pt" }}
            >
              "Embrace is like a blend between luxury and helping people get
              through tougher times"
            </Text>
            <UnorderedList>
              <ListItem
                fontSize={{ base: "10pt", md: "12pt", lg: "14pt" }}
                marginTop={3}
              >
                Embrace challenges and persevere through obstacles
              </ListItem>
              <ListItem
                fontSize={{ base: "10pt", md: "12pt", lg: "14pt" }}
                marginTop={3}
              >
                A brand centered toward helping people with mental health
              </ListItem>
              <ListItem
                fontSize={{ base: "10pt", md: "12pt", lg: "14pt" }}
                marginTop={3}
              >
                Helping people succeed with their endeavors
              </ListItem>
              <ListItem
                fontSize={{ base: "10pt", md: "12pt", lg: "14pt" }}
                marginTop={3}
              >
                New up and coming brand that will revolutionize the world
              </ListItem>
            </UnorderedList>
            <Button
              color={"white"}
              backgroundColor={"black"}
              borderRadius={10}
              paddingLeft={5}
              paddingRight={5}
              paddingTop={7}
              paddingBottom={7}
              colorScheme={"transparent"}
              fontSize={{ base: "7pt", md: "9.5pt", lg: "12pt" }}
              onClick={() => router.push("/all")}
            >
              BROWSE ALL EMBRACE DESIGNS
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction={"column"}
        alignItems={"center"}
        width={"100%"}
        height={200}
        justifyContent={"center"}
      >
        <Flex direction={"column"} alignItems={"center"}>
          <Text fontSize={"21pt"}>Reviews</Text>
          <Flex
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
          >
            <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
            <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
            <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
            <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
            <StarIcon fill={"yellow"} color={"yellow.300"} boxSize={4} />
          </Flex>
          <Text>450 Reviews</Text>
        </Flex>
      </Flex>
      <Button
        backgroundColor={"black"}
        borderRadius={10}
        color={"white"}
        size={"lg"}
        paddingLeft={8}
        paddingRight={8}
        fontSize={"18pt"}
        colorScheme={"transparent"}
        onClick={() => router.push("/bestsellers")}
      >
        Shop all best-sellers
      </Button>
      <BottomNav />
    </Flex>
  );
}

import { Flex, Select, Spinner, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BottomNav from "./bottomnavbar";
import NavBar from "./navbar";
import ShopComp from "./shopcomp";

const BestSeller = () => {
  const router = useRouter();
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
  const [count, setCount] = useState(0);
  const [rows, setRows] = useState([]);
  const [temprows, setTemprows] = useState([]);

  useEffect(() => {
    console.log("Length " + info.length);
    setRows([]);
    info.forEach((element) => {
      console.log("Element " + temprows.length);
      if (temprows.length % 4 == 0 && temprows.length != 0) {
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
  }, [count]);
  return (
    <Flex direction={"column"} alignItems={"center"} width={"100%"}>
      <NavBar />
      <Flex
        direction={"column"}
        alignItems={"flex-start"}
        gap={2}
        width={{ base: "97.5vw", md: "85vw", lg: "70vw" }}
        marginTop={5}
        marginBottom={5}
      >
        <Flex width={"100%"} alignItems={"center"} marginLeft={"6vw"}>
          <Text fontWeight={800} fontSize={"30pt"}>
            Best-Seller
          </Text>
        </Flex>
        <Select width={"40%"} marginLeft={"6vw"}>
          <option selected>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </Select>
        {rows.length < 2 ? (
          <Flex width={"100%"} justifyContent={"center"} alignItems={"center"}>
            <Spinner size={"xl"} />
          </Flex>
        ) : (
          rows
        )}
      </Flex>
      <BottomNav />
    </Flex>
  );
};

export default BestSeller;

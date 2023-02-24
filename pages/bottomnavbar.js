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
} from "@chakra-ui/react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NavBar from "./navbar";

const BottomNav = () => {
  const router = useRouter();
  return (
    <Flex
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      gap={5}
      marginTop={30}
      backgroundImage={"url('/backg.png')"}
      paddingTop={10}
      paddingBottom={10}
      //backgroundSize={"100% 100%"}
    >
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        gap={"8%"}
      >
        <Flex direction={"column"} alignItems={"left"} gap={6}>
          <Flex direction={"column"}>
            <Button colorScheme={"transparent"} width={170}>
              <Image
                src={"/Embrace2.png"}
                alt={"embrace"}
                width={200}
                height={5}
                layout={"responsive"}
              />
            </Button>
            <Text color={"white"}>© 2023, Embrace</Text>
          </Flex>
          <Flex direction={"column"}>
            <Text color={"white"} fontSize={"16pt"}>
              Email:
            </Text>
            <Link
              color={"white"}
              href={
                "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnXFJZNHXkdQTrrtQJZsKcRXjPRxXhznkmxJfQstZDWrBRnxrFPTRVhwtstLHGbJLPzdK"
              }
              target={"_blank"}
            >
              embraceit@gmail.com
            </Link>
          </Flex>
        </Flex>
        <Flex direction={"column"} gap={1}>
          <Text color={"white"} fontWeight={800} fontSize={"21pt"}>
            Support
          </Text>
          <Link color={"white"} onClick={() => router.push("/privacy")}>
            Privacy Policy
          </Link>
          <Link color={"white"} onClick={() => router.push("/terms")}>
            Terms of Service
          </Link>
          <Link
            color={"white"}
            href={
              "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGKnXFJZNHXkdQTrrtQJZsKcRXjPRxXhznkmxJfQstZDWrBRnxrFPTRVhwtstLHGbJLPzdK"
            }
            target={"_blank"}
          >
            Partnerships
          </Link>
        </Flex>
        <Flex direction={"column"} gap={3}>
          <Text color={"white"} fontWeight={800} fontSize={"21pt"}>
            Follow Us
          </Text>
          <Flex direction={"row"} alignItems={"center"} gap={3}>
            <Flex
              backgroundColor={"white"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              as={"a"}
              width={45}
              height={45}
              _hover={{
                opacity: 0.8,
                cursor: "pointer",
              }}
            >
              <img src="/insta.png" alt="instagram" width={"60%"} />
            </Flex>
            <Flex
              backgroundColor={"white"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              as={"a"}
              width={45}
              height={45}
              _hover={{
                opacity: 0.8,
                cursor: "pointer",
              }}
            >
              <img src="/facebook.png" alt="facebook" width={"60%"} />
            </Flex>
          </Flex>
          <Flex direction={"row"} alignItems={"center"}>
            <Flex
              backgroundColor={"white"}
              borderRadius={"50%"}
              alignItems={"center"}
              justifyContent={"center"}
              as={"a"}
              width={45}
              height={45}
              _hover={{
                opacity: 0.8,
                cursor: "pointer",
              }}
            >
              <img src="/tiktok.png" alt="tiktok" width={"60%"} />
            </Flex>
          </Flex>
        </Flex>
        <Flex direction={"column"} maxWidth={300} gap={2}>
          <Text color={"white"} fontWeight={800} fontSize={"16pt"}>
            Stay up to date about new products, comfort tips, and all things
            Embrace.
          </Text>
          <form>
            <Flex
              direction={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              border={"1px solid black"}
              backgroundColor={"white"}
              borderRadius={10}
            >
              <Input
                placeholder={"Email"}
                type={"email"}
                required
                color={"white"}
                border={"none"}
                marginLeft={1}
              />
              <Button type={"submit"} colorScheme={"transparent"}>
                <ArrowRightIcon color={"black"} />
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
      <img src="/payment.png" alt={"Payment"} width={300} />
    </Flex>
  );
};

export default BottomNav;

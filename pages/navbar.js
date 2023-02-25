import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const [display, changeDisplay] = useState("none");

  useEffect(() => {
    function updateScreenSize() {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    }
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
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
        <Flex>
          {screenWidth <= 800 ? (
            <>
              <Button
                onClick={() => changeDisplay("flex")}
                colorScheme={"transparent"}
              >
                <HamburgerIcon color={"black"} />
              </Button>
              <Flex
                w="100vw"
                display={display}
                bgColor="gray.50"
                zIndex={20}
                h="100vh"
                pos="fixed"
                top="0"
                left="0"
                overflowY="auto"
                flexDir="column"
              >
                <Flex justify="flex-end">
                  <IconButton
                    mt={2}
                    mr={2}
                    aria-label="Open Menu"
                    size="lg"
                    icon={<CloseIcon />}
                    onClick={() => changeDisplay("none")}
                  />
                </Flex>

                <Flex flexDir="column" align="center" gap={5}>
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

                  <Button
                    _hover={{
                      textDecoration: "underline",
                    }}
                    fontWeight={500}
                    fontSize={"14pt"}
                    colorScheme={"transparent"}
                    color={"black"}
                    onClick={() => router.push("/bestsellers")}
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
                    onClick={() => router.push("/shirts")}
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
                    onClick={() => router.push("/hoodies")}
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
                    onClick={() => router.push("/sweaters")}
                  >
                    Sweaters
                  </Button>
                </Flex>
              </Flex>
            </>
          ) : null}
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
        </Flex>
        {screenWidth >= 800 ? (
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
              onClick={() => router.push("/bestsellers")}
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
              onClick={() => router.push("/shirts")}
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
              onClick={() => router.push("/hoodies")}
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
              onClick={() => router.push("/sweaters")}
            >
              Sweaters
            </Button>
          </Flex>
        ) : null}
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

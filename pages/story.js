import { Flex, Image, Text } from "@chakra-ui/react";
import BottomNav from "./bottomnavbar";
import NavBar from "./navbar";

const Story = () => {
  return (
    <Flex direction={"column"} alignItems={"center"} width={"100%"}>
      <NavBar />
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        marginTop={10}
        marginBottom={10}
      >
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
        >
          <Flex direction={"column"} padding={10} width={"50%"}>
            <Text
              fontSize={{ base: "20pt", md: "25pt", lg: "30pt" }}
              fontWeight={800}
              fontStyle={"italic"}
            >
              OUR STORY
            </Text>
            <Text fontSize={{ base: "9pt", md: "13pt", lg: "18pt" }}>
              Benjamin Sloutsky founded Embrace as he was going through hard
              times in life. Ben was constantly hit with negative whether it
              would be related to school, family situations, or living
              situations/conditions. He created this brand in order to help
              people embrace the toughest moments in life and to adapt and
              prevail in the best ways possible. Ben wants to spread the message
              of embracing difficult situations wherever he goes to remind to
              people that negative situations are temporary and they will go
              away sooner than later.
            </Text>
          </Flex>
          <Image src="/ben.png" alt={"Benjamin Sloutsky"} width={"50%"} />
        </Flex>
        <Flex
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
        >
          <Image src="/ido.png" alt={"Embrace brand"} width={"50%"} />
          <Flex direction={"column"} padding={10} width={"50%"}>
            <Text
              fontSize={{ base: "20pt", md: "25pt", lg: "30pt" }}
              fontWeight={800}
              fontStyle={"italic"}
            >
              OUR IDEA
            </Text>
            <Text fontSize={{ base: "9pt", md: "13pt", lg: "18pt" }}>
              With Embrace we hope to spread the message to never quit and keep
              fighting as a win will occur in the future. We want people to
              enjoy and embrace obstacles in order to get through them faster.
              With Embrace we also create luxurious designed clothes in order to
              make people feel comfortable while spreading the message of
              "Embrace."
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <BottomNav />
    </Flex>
  );
};

export default Story;

import {
  Flex,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import BottomNav from "./bottomnavbar";
import NavBar from "./navbar";

const Terms = () => {
  return (
    <Flex direction={"column"} alignItems={"center"} width={"100%"}>
      <NavBar />
      <Flex direction={"column"} alignItems={"flex-start"} width={"70%"}>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          Terms and Conditions for Embrace
        </Text>
        <Text>
          Welcome to Embrace, a fashion company that helps people embrace their
          challenges. These terms and conditions ("Terms") govern your access to
          and use of our website and services. By using our website and
          services, you agree to be bound by these Terms. If you do not agree to
          these Terms, you may not use our website or services.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          1.{"\t\t"}Use of Our Website and Services
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          2.{"\t\t"}You may use our website and services only for lawful
          purposes and in accordance with these Terms. You may not use our
          website or services:
        </Text>
        <UnorderedList>
          <ListItem>
            In any way that violates any applicable federal, state, local, or
            international law or regulation
          </ListItem>
          <ListItem>
            To engage in any activity that is harmful, offensive, or
            inappropriate
          </ListItem>
          <ListItem>
            To transmit any viruses, worms, or other harmful code
          </ListItem>
          <ListItem>
            To engage in any activity that interferes with or disrupts our
            website or services
          </ListItem>
        </UnorderedList>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          3.{"\t\t"}Intellectual Property
        </Text>
        <Text>
          Our website and services, including all content, images, designs, and
          trademarks, are protected by copyright, trademark, and other laws. You
          may not copy, distribute, display, or reproduce any part of our
          website or services without our prior written permission.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          4.{"\t\t"}Privacy
        </Text>
        <Text>
          We are committed to protecting your privacy and handling your personal
          information in a safe and responsible manner. Please see our Privacy
          Policy for more information.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          5.{"\t\t"}Product Information and Availability
        </Text>
        <Text>
          We make every effort to provide accurate and up-to-date information
          about our products and services on our website. However, we do not
          guarantee the accuracy, completeness, or timeliness of any information
          on our website. We reserve the right to modify, suspend, or
          discontinue any product or service at any time without notice.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          6.{"\t\t"}
          Payment and Shipping
        </Text>
        <Text>
          We accept various forms of payment for our products and services.
          Prices and availability are subject to change without notice. Shipping
          costs and delivery times may vary depending on the destination and
          shipping method.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          7.{"\t\t"}Returns and Exchanges
        </Text>
        <Text>
          We want you to be completely satisfied with your purchase. If you are
          not satisfied with your purchase, you may return it for a refund or
          exchange within 30 days of the purchase date. Please see our Returns
          and Exchanges Policy for more information.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          8.{"\t\t"}Indemnification
        </Text>
        <Text>
          You agree to indemnify and hold us and our affiliates, officers,
          agents, and employees harmless from any claim or demand, including
          reasonable attorneys' fees, made by any third party due to or arising
          out of your use of our website or services, your violation of these
          Terms, or your violation of any law or the rights of a third party.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          9.{"\t\t"}Disclaimer of Warranties
        </Text>
        <Text>
          Our website and services are provided "as is" and without warranties
          of any kind, whether express or implied. We do not warrant that our
          website or services will meet your needs or be free from errors,
          interruptions, or other defects.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          10.{"\t\t"}Limitation of Liability
        </Text>
        <Text>
          We will not be liable for any direct, indirect, incidental, special,
          or consequential damages arising out of or in connection with your use
          of our website or services, even if we have been advised of the
          possibility of such damages.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          11.{"\t\t"}Governing Law and Jurisdiction
        </Text>
        <Text>
          These Terms and your use of our website and services are governed by
          and construed in accordance with the laws of the state of [insert
          state], without giving effect to any choice or conflict of law
          provision or rule. Any legal suit, action, or proceeding arising out
          of or related to these Terms or your use of our website or services
          shall be instituted exclusively in the federal or state courts located
          in [insert county], [insert state].
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          12.{"\t\t"}Changes to These Terms
        </Text>
        <Text>
          We may update these Terms from time to time to reflect changes in our
          practices or applicable law. The updated
        </Text>
      </Flex>
      <BottomNav />
    </Flex>
  );
};

export default Terms;

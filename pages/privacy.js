import { Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import BottomNav from "./bottomnavbar";
import NavBar from "./navbar";

const Privacy = () => {
  return (
    <Flex direction={"column"} alignItems={"center"} width={"100%"}>
      <NavBar />
      <Flex direction={"column"} alignItems={"flex-start"} width={"70%"}>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={10}>
          Privacy Policy for Embrace
        </Text>
        <Text>
          At Embrace, we are committed to protecting your privacy and ensuring
          that your personal information is handled in a safe and responsible
          manner. This Privacy Policy outlines how we collect, use, and disclose
          your personal information, as well as your rights regarding that
          information.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          What Information We Collect
        </Text>
        <Text>
          When you visit our website or use our services, we may collect the
          following types of personal information:
        </Text>
        <UnorderedList>
          <ListItem>Name</ListItem>
          <ListItem>
            Contact information (e.g., email address, phone number, mailing
            address)
          </ListItem>
          <ListItem>
            Payment information (e.g., credit card number, billing address)
          </ListItem>
          <ListItem>
            Demographic information (e.g., age, gender, interests)
          </ListItem>
          <ListItem>
            Usage data (e.g., pages visited, time spent on site)
          </ListItem>
          <ListItem>
            Other information you choose to provide (e.g., feedback, survey
            responses)
          </ListItem>
        </UnorderedList>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          How We Collect Information
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          We may collect personal information in a variety of ways, including:
        </Text>
        <Text>
          Directly from you when you provide it to us (e.g., when you make a
          purchase, sign up for our newsletter, or contact customer support)
          Automatically through the use of cookies and other tracking
          technologies when you visit our website or use our services From
          third-party sources, such as social media platforms or other publicly
          available sources How We Use Information
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          We may use your personal information for the following purposes:
        </Text>
        <UnorderedList>
          <ListItem>To process your orders and payments</ListItem>
          <ListItem>
            To communicate with you about your orders, products, and services
          </ListItem>
          <ListItem>
            To personalize your experience and provide you with tailored content
            and offers
          </ListItem>
          <ListItem>To improve our products, services, and website</ListItem>
          <ListItem>
            To detect and prevent fraud and other illegal activities
          </ListItem>
          <ListItem>To comply with legal and regulatory requirements</ListItem>
          <ListItem>How We Share Information</ListItem>
        </UnorderedList>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          We may share your personal information with the following types of
          third parties:
        </Text>
        <UnorderedList>
          <ListItem>
            Service providers who assist us in operating our business (e.g.,
            payment processors, shipping providers, marketing agencies)
          </ListItem>
          <ListItem>
            Business partners who offer products or services that may be of
            interest to you (e.g., apparel brands, fashion bloggers)
          </ListItem>
          <ListItem>
            Government authorities or other third parties as required by law
          </ListItem>
        </UnorderedList>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          Your Rights
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          You have the following rights regarding your personal information:
        </Text>
        <UnorderedList>
          <ListItem>
            Right to access: You have the right to access the personal
            information we hold about you and to receive a copy of that
            information.
          </ListItem>
          <ListItem>
            Right to rectification: You have the right to request that we
            correct any inaccurate or incomplete personal information we hold
            about you.
          </ListItem>
          <ListItem>
            Right to erasure: You have the right to request that we delete your
            personal information in certain circumstances, such as when the
            information is no longer necessary for the purposes for which it was
            collected.
          </ListItem>
          <ListItem>
            Right to restrict processing: You have the right to request that we
            restrict the processing of your personal information in certain
            circumstances, such as when you contest the accuracy of the
            information we hold about you.
          </ListItem>
          <ListItem>
            Right to object: You have the right to object to the processing of
            your personal information in certain circumstances, such as when the
            processing is based on our legitimate interests.
          </ListItem>
        </UnorderedList>
        To exercise any of these rights, please contact us using the information
        below.
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          Data Retention
        </Text>
        <Text>
          We will retain your personal information for as long as necessary to
          fulfill the purposes for which it was collected, unless a longer
          retention period is required by law.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          Security
        </Text>
        <Text>
          We take reasonable measures to protect your personal information from
          unauthorized access, use, or disclosure. However, no method of
          transmission over the internet or method of electronic storage is
          completely secure, and we cannot guarantee absolute security.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          Changes to This Privacy Policy
        </Text>
        <Text>
          We may update this Privacy Policy from time to time to reflect changes
          in our practices or applicable law. The updated policy will be posted
          on our website with a new effective date.
        </Text>
        <Text fontWeight={700} fontSize={"15pt"} marginTop={5}>
          Contact Us
        </Text>
        <Text>
          If you have any questions or concerns about this Privacy Policy or our
          handling of your personal
        </Text>
      </Flex>
      <BottomNav />
    </Flex>
  );
};

export default Privacy;

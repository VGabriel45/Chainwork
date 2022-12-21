import {
  Avatar,
  Card,
  CardHeader,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  CardBody,
  Image,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ProfileCard = () => {
  return (
    <Card maxW="md">
      <CardHeader>
        <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            // icon={<BsThreeDotsVertical />}
          />
        </Flex>
      </CardHeader>
    </Card>
  );
};

export default ProfileCard;

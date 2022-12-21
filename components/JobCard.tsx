import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  StackDivider,
  Stack,
  Text,
  Badge,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { JobCardProps } from "../interfaces/propTypes/JobCardProps";

const JobCard = ({ id, title, description, payment, skills }: JobCardProps) => {
  return (
    <Link href={`jobs/${id}`}>
      <Card
        bg={"gray.500"}
        m={"2em"}
        cursor="pointer"
        _hover={{ bg: "gray.600" }}
      >
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Description
              </Heading>
              <Text pt="2" fontSize="sm">
                {description}
              </Text>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Tech stack
              </Heading>
              <Stack direction="row" mt={"0.3em"}>
                {skills.map((skill) => (
                  <Badge key={skills.indexOf(skill)} colorScheme="green">
                    Solidity
                  </Badge>
                ))}
              </Stack>
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Payment
              </Heading>
              <Text pt="2" fontSize="sm">
                ${payment.min} - ${payment.max}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default JobCard;

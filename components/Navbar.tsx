import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Center,
} from "@chakra-ui/react";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  return (
    <Box mt={"2rem"} fontSize={"lg"}>
      <Center>
        <Breadcrumb spacing="8px" separator={<IoIosArrowForward />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Jobs</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/profile">Profile</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Center>
    </Box>
  );
};

export default Navbar;

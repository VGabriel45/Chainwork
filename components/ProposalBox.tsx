import { Box, Center, Heading, Text, Textarea } from "@chakra-ui/react";
import React, { useState } from "react";

const ProposalBox = ({}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Box
      borderRadius={"5px"}
      bg={"gray.500"}
      m={"2em"}
      height={"fit-content"}
      width={"96vw"}
      pb={"1rem"}
    >
      <Center>
        <Heading>
          <Text>Submit a proposal</Text>
        </Heading>
      </Center>
      <Center>
        <Box w={"50vw"}>
          <Text mb="8px">Cover letter</Text>
          <Textarea
            value={""}
            // onChange={handleInputChange}
            placeholder="Here is a sample placeholder"
            size="sm"
          />
        </Box>
      </Center>
      <Center mt={"1rem"}>
        <Box w={"50vw"}>
          <Text mb="8px">Attach resume</Text>
          <input type="file" onChange={handleFileChange} />
        </Box>
      </Center>
    </Box>
  );
};

export default ProposalBox;

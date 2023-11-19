import { Grid, GridItem } from "@chakra-ui/react";

export default function Sticker() {
  return (
    <Grid w={"45px"} templateColumns={"repeat(3,1fr)"} gap={"15px"}>
      <GridItem
        w="15px"
        h={"39px"}
        border="1px solid red"
        bg={"red"}
      ></GridItem>
      <GridItem
         w="15px"
         h={"39px"}
        border="1px solid red"
        bg={"red"}
      ></GridItem>
      <GridItem
       w="15px"
       h={"39px"}
        border="1px solid red"
        bg={"red"}
      ></GridItem>
    </Grid>
  );
}

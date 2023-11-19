import React from "react";
import CartButton from "../addtocart/CartButton";
import { chicken } from "./menu-data/ChickenData";
import { Box, Spacer, Grid, GridItem, Img, Heading } from "@chakra-ui/react";

export default function Chicken() {
  return (
    <>
      <Box h={"10px"} id="chicken"></Box>
      <Box bgColor={"#F8F7F5"} borderRadius={"5px"}>
        <Box>
          <Spacer h={"120px"} />
          <Heading
            fontSize={"32px"}
            lineHeight={"50px"}
            // border={"1px solid red"}
            ml={"20px"}
            mt="20px"
            letterSpacing={"-2px"}
          >
            CHICKEN BUCKETS
          </Heading>
        </Box>
        <Spacer h={"30px"} />

        {/* {loading && <Loading/>} */}
        <Grid
          templateColumns={{ lg: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }}
          rowGap="30px"
          columnGap={"5px"}
          // columnGap={{ base: "-50px", sm: "-20px", md: "-20px", lg: "-5px" }}
          w={{ lg: "100%", md: "75%", sm: "50%" }}
          mt={"20px"}
        >
          {chicken.map((ele) => (
            <GridItem ml="20px" key={ele.id} maxWidth={"380px"}>
              <Img
                src={ele.image}
                alt="image_launch"
                w={"auto"}
                h={"285px"}
                borderRadius={"5px"}
              />
              <Heading fontSize={"16px"} m={"10px 0px 10px 0px"}>
                {ele.name}
              </Heading>
              <Heading fontSize={"16px"} m={"10px 0px 10px 0px"}>
                {ele.price}
              </Heading>
              <p style={{ width: "auto" }}>{ele.detail}</p>
              <Box m={"30px 0px 30px 0px"}>
                <CartButton ele={ele} />
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
}

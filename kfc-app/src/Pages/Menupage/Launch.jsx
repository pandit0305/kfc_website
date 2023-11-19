import React from "react";
import CartButton from "../addtocart/CartButton";
import { launch } from "./menu-data/LaunchData";
import {
  Box,
  Spacer,
  Grid,
  GridItem,
  Img,
  Heading,
  Center,
} from "@chakra-ui/react";

export default function Launch() {
  return (
    <>
      <Box h={"20px"} id="launch"></Box>

      <Box mt={"10px"} borderRadius={"5px"}>
        <Spacer h={"100px"} />
        <Box>
          <Heading
            fontSize={"32px"}
            lineHeight={"50px"}
            // border={"1px solid red"}
            ml={"20px"}
            letterSpacing={"-2px"}
          >
            NEW LAUNCH
          </Heading>
        </Box>

        {/* {loading && <Loading />} */}

        <Grid
          templateColumns={{
            lg: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          rowGap="50px"
          mt={"20px"}
        >
      {launch.map((ele) => (
            <GridItem
              ml="20px"
              w={"260px"}
              h={"475px"}
              // border={"1px solid red"}
              borderRadius={"10px"}
              boxShadow={"lg"}
              key={ele.id}
              position="relative"
            >
              <Img
                src={ele.image}
                alt="image_launch"
                w={"auto"}
                h={"210px"}
                borderRadius={"5px"}
              />
              <Heading
                fontSize={"16px"}
                m={"10px 0px 10px 0px"}
                w={"200px"}
                pl={"5px"}
                ml={"15px"}
              >
                {ele.name}
              </Heading>
              <Heading
                fontSize={"16px"}
                m={"10px 0px 10px 0px"}
                pl={"5px"}
                ml={"15px"}
              >
                {ele.price}
              </Heading>
              <p style={{ width: "220px", marginLeft: "15px" }}>{ele.detail}</p>
              <Box position="absolute" bottom={"25px"} left="30px">
                <Center>
                  <CartButton ele={ele} />
                </Center>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
}

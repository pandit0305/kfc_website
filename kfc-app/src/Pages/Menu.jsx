import React from "react";

import { Box, Center, Input, Heading } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import Chicken from "./Menupage/Chicken";
import Launch from "./Menupage/Launch";
import Biryani from "./Menupage/Biryani";
import BoxMeal from "./Menupage/BoxMeal";
import Burger from "./Menupage/Burger";
import Stayhome from "./Menupage/Stayhome";
import Snacks from "./Menupage/Snacks";
import Beverage from "./Menupage/Beverage";

import { MenuSideBar } from "./Menupage/MenuSideBar";
import { useMediaQuery } from "@chakra-ui/react";
// import MobileMenu from "./MobileMenu";

export default function Menu() {
  const [isMatch] = useMediaQuery("(max-width: 768px)");

  const [Match] = useMediaQuery("(max-width: 768px)");

  const menu = (
    <>
      {/* <Navbar /> */}
      <Box display={"flex"} width="90%" m="auto" mt={"150px"}>
        <Box w="20%" m="auto" mt="50px" display={Match ? "none" : "block"}>
          <MenuSideBar />
        </Box>

        <Box>
          <Box display={isMatch ? "none" : "block"}>
            <Box m={"6px"}>
              <Box position={"relative"}>
                <SearchIcon position={"absolute"} left={"10px"} top={"10px"} />
                <Input
                  type="text"
                  pl={"35px"}
                  placeholder={"Search our menu"}
                  w={"201px"}
                  h={"35px"}
                  borderRadius={"30px"}
                />
              </Box>
            </Box>

            <Box>
              <Heading m={"10px 0px 10px 0px"}>
                <Box border={"1px solid black"}></Box>
              </Heading>
            </Box>
          </Box>
          <Center>
            <Box>
              <Chicken />
              <Launch />
              <Biryani />
              <BoxMeal />
              <Burger />
              <Stayhome />
              <Snacks />
              <Beverage />
            </Box>
          </Center>
        </Box>
      </Box>
    </>
  );

  return <>{menu}</>;
}

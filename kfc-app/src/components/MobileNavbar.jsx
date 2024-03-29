import React from "react";
import { NavLink } from "react-router-dom";
import { Flex, Box, Grid, GridItem, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { AuthContext } from "../context/authcontext/AuthContext";
import MyAccount from "./MyAccount";
import kfc from './kfc.jpg';

import { Img, Text } from "@chakra-ui/react";

const order = "Start Order";
const login = (
  <Box mt="5px">
    <NavLink to="/login">
      <Icon icon="teenyicons:user-circle-solid" fontSize={"30px"} />
    </NavLink>
  </Box>
);
const cart = <Icon icon="mingcute:shopping-bag-2-line" fontSize={"30px"} />;

export const temp = (
  <Grid w={"45px"} templateColumns={"repeat(3,1fr)"}>
    <GridItem w="8px" h={"18px"} border="1px solid red" bg={"red"}></GridItem>
    <GridItem w="8px" h={"18px"} border="1px solid red" bg={"red"}></GridItem>
    <GridItem w="8px" h={"18px"} border="1px solid red" bg={"red"}></GridItem>
  </Grid>
);

export default function MobileNavbar() {
  const { user } = React.useContext(AuthContext);

  const navbar = (
    <Box
      position={"fixed"}
      w="100%"
      zIndex={"1000"}
      bgColor={"white"}
      top={"0px"}
      left="0px"
      right={"0px"}
      // border={"1px solid red"}
      boxShadow="red 0px -50px 36px -28px inset"

    >
      <Box display={"flex"}>  
        {temp}
        <Flex gap={"10px"} mt="30px" flexWrap={"wrap"} id="nav-item">
          <NavLink to={"/"}>
            <Img
              src={kfc}
              alt="logo_kfc"
              w={"150px"}
              h={"40px"}
              mt={"-5px"}
              borderRadius={"10px"}
              id="logo"
            />
          </NavLink>
          <NavLink to={"/menu"}>
            <Text
              fontSize={"17px"}
              fontWeight={"bold"}
              marginLeft={"30px"}
              color={"red"}
            >
              Menu
            </Text>
          </NavLink>
        </Flex>
      </Box>
      <Box>
        <Flex mt={"20px"} gap="20px" ml={"20px"} mb={"15px"}>
          <NavLink to={"/start_order"}>
            <Button
              w={"165px"}
              h="44px"
              borderRadius={"30px"}
              bgColor="red"
              color={"white"}
              fontWeight="bold"
              _hover={"red.200"}
            >
              {order}
            </Button>
          </NavLink>
          <Box>{!user ? login : <MyAccount />}</Box>

          <NavLink to={"/cart"}>
            <Button _hover={"none"} bg={"white"}>
              {cart}
            </Button>
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );

  return <>{navbar}</>;
}

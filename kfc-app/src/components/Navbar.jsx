import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { Flex, Box, Grid, GridItem, Button, Center } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { AuthContext } from "../context/authcontext/AuthContext";
import MyAccount from "./MyAccount";
// import { useMediaQuery } from "@chakra-ui/react";
import kfc from "./kfc.jpg";

import { Img, Text, useDisclosure } from "@chakra-ui/react";

const links = [
  { path: "/career", title: "Careers" },
  { path: "/about", title: "About" },
];

const find = "Find A KFC";
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

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = React.useContext(AuthContext);

  // const isMatch = useMediaQuery("(min-width: 768px)");

  // console.log(isMatch);

  const navbar = (
    <Box
      position={"fixed"}
      w="100%"
      zIndex={"1000"}
      bgColor={"white"}
      height="auto"
      id="navbar"
      top={"0"}
      boxShadow="red 0px -50px 36px -28px inset"
    >
      <Box
        display={{ base: "flex", lg: "flex" }}
        justifyContent={"space-between"}
        // position={"relative"}
        ml={{ md: "20px", lg: "auto" }}
        w="90%"
        h={"auto"}
        m={"auto"}
        mb="15px"
        id="navlink-nav"
      >
        <Box>
          {temp}
          <Box
            display="flex"
            maxWidth={"700px"}
            gap={"10px"}
            mt="30px"
            flexWrap={"wrap"}
            id="nav-item"
          >
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
                fontSize={{ base: "16px" }}
                fontWeight={"bold"}
                id="menufont"
                color={"red"}
                marginLeft={"30px"}
              >
                Menu
              </Text>
            </NavLink>

            {links.map((ele) => (
              <NavLink
                id="nav-map"
                key={ele.path}
                to={ele.path}
                style={{ fontWeight: "bold", fontSize: "16px" }}
              >
                {ele.title}
              </NavLink>
            ))}
            {/* <NavLink
              id="nav-map"
              to={"/find_kfc"}
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              {find}
              <ExternalLinkIcon fontSize={"13px"} mb="3px" ml="3px" />
            </NavLink> */}
          </Box>
        </Box>
        <Box>
          <Flex w="380px" mt={"40px"} gap="30px">
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
    </Box>
  );

  return <>{navbar}</>;
}

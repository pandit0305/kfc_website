import React from "react";
import { CartContext } from "../context/cartcontext/CartContext";
import AddButton from "./addtocart/AddButton";
import Navbar from "../components/Navbar";
import MobileNavbar from "../components/MobileNavbar";
import Sticker from "../components/Home_section/Sticker";
import { useMediaQuery } from "@chakra-ui/react";

import { removeFromCart, removeAll } from "../context/cartcontext/action";
import { useNavigate, NavLink } from "react-router-dom";
import {
  Box,
  Img,
  Spacer,
  Flex,
  Grid,
  GridItem,
  Heading,
  Button,
  Text,
  Table,
  Tr,
  Td,
  Center,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import Footer from "../components/Home_section/Footer";
import { useState } from "react";

export default function MobileCart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const { state, dispatch } = React.useContext(CartContext);
  const [value, setValue] = useState(false);
  const navigate = useNavigate();
  const [isMatch] = useMediaQuery("(max-width: 600px)");

  const RemoveAllItem = () => {
    dispatch(removeAll());
    onClose();
  };

  const checkboxHandler = (e) => {
    setValue(e.target.checked);
  };

  const total = state
    .map((ele) => {
      return ele.price * ele.quantity;
    })
    .reduce((acc, i) => {
      return acc + i;
    }, 0);

  const subtotal = total.toFixed(2);
  const gst = ((total * 5) / 100).toFixed(2);
  const checkout = (Number(subtotal) + Number(gst) + 35).toFixed(2);

  const sum = state
    .map((ele) => {
      return ele.quantity;
    })
    .reduce((acc, i) => {
      return acc + i;
    }, 0);

  const Checkoutevent = () => {
    navigate("/cart/checkout");
  };
  return (
    <>
      <Box mt={"170px"}>
        <Box maxWidth={"1102.12px"} m={"auto"} h={"auto"}
        
        >
          <Sticker />
          <Heading marginLeft={"10px"}>MY CART</Heading>
          <Grid
            templateColumns={"repeat(1, 1fr)"}
            mt={"50px"}
            gap={"20px"}
            m={"auto"}
          >
            <GridItem
              maxWidth={"500px"}
              borderRadius={"5px"}
              //   border={"1px solid red"}
            >
              {state.map((ele) => (
                <Center>
                  <Box
                    bgColor={"#F8F7F5"}
                    mb="20px"
                    //   border={"1px solid red"}
                    mt="10p"
                    h={"auto"}
                    borderRadius={"10px"}
                    maxWidth={"300px"}
                  >
                    <Img
                      src={ele.image}
                      w={"auto"}
                      height={"300px"}
                      borderRadius={"10px"}
                    />

                    <Text
                      fontWeight={"bold"}
                      fontSize={"16px"}
                      color={"grey"}
                      ml={"15px"}
                    >
                      {ele.name}
                    </Text>
                    <Text
                      fontSize={"12px"}
                      w={"auto"}
                      mt={"10px"}
                      ml={"15px"}
                      // border={"1px solid red"}
                    >
                      {ele.detail}
                    </Text>
                    <Flex
                      // border={"1px solid red"}
                      justifyContent={"space-around"}
                      alignItems={"center"}
                      w={"200px"}
                      mr={"20px"}
                      mt={"30px"}
                    >
                      <AddButton id={ele.id} quantity={ele.quantity} />
                      <Box>
                        <Heading fontSize={"16px"} color={"grey"}>
                          {(ele.price * ele.quantity).toFixed(2)}
                        </Heading>
                      </Box>
                    </Flex>
                    <Text
                      mt={"50px"}
                      mb={"15px"}
                      fontSize={"13px"}
                      fontWeight={"bold"}
                      cursor={"pointer"}
                      w={"60px"}
                      ml={"15px"}
                      onClick={() => dispatch(removeFromCart(ele.id))}
                    >
                      <u>Remove</u>
                    </Text>

                    {/* calculator */}
                  </Box>
                </Center>
              ))}
              <Flex justifyContent={"space-between"}>
                <Text
                  mt={"50px"}
                  mb={"10px"}
                  fontSize={"16px"}
                  fontWeight={"bold"}
                  cursor={"pointer"}
                  w={"90px"}
                  ml="10px"
                  onClick={onOpen}
                >
                  <u>Remove All</u>
                </Text>
                <AlertDialog
                  motionPreset="slideInBottom"
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                  isOpen={isOpen}
                  isCentered
                >
                  <AlertDialogOverlay />

                  <AlertDialogContent maxW={"550px"} h={"250px"}>
                    {/* <AlertDialogHeader>Discard Changes?</AlertDialogHeader> */}
                    <AlertDialogCloseButton />
                    <AlertDialogBody mt={"50px"} textAlign={"center"}>
                      <Heading
                        fontSize={"16px"}
                        fontWeight={"bold"}
                        letterSpacing={"-1px"}
                      >
                        ARE YOU SURE TO REMOVE ALL OF ITEMS IN YOUR CART?
                      </Heading>
                      <Box mt={"50px"}>
                        <Button
                          ref={cancelRef}
                          onClick={onClose}
                          borderRadius={"30px"}
                          border={"1px solid black"}
                          fontSize={"14px"}
                          pl={"40px"}
                          pr={"40px"}
                          _hover={{ bgColor: "black", color: "white" }}
                        >
                          Cancel
                        </Button>
                        <Button
                          ml={"10px"}
                          borderRadius={"30px"}
                          border={"1px solid black"}
                          fontSize={"14px"}
                          pl={"40px"}
                          pr={"40px"}
                          bgColor={"black"}
                          color="white"
                          _hover={{ bgColor: "rgba(0,0,0,0.8)" }}
                          onClick={RemoveAllItem}
                        >
                          Remove All
                        </Button>
                      </Box>
                    </AlertDialogBody>
                  </AlertDialogContent>
                </AlertDialog>
                <NavLink to={"/menu"}>
                  <Button
                    borderRadius={"30px"}
                    border={"1px solid black"}
                    fontSize={"14px"}
                    pl={"40px"}
                    pr={"40px"}
                    mr="10px"
                    _hover={{ bgColor: "black", color: "white" }}
                  >
                    Add More Menu
                  </Button>
                </NavLink>
              </Flex>
            </GridItem>
            <GridItem
              w={"360px"}
              h={"520px"}
              boxShadow={"2xl"}
              borderRadius={"10px"}
            >
              <Box w={"300px"} m={"auto"}>
                <Flex
                  mt={"30px"}
                  justifyContent={"space-between"}
                  width={"80px"}
                >
                  <Heading fontSize={"24px"}>{sum}</Heading>
                  <Heading letterSpacing={"-3px"} fontSize={"24px"} ml={"10px"}>
                    ITEMS
                  </Heading>
                </Flex>
                <Spacer h={"10px"} />
                <Box>
                  <Flex
                    bgColor={"#F8F7F5"}
                    // border={"1px solid red"}
                    p={"10px 0px 10px 0px"}
                    justifyContent={"space-evenly"}
                  >
                    <Img
                      src={
                        "https://online.kfc.co.in/static/media/Offers_Coupon_Icon.72b94c41.svg"
                      }
                    />
                    <Text
                      color={"red"}
                      fontWeight={"bold"}
                      fontSize={"14px"}
                      mt="8px"
                    >
                      Apply Offers & Deals
                    </Text>
                    <Button
                      w={"60px"}
                      fontSize={"12px"}
                      fontWeight={"bold"}
                      borderRadius={"30px"}
                      border={"1px solid black"}
                    >
                      view All
                    </Button>
                  </Flex>
                </Box>
                <Table
                  fontSize={"14px"}
                  cellPadding={"0"}
                  cellSpacing={"0"}
                  border={"0"}
                >
                  <Tr>
                    <Td>Subtotal</Td>
                    <Td>₹{subtotal}</Td>
                  </Tr>
                  <Tr>
                    <Td>GST</Td>
                    <Td>₹{gst}</Td>
                  </Tr>
                  <Tr>
                    <Td>Restaurant Handling (Incl. Taxes)</Td>
                    <Td>₹35.00</Td>
                  </Tr>
                </Table>
                <hr />
                <Box mt={"10px"} boxShadow={"md"} h={"100px"}>
                  <Flex m={"10px"}>
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={checkboxHandler}
                    />
                    <Box w={"180px"} ml={"10px"}>
                      <Text fontSize={"14px"}>
                        Donate ₹5.00 Tick to Add Hope.
                      </Text>
                      <Text fontSize={"12px"}>
                        Our goal is to feed 20 million people by 2022.
                      </Text>
                    </Box>
                    <Img
                      w={"53px"}
                      h={"36px"}
                      src="data:image/png;base64,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"
                    />
                  </Flex>
                </Box>
                <Box
                  w={"300px"}
                  bgColor={"red"}
                  h="44px"
                  borderRadius={"30px"}
                  mt={"20px"}
                  cursor={"pointer"}
                  _hover={{ bgColor: "rgba(255,0,0,0.9)" }}
                  onClick={Checkoutevent}
                >
                  <Flex
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    w={"250px"}
                    pt={"10px"}
                    m={"auto"}
                    color={"white"}
                  >
                    <Text>Checkout</Text>
                    <Box>
                      ₹{!value ? checkout : (Number(checkout) + 5).toFixed(2)}
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </GridItem>
          </Grid>
        </Box>
        <Spacer h={"50px"} />
        <Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

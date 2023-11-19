import { HashLink } from "react-router-hash-link";
import { Box, Text,Heading,useMediaQuery } from "@chakra-ui/react";

export const MenuSideBar = () => {
  const [isMatch] = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <Box position={"fixed"} id="menu-box">
        <Box>
        <Heading
              style={{ fontStretch: "condensed" }}
              fontSize={"35px"}
              
              display={isMatch ? "none" : "block"}
            >
              KFC
            </Heading>{" "}
        </Box>
        <Box
          w={{md:"220px", lg:"250px"}}
          h={"649px"}
        id="menu-item"
        >
            <Text
              fontSize={"16px"}
              letterSpacing={"-0.2px"}
              lineHeight={"24px"}
              fontWeight={"bold"}
              m={"20px 0px 20px 0px"}
              cursor={"pointer"}
            >
              <HashLink smooth to="/menu/#chicken">
                CHICKEN BUCKETS
              </HashLink>
            </Text>
            <Text
              fontSize={"16px"}
              letterSpacing={"-0.2px"}
              lineHeight={"24px"}
              fontWeight={"bold"}
              m={"20px 0px 20px 0px"}
              cursor={"pointer"}
            >
              <HashLink smooth to="/menu/#launch">
                NEW LAUNCH
              </HashLink>
            </Text>
            <Text
              fontSize={"16px"}
              letterSpacing={"-0.2px"}
              lineHeight={"24px"}
              fontWeight={"bold"}
              m={"20px 0px 20px 0px"}
              cursor={"pointer"}
            >
              <HashLink smooth to="/menu/#biryani">
                BIRYANI BUCKETS
              </HashLink>
            </Text>
            <Text
              fontSize={"16px"}
              letterSpacing={"-0.2px"}
              lineHeight={"24px"}
              fontWeight={"bold"}
              m={"20px 0px 20px 0px"}
              cursor={"pointer"}
            >
              <HashLink smooth to="/menu/#meal">
                BOX MEALS
              </HashLink>
            </Text>
            <Text
              fontSize={"16px"}
              letterSpacing={"-0.2px"}
              lineHeight={"24px"}
              fontWeight={"bold"}
              m={"20px 0px 20px 0px"}
              cursor={"pointer"}
            >
              <HashLink smooth to="/menu/#burger">
                BURGERS
              </HashLink>
            </Text>
            <Text
              fontSize={"16px"}
              letterSpacing={"-0.2px"}
              lineHeight={"24px"}
              fontWeight={"bold"}
              m={"20px 0px 20px 0px"}
              cursor={"pointer"}
            >
              <HashLink smooth to="/menu/#homemeal">
                STAY HOME SPECIALS
              </HashLink>
            </Text>
            <Text
              fontSize={"16px"}
              letterSpacing={"-0.2px"}
              lineHeight={"24px"}
              fontWeight={"bold"}
              m={"20px 0px 20px 0px"}
              cursor={"pointer"}
            >
              <HashLink smooth to="/menu/#snack">
                SNACKS
              </HashLink>
            </Text>
            <Text
              fontSize={"16px"}
              letterSpacing={"-0.2px"}
              lineHeight={"24px"}
              fontWeight={"bold"}
              m={"10px 0px 10px 0px"}
              cursor={"pointer"}
            >
              <HashLink smooth to="/menu/#beverage">
                BEVERAGES
              </HashLink>
            </Text>
        </Box>
      </Box>
    </>
  );
};

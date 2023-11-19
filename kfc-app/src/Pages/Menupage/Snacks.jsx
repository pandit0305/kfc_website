import React from "react";
import CartButton from "../addtocart/CartButton";
import { snack } from "./menu-data/SnacksData";
import {
  Box,
  Spacer,
  Grid,
  GridItem,
  Img,
  Heading,
  Center,
} from "@chakra-ui/react";

// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import Loading from "../../loading/Loading";

export default function Snacks() {
  // const [loading, setLoading] = useState(false)

  // const [snack, setSnack] = useState([]);
  // useEffect(() => {
  //   setLoading(true)
  //   axios({
  //     url: "https://my-app-server.onrender.com/snack",
  //     method: "GET",
  //   }).then((res) => {
  //     setLoading(false)
  //     setSnack(res.data)
  //   })
  //   .catch((err)=>{
  //     setLoading(false)
  //     console.log(err)
  //   })
  //   ;
  // }, []);

  return (
    <>
      <Box id="snack" h={"20px"}></Box>

      <Box mt={"10px"} borderRadius={"5px"}>
        <Spacer h={"100px"} />
        <Box>
          <Heading
            fontSize={"32px"}
            lineHeight={"50px"}
            // border={"1px solid red"}
            letterSpacing={"-2px"}
            ml={"20px"}
          >
            SNACKS
          </Heading>
        </Box>

        {/* {loading && <Loading/>} */}
        <Grid
          templateColumns={{
            lg: "repeat(3, 1fr)",
            md: "repeat(2, 1fr)",
            sm: "repeat(1, 1fr)",
          }}
          // columnGap={{ base: "-50px", sm: "-20px", md: "-20px", lg: "-5px" }}

          rowGap="50px"
          width={{ lg: "100%", md: "75%", sm: "30%" }}
          // border="1px solid red"
          mt={"20px"}
        >
          {snack.map((ele) => (
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
                pl={"10px"}
                ml={"15px"}
              >
                {ele.name}
              </Heading>
              <Heading
                fontSize={"16px"}
                m={"10px 0px 10px 0px"}
                pl={"10px"}
                ml={"15px"}
              >
                {ele.price}
              </Heading>
              <p style={{ width: "210px", marginLeft: "20px" }}>{ele.detail}</p>
              <Box
                m={"30px 0px 30px 0px"}
                position="absolute"
                bottom={"5px"}
                left="30px"
              >
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

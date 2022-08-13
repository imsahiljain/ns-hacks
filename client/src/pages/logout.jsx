import React from "react";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Box } from "@chakra-ui/react";
import Axios from 'axios';


function LogoutPage() {
  let navigate = useNavigate();
  useEffect(() => {
    Axios.get("http://localhost:5000/api/logout/logoutuser").then((response => {
      navigate(response.data);}))
  },[]);
  return (
    <>
     <Box
      minH="100vh"
      bgImage="url(/bg.svg)"
      bgPosition="center"
      bgSize="cover"
      w="full"
      overflowX="hidden"
    >
    </Box>
    </>
  );
}

export default LogoutPage;
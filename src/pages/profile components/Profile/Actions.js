import { Box, Button, Grid, Text, VStack } from '@chakra-ui/react'
import { API, Storage } from 'aws-amplify';
import * as queries from "../../../graphql/queries"
import * as mutations from "../../../graphql/mutations";
import * as React from "react";



function Actions() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
      
    <Box mt={5} py={5} px={8} borderTopWidth={1} borderColor="brand.light">
      <Button onClick={refreshPage}>Update</Button>

    </Box>
  )
}

export default Actions
import { Box, Text, VStack } from '@chakra-ui/react'
import { API, Storage } from 'aws-amplify';
import * as queries from "../../../graphql/queries"
import * as mutations from "../../../graphql/mutations";
import * as React from "react";



function Data() {
  const [rating, setUser] = React.useState([]);
  const [list,setList] =  React.useState([]);
  const who = '97a64680-5c6f-4844-b7be-8a36f5450e9c';

  if (rating.length==0){
    fetchRatings()
    
  }
  /*else if (user.length==1){
    console.log("user")
    console.log(user.FirstName)
    return
  }*/
  React.useEffect(() => {
    if (rating.length > 0){
      //console.log(user)
      //console.log(user[0].usersID)
      defineData()
    }
  },[rating]);

  

  async function fetchRatings() {

    const variables = {
      filter: {
        usersID: {eq: who}
      }
    }
    
    const apiData = await API.graphql({ query: queries.listRatings, variables: variables});
    const ratingsFromAPI = apiData.data.listRatings.items;
    await Promise.all (
      ratingsFromAPI.map(async (users) => {
        return rating;
      })
    );
    
    setUser(ratingsFromAPI);
  }

  function defineData(){
     setList([
      {
        id: 1,
        name: 'Ratings Given',
        value: rating.length,
        color: 'yellow',
      },
      
    ])
  }



  return (
    <VStack as="ul" spacing={0} listStyleType="none">
      
      {list.map(item => (
        <Box
          key={item.id}
          as="li"
          w="full"
          py={3}
          px={5}
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          borderBottomWidth={1}
          borderColor="brand.light"
        >
          <Text color="brand.dark">{item.name}</Text>
          <Text color={`brand.${item.color}`} fontWeight="bold">
            {item.value}
          </Text>
        </Box>
      ))}
    </VStack>
  )
}

export default Data
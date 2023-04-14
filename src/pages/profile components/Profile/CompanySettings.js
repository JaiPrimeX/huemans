import * as React from 'react'
import {
  Card,
  Stack,
  FormControl,
  FormLabel,
  Grid,
  Input,
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'
import { API, Storage } from 'aws-amplify';
import * as queries from "../../../graphql/queries"
import * as mutations from "../../../graphql/mutations";

function CompanySettings() {
  const [business, setBusiness] = React.useState([]);
  const [list,setList] =  React.useState([]);
  const ownID = '97a64680-5c6f-4844-b7be-8a36f5450e9c';

  if (business.length==0){
    fetchBusinesses()
    
  }
  /*else if (user.length==1){
    console.log("user")
    console.log(user.FirstName)
    return
  }*/
  React.useEffect(() => {
    if (business.length > 0){
      //console.log(user)
      //console.log(user[0].usersID)
      defineData()
    }
  },[business]);

  async function fetchBusinesses() {

    const variables = {
      filter: {
        usersID: {eq: ownID}
      }
    }
    
    const apiData = await API.graphql({ query: queries.listBusinesses, variables: variables});
    const businessesFromAPI = apiData.data.listBusinesses.items;
    await Promise.all (
      businessesFromAPI.map(async (businesses) => {
        return businesses;
      })
    );
    setBusiness(businessesFromAPI);
  }

  function defineData(){
    setList([
     {
       id: 1,
       name: business[0].Name,
       value: business[0].length,
       site: business[0].Web,
       category: business[0].Category,
       hours: business[0].Hours,
       street: business[0].Address.Street,
       city: business[0].Address.City,
       state: business[0].Address.State,
       code: business[0].Address.PostalCode
     }
     
   ])
 }

  return (
    
    <Stack>
      {list.map(item => (
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}>
      <FormControl id="companyId">
        <FormLabel>Name</FormLabel>
        <InputGroup>
          
          <Input
            focusBorderColor="brand.blue"
            type="text"
            placeholder={item.name}
          />
        </InputGroup>
      </FormControl>
      <FormControl id="companyName">
        <FormLabel>Address</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder={item.street} />
      </FormControl>
      <FormControl id="emailCompany">
        <FormLabel>Hours</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={item.hours}
        />
      </FormControl>
      <FormControl id="companyName">
        <FormLabel>Category</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={item.category}
        />
      </FormControl>
      <FormControl id="companyName">
        <FormLabel>Website</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="text"
          placeholder={item.site}
        />
      </FormControl>
    </Grid>
      ))}
    </Stack>
  )
}

export default CompanySettings
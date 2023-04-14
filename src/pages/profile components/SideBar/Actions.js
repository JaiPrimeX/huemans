import { useEffect, useRef } from 'react'
import { API, Storage } from 'aws-amplify';
import * as queries from "../../../graphql/queries"
import * as mutations from "../../../graphql/mutations";
import * as React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightAddon,
  useClipboard,
  VStack,
} from '@chakra-ui/react'

export default function Actions() {
  const [business, setBusiness] = React.useState([]);
  const [list,setList] =  React.useState([]);
  const [value, setValue] = React.useState('nope.');
  const who = '97a64680-5c6f-4844-b7be-8a36f5450e9c';

  if (business.length==0){
    fetchBusiness()
  }
  /*else if (user.length==1){
    console.log("user")
    console.log(user.FirstName)
    return
  }*/
  React.useEffect(() => {
    if (business.length > 0){
      
      defineData()
      console.log(business)
    }
  },[business]);

  

  async function fetchBusiness() {

    const variables = {
      filter: {
        usersID: { contains: who}
      }
    }
    
    const apiData = await API.graphql({ query: queries.listBusinesses, variables: variables});
    const businessFromAPI = apiData.data.listBusinesses.items;
    await Promise.all (
      businessFromAPI.map(async (business) => {
        return business;
      })
    );
    
    setBusiness(businessFromAPI);
  }

  function defineData(){
     setValue(business[0].Web)
  }
  const handleOnClick = () => {
    window.open(value)
  }
  
  const { hasCopied, onCopy } = useClipboard(value)

  const profileUrl = React.useRef(null)

  useEffect(() => {
    if (hasCopied) {
      profileUrl.current.focus()
      profileUrl.current.select()
    }
  })

  return (
    <VStack py={8} px={5} spacing={3}>
      <Button onClick={handleOnClick}w="full" variant="outline" >
        View Business Website
      </Button>
      <InputGroup>
        <Input
          ref={profileUrl}
          type="url"
          color="brand.blue"
          value={value}
          userSelect="all"
          isReadOnly
          _focus={{ borderColor: 'brand.blue' }}
        />
        <InputRightAddon bg="transparent" px={0} overflow="hidden">
          <Button onClick={onCopy} variant="link">
            <svg width="1.2em" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
          </Button>
        </InputRightAddon>
      </InputGroup>
    </VStack>
  )
}
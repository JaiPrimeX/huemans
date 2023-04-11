import { CardBody, FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { API, Storage } from 'aws-amplify';
import * as queries from "../../../graphql/queries"
import * as mutations from "../../../graphql/mutations";
import * as React from "react";
import {
  Button,
  Heading,
  Image,
  Card,
  SearchField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
function AccountSettings() {
  const [user, setUser] = React.useState([]);
  const [list,setList] =  React.useState([]);
  const who = '3080c972-9daf-4010-9536-35c08c02aed3';

  if (user.length==0){
    fetchUsers()
  }
  /*else if (user.length==1){
    console.log("user")
    console.log(user.FirstName)
    return
  }*/
  React.useEffect(() => {
    if (user.length > 0){
      
      defineData()
      
    }
  },[user]);

  

  async function fetchUsers() {

    const variables = {
      filter: {
        id: {eq: who}
      }
    }
    
    const apiData = await API.graphql({ query: queries.listUsers, variables: variables});
    const usersFromAPI = apiData.data.listUsers.items;
    await Promise.all (
      usersFromAPI.map(async (users) => {
        return users;
      })
    );
    
    setUser(usersFromAPI);
  }

  function defineData(){
     setList([
      {
      id: 1,
      uname: user[0].UserName,
      fname: user[0].FirstName,
      lname: user[0].LastName,
      phone: user[0].Phone,
      bday: user[0].Birthday,
      email: user[0].Email
      }
      ])
  }
  return (
    <Card>
      {list.map(item => (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={6}
    >
      
     

      <FormControl id="userName">
        
        <FormLabel>User Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder = {item.uname} />
      </FormControl>
      <FormControl id="firstName">
        
        <FormLabel>First Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder = {item.fname} />
      </FormControl>
      
      
      <FormControl id="lastName">
        <FormLabel>Last Name</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder={item.lname} />
      </FormControl>
    
      <FormControl id="phoneNumber">
        <FormLabel>Phone Number</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="tel"
          placeholder={item.phone}
        />
      </FormControl>
      <FormControl id="emailAddress">
        <FormLabel>Email Address</FormLabel>
        <Input
          focusBorderColor="brand.blue"
          type="email"
          placeholder={item.email}
        />
      </FormControl>
      <FormControl id="birthday">
        <FormLabel>Birthday</FormLabel>
        <Input focusBorderColor="brand.blue" type="text" placeholder={item.bday} />
      </FormControl>
     
      <FormControl id="state">
        <FormLabel>State</FormLabel>
        <Select focusBorderColor="brand.blue" placeholder="Select State -">
          Select State -
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC" selected>District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </Select>
      </FormControl>
      
    </Grid>
      ))}
    </Card>
  )
}

export default AccountSettings
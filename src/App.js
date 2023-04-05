import * as React from "react";
import {
  useNavigate,
  Link,
  Routes,
  Route,
} from 'react-router-dom';

import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Heading,
  Image,
  Card,
  Grid,
  SearchField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import * as queries from "./graphql/queries";
import { Navs, Footer, MainImage, Listing} from '../src/ui-components'


const App = ({ signOut }) => {
  
  const [users, setUsers] = React.useState([]);

  const [businesses, setBusinesses] = React.useState([]);

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };
  

  async function fetchUsers() {

    const variables = {
      filter: {
        or:[
        {FirstName: {contains: searchTerm}},
        {LastName: {contains: searchTerm}}
      ]}
    }
    
    console.log(searchTerm)
    const apiData = await API.graphql({ query: queries.listUsers, variables: variables});
    const usersFromAPI = apiData.data.listUsers.items;
    await Promise.all (
      usersFromAPI.map(async (user) => {
        return user;
      })
    );
    setUsers(usersFromAPI);
    console.log(usersFromAPI)
  }

  async function fetchBusinesses() {

    const variables = {
      filter: {
        or:[
        {Category: {contains: searchTerm}},
        {Name: {contains: searchTerm}}
      ]}
    }
    
    console.log(searchTerm)
    const apiData = await API.graphql({ query: queries.listBusinesses, variables: variables});
    const businessesFromAPI = apiData.data.listBusinesses.items;
    await Promise.all (
      businessesFromAPI.map(async (business) => {
        return business;
      })
    );
    setBusinesses(businessesFromAPI);
    console.log(businessesFromAPI)
    //renderSearch();
    //Search();
    //handleResults();
  } 

  //const navigate = useNavigate();
  /*const handleResults= event =>{

      navigate('/search');
      
  }*/

  function Search(){
    businesses.map((business) => {
      return <Listing business={business}></Listing>});
  }

//This is a comment
  return (
  <View className="App">
    <Grid
    columnGap="1rem"
    rowGap="0.5rem"
    templateColumns="1fr 1fr 1fr"
    templateRows="0.2fr 2fr 1fr"
    backgroundColor="rgba(0,0,0,1)"
>
<Card
    columnStart="1"
    columnEnd="-1"
    backgroundColor="rgba(255,212,150,1)"
  >
    <Navs 
    homeButton={<Button variation="menu" gap="0.01rem" size="small" className=".amplify-button:hover" onClick={signOut}>Home</Button>}
    aboutButton={<Button variation="menu" gap="0.01rem" size="small" onClick={signOut}>About</Button>}
    profileButton={<Button variation="menu" gap="0.01rem" size="small" onClick={signOut}>Profile</Button>}
    favoritesButton={<Button variation="menu" gap="0.01rem" size="small" onClick={signOut}>Favorites</Button>}
    businessesButton={<Button variation="menu" gap="0.01rem" size="small" onClick={signOut}>Businesses</Button>}
    
    searchBox={
      <SearchField
      label="Search"
      placeholder="Search here..."
      value = {searchTerm} 
      onChange = {handleSearchTermChange}
      onSubmit = {fetchBusinesses}
      onClear = {handleClear}
    />
    }>
    </Navs>
  </Card>
  {businesses.length >0 && <Search/>}

  <Card
    columnStart="1"
    columnEnd="-1"
    backgroundColor="rgba(255,212,150,1)"
  >
    <Image src="https://huemanteastbucketstore173248-dev.s3.amazonaws.com/Public/mainImage.jpg" width="100%"className="App-logo" alt="logo" />
      
  </Card>

  <Card
    columnStart="1"
    columnEnd="-1"
  >
    <Footer></Footer>
  </Card>
</Grid>
    <Card>
    </Card>
    <Button onClick={signOut}>Sign Out</Button>
  </View>
);
}


export default withAuthenticator(App);
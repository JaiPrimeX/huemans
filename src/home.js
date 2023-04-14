import * as React from "react";
import { Link } from 'react-router-dom';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  Button,
  Image,
  Card,
  Grid,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { Navs, Footer, MainImage, Listing} from '../src/ui-components'
import SearchBar from "./SearchBar";
const Home = ({ signOut }) => {
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
    homeButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/'> Home </Link></Button>}
    aboutButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/about'> About </Link></Button>}
    profileButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/profile'> Profile</Link></Button>}
    favoritesButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/favorites'> Favorites </Link></Button>}
    
    searchBox={
      <SearchBar/>}

    ></Navs>
  </Card>

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



export default withAuthenticator(Home);
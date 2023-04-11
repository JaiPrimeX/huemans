import * as React from "react";
//import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { Link } from 'react-router-dom';
import {
 Button,
 Card,
 Grid,
 View,
} from '@aws-amplify/ui-react';
import SearchBar from "../SearchBar";
import { Navs, Footer} from '../ui-components'
import { About } from '../ui-components';

const about = () => {
  return(
  <View className="App">
      <Grid
      columnGap="1rem"
      rowGap="0.3rem"
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
      businessesButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/businesses'> Businesses </Link></Button>}
     
      searchBox={
      <SearchBar/>}


      ></Navs>
      </Card>

      
      
      <Card
      columnStart="1"
      columnEnd="-1"
      
    >
        <About/>
    </Card>

      


      <Card
      columnStart="1"
      columnEnd="-1"
    >
      <Footer></Footer>
    </Card>
      </Grid>
      </View>
  );
}


export default about;
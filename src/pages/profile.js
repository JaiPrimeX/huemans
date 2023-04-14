import SimpleBar from 'simplebar-react'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../pages/profile components/helper'
import Cover from '../pages/profile components/Cover'
import Main from '../pages/profile components/ProfileNav'
import { Navs, Footer} from '../ui-components'
import {
  Button,
  SearchField,
  Grid,
  Card
} from '@aws-amplify/ui-react';
import SearchBar from '../SearchBar'


export default function profile() {

  return (
    <Grid
    columnGap="1rem"
    rowGap="0.0rem"
    backgroundColor="rgba(0,0,0,0)"
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
      <SearchBar />}
    ></Navs>
  </Card>
    <SimpleBar style={{ maxHeight: '88vh' }}>
      
      <ChakraProvider theme={theme}>
        <Cover />
        <Main />
      </ChakraProvider>
    </SimpleBar>
    <Card
    columnStart="1"
    columnEnd="-1"
    backgroundColor="rgba(255,212,150,1)"
    >
    <Footer></Footer>
  </Card>
    </Grid>
  )
}
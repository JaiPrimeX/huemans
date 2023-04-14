import React from "react";
import { Link,useLocation } from 'react-router-dom';
import { Navs, BusinessHeader, ReviewImg, AllReviews} from "../ui-components";
import { Button,Image, View, Grid, Card } from "@aws-amplify/ui-react";
import SearchBar from "../SearchBar";
import {useJsApiLoader, GoogleMap, onGoogleApiLoaded} from '@react-google-maps/api';
import { Marker, MarkerClusterer } from "@react-google-maps/api";
  
const BusinessDetails= () => {
 const location = useLocation();
 const data = location.state;
 console.log(data.business);
 const center = { lat: data.business.Lat, lng: -76.96055}
 const {isLoaded} = useJsApiLoader({
  googleMapsApiKey: "AIzaSyDa4OfYXLOj9qbGJQrRCQBmpAuPeHMvWYI"
})

 
  return (
    <View>
    <Grid
    columnGap="1rem"
    rowGap="0.5rem"
    backgroundColor="rgba(255,212,150,1)"
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
    
    searchBox={<SearchBar/>}
    ></Navs>
    </Card>
        <BusinessHeader businesses={data.business}/>
      <View className="leftSmall">
      <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%',height:'100%'}}>
       <Marker title={data.business.Name} position={center}></Marker> 
          </GoogleMap>
      </View>

      <View
      className="rightSmall" >
          <ReviewImg/>
      </View>
      <View className="rightSm">
        <AllReviews/>
      </View>
      </Grid></View>
  );
};
  
export default BusinessDetails; //  
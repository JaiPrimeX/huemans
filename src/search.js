import * as React from "react";
import { useEffect } from "react";
import { useLocation , useParams, useNavigate} from "react-router-dom";
import { Listing } from "./ui-components";
import {Navs} from '../src/ui-components'
import { SearchField, Button, View, Text } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import {useJsApiLoader, GoogleMap, onGoogleApiLoaded} from '@react-google-maps/api';
import { Marker, MarkerClusterer } from "@react-google-maps/api";


const center = { lat: 38.89037, lng: -77.03196 }

const Search = () => {

    const location = useLocation();
    const data = location.state;
    const results = data.businessResults;
    const [businessP, setBusinessP] = React.useState([]);
    console.log(results);
    const navigate = useNavigate();

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: "AIzaSyDa4OfYXLOj9qbGJQrRCQBmpAuPeHMvWYI"
    })
    
    useEffect(() => {
      console.log(businessP.length)
    if (businessP.length != 0 ){
      const Data = {
        business: businessP,
      }
      console.log(businessP)
      navigate(`/details/${businessP.Name}`, {state:Data});
      
    }
  },[businessP]);
    
  if(!isLoaded){
        return <Text>Api is loading...</Text>
  }
   
   const markers = data.businessResults.map(d => [d.Name,d.Lat,d.Lng])
  // console.log(markers)


  const handleBusinessPChange = (businessC) => {
    setBusinessP(businessC);
  }

 


  return (
    <div>
      <Navs 
    homeButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/'> Home </Link></Button>}
    aboutButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/about'> About </Link></Button>}
    profileButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/profile'> Profile</Link></Button>}
    favoritesButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/favorites'> Favorites </Link></Button>}
    businessesButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/businesses'> Businesses </Link></Button>}
    
    searchBox={<SearchBar/>}
    ></Navs>
      {data.businessResults.map(d => (<Button variation="menu" onClick={() => handleBusinessPChange(d)}><Listing businesses={d}></Listing></Button>))} 
      {console.log(businessP)}
      <View
      className="right"
     >
         <GoogleMap center={center} zoom={12} mapContainerStyle={{width:'100%',height:'100%'}}>
          {markers.map(d => <Marker title={d[0]} position={{lat:d[1], lng:d[2]}}></Marker>)}
          </GoogleMap>
         
    </View>
    </div>
  );
};
  
export default Search;
//<Marker title={d.Name} position={{lat:d.lat,lng:d.lng}}></Marker>    
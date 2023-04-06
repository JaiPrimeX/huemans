import React from "react";
import { useLocation } from "react-router-dom";
import { Listing } from "./ui-components";
import {Navs} from '../src/ui-components'
import { SearchField, Button } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';

const Search = () => {
    const location = useLocation();
    const data = location.state;
    const results = data.businessResults;
    console.log(results);

    const [businesses, setBusinesses] = React.useState([]);

    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
      };
    
    const handleClear = () => {
        setSearchTerm('');
      };

    async function handleSubmit (searchResults) {
        //event.preventDefault();
      //  await fetchBusinesses();
        // 👇️ redirect to /contacts
      };

  return (
    <div>
      <Navs 
    homeButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/'> Home </Link></Button>}
    aboutButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/about'> About </Link></Button>}
    profileButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/profile'> Profile</Link></Button>}
    favoritesButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/favorites'> Favorites </Link></Button>}
    businessesButton={<Button variation="menu" gap="0.01rem" size="small"><Link to='/businesses'> Businesses </Link></Button>}
    
    searchBox={
      <SearchField
      label="Search"
      placeholder="Search here..."
      value = {searchTerm} 
      onChange = {handleSearchTermChange}
      onSubmit = {handleSubmit}
      onClear = {handleClear}
    />}
    ></Navs>
      {data.businessResults.map(d => (<Listing businesses={d}></Listing>))} 
    </div>
  );
};
  
export default Search;
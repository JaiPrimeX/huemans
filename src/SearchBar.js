import * as React from "react";
import { useEffect } from "react";
import {
  useNavigate,
} from 'react-router-dom';

import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import {
  Button,
  Image,
  Card,
  Grid,
  SearchField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import * as queries from "./graphql/queries";
import { Navs, Footer, MainImage, Listing} from '../src/ui-components'

const SearchBar = () => {
  const [businesses, setBusinesses] = React.useState([]);

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClear = () => {
    setSearchTerm('');
  };

  const navigate = useNavigate();

  async function handleSubmit (searchResults) {
    //event.preventDefault();
     await fetchBusinesses();
    // redirect to /contacts
  };

  useEffect(() => {
    if (businesses.length > 0){
      const Data = {
        searchedTerm: searchTerm,
        businessResults: businesses
      }
      console.log(businesses);
      setBusinesses([]);
      navigate('/search', {state:Data});}
  },[businesses]);

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
  } 

  return (
    <SearchField
      label="Search"
      placeholder="Search here..."
      value = {searchTerm} 
      onChange = {handleSearchTermChange}
      onSubmit = {handleSubmit}
      onClear = {handleClear}
    />
);
}



export default SearchBar;
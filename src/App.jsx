import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
//TODO #1- make an api call to the harvard api
// and display the respone via a console.log

const API_KEY = "4b17b233-7d8d-498e-a8c6-87a332e35650";

function App() {
  //we need to modify this that the request can be 
  //appropriately be made to the harvard api
  const[inputs,setInputs] = useState(
    {
      size:"1",
      page:"1",
      sort:"random",
      sortorder:"asc",
      //fields:"" this might be useful later for the ban list requirement

    }
  );

  const submitForm = () =>{
    //default values for case where user doesn't
    //input values
    console.log("call to submitForm()");
    //let defaultValues ={}; THIS MIGHT BE USEFUL LATER 
    
    /* THIS LOGIC IS NOT NEEDED BUT WE WILL LEAVE IT HERE IF WE FIND SOME USE FOR IT LATER
    if (inputs.url ==="" || inputs.url===" "){
      alert("You forgot to submit an url!");
    }
    else{
      for(const [key,value] of Object.entries(inputs)){
        if(value == ""){
          inputs[key] = defaultValues[key]
        }
      }
    }**/
    
    makeQuery(); // THIS IS THE MEAT FOR NOW...
  }



const makeQuery = () => {
  console.log("printing access key", API_KEY)
  //let wait_until = "network_idle";
  //let response_type = "json";
  //let fail_on_status = "400%2C404%2C500-511";
  //let url_starter = "https://";
  //let fullURL = url_starter + inputs.url;
  const resource_type = "image" 
  let query = `https://api.harvardartmuseums.org/${resource_type}?apikey=${API_KEY}`;
  console.log("calling makeQuery() with the following query: ",query);
  callAPI(query).catch(console.error);
}

const callAPI = async (query) =>{
  const response = await fetch(query);
  const json = await response.json();
  console.log("printing json from callAPI", json)
  console.log("callAPI being called....")
  console.log(json);

  if (json.url == null){
    alert("could not handle this request.")
  }
  else{
    console.log('got it ')// this might be useful later but we dont know yet
  }
  console.log("end of callAPI");
}

  return (
   <div className='whole-page'>
      <h1>Random Art Generator...</h1>
      
   </div>
  )
}

export default App

import logo from "./logo.svg";
import React from 'react';
import "./App.css";
import Dropdown from "./components/Dropdown/Dropdown";
import personData from './assets/persons.json';
import countryData from './assets/countries.json';

const App = () => {

  return (
    <section className="flex flex-row h-screen">
      <div className="App m-auto ">
        <h2>Welcome! Please select you options</h2>
        <div className="flex flex-row space-x-10">
         <Dropdown dropdownName="People" data={personData.persons} multiSelect={true} required={false} labelField="name" valueField="id"  />
         <Dropdown dropdownName="Country" data={countryData} multiSelect={false} required={false} labelField="name" valueField="name"  />
      </div>
      </div>
    </section>
  );
};

export default App;

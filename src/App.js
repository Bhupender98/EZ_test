import React from "react";
import "./App.css";
import AboutCompany from "./Components/AboutCompany";
import EntityDetails from "./Components/Company_Accordian/EntityDetails";
import LoggedInPage from "./Components/LoggedInPage";
import Types from "./Components/Types";
import EntitiyCards from "./Components/EntitiyCards";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import SelectGroup from "./Components/SelectGroup";
function App() {
  return (
    <div className="container-fluid d-flex">
      <div className="ez-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAr3xW1zPY4iJxL0CSJlQHDma2_UsuBOM0mw&usqp=CAU"
          alt="EZ_logo"
        />
        <div className="pink-divs"></div>
        <div className="pink-divs"></div>
        <div className="pink-divs"></div>
      </div>
      <div className="clints-company">
        <div className="clints">
          <Header />
          <SearchBar />
          <SelectGroup />
          <EntitiyCards />
        </div>
        <div className="about-company-container">
          <LoggedInPage />
          <AboutCompany />
          <Types />
          <EntityDetails />
        </div>
      </div>
    </div>
  );
}

export default App;

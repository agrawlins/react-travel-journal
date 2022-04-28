import React from "react";
import Navbar from "./Components/Navbar";
import Entry from "./Components/Entry";
import Footer from "./Components/Footer";
import data from "./data";

const App = () => {
  const mapEntries = data.map(item => {
    return(
      <Entry
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <header className="header">
        <Navbar />
      </header>
      <section className="entriesList">
        {mapEntries}
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;

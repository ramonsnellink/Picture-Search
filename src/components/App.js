import React from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "../api/unsplash";

class App extends React.Component {
  state = { images: [] };
  //Geef dit mee als prop aan SearchBar
  onSearchSubmit = async (term) => {
    //gebruik de axios.create() functie vanuit api/unslpash

    const response = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar searchCallBack={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

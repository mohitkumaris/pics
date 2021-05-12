import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { images: [] };
  // This is how we get the value from child
  onFormSubmit = async (term) => {
    const response = await Unsplash.get("/search/photos", {
      params: {
        query: term,
      },
    });
    this.setState({ images: response.data.results });
  };
  componentDidUpdate() {
    return <Spinner />;
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        {/* <Spinner images={this.state.images} /> */}
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;

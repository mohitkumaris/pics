import React from "react";
import SearchBar from "./SearchBar";
import Unsplash from "../api/Unsplash";
import ImageList from "./ImageList";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { images: [], loading: false };
  // This is how we get the value from child
  onFormSubmit = async (term) => {
    try {
      this.setState({ loading: true });
      const response = await Unsplash.get("/search/photos", {
        params: {
          query: term,
        },
      });
      this.setState({ images: response.data.results, loading: false });
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        <div>
          {this.state.loading ? (
            <Spinner />
          ) : (
            <ImageList images={this.state.images} />
          )}
        </div>
      </div>
    );
  }
}
export default App;

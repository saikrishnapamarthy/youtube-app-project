import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../apis/youtube";
import { Container, Row, Col } from "reactstrap";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  //Defalut search term when page loads initially
  componentDidMount() {
    this.onTermSubmit("React.js");
  }

  onTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyDl04Q_aOtFWekl_bF_X1jN5BP2F-jPfho",
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Container className="themed-container">
        <SearchBar onFormSubmit={this.onTermSubmit} />

        <Row>
          <Col xs="8">
            <VideoDetail video={this.state.selectedVideo} />
          </Col>
          <Col xs="4">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

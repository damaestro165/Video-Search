import "./App.css";
import React from "react";
import Search from "./Search";
import youtube from "./api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("building");
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="m-5 ">
        <Search onSubmitForm={this.onTermSubmit} />
        <div className="flex flex-col md:flex-row mt-[2rem] px-5 gap-x-2">
          <div className="md:w-3/5">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="md:w-2/5">
            <VideoList
              videos={this.state.videos}
              onVideoView={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

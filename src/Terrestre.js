import React, { Component } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

class Terrestre extends Component {
  state = {
    pictures: Array.from({ length: 6 }),
    hasMore: true
  };

  fetchMoreData = () => {
    if (this.state.pictures.length === 18) {
      this.setState({ hasMore: false });
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      this.setState({
        pictures: this.state.pictures.concat(Array.from({ length: 2 }))
      });
    }, 100);
  };

  render() {
    return (
      <div>
          <div id="terrestreTitle">
            <h2>Terrestre</h2>
          </div>
          <InfiniteScroll
            dataLength={this.state.pictures.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>...</h4>}
          >
            {this.state.pictures.map(
              (i, index) =>
                index === 0 ? (
                  (index = null)
                ) : (
                  <img src={require(`./terrestre/T${index}.jpg`)} key={index} />
                )
            )}
          </InfiniteScroll>
          <div className="expoDescription">
            <a href="#" class="release">
              release
            </a>
          </div>
        <div className="backButton">
          <span>
            <Link to="/">voltar</Link>
          </span>
        </div>
      </div>
    );
  }
}

export default Terrestre;

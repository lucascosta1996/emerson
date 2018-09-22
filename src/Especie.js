import React, { Component } from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

class Especie extends Component {
  state = {
    pictures: Array.from({ length: 4 }),
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
            <h2>Novas Espécies</h2>
          </div>
          <InfiniteScroll
            dataLength={this.state.pictures.length}
            next={this.fetchMoreData}
            hasMore={this.state.hasMore}
            loader={<h4>...</h4>}
          >
            {this.state.pictures.map(
              (i, index) =>
                  index === 0 || index === 18 ? (
                    (index = null)
                  ) : (
                  <img src={require(`./especie/E${index}.jpg`)} key={index} />
                )

            )}
          </InfiniteScroll>
          <div className="expoDescription">
            <a href="http://palacio.xyz/exhibitions/novasespecies" target="_blank" class="release">
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

export default Especie;

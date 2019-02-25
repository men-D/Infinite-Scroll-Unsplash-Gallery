import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image'



export class Images extends Component {
  state = {
    images:[],
    start: 1,
    count: 30
  }
  componentDidMount() {
    const {start, count} = this.state;
    axios.get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({images: res.data}))
  }
  fetchImages = () => {
    const {start, count} = this.state;
    this.setState({start: this.state.start + count})
    axios.get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({images: this.state.images.concat(res.data)}))
  }
  render() {
    return (<div className="images" >
      <InfiniteScroll
        dataLength={this.state.images.length}
        next={this.fetchImages}
        hasMore={true}
        loader={<div className="lds-circle"><div></div></div>}
      >
        {this.state.images.map(img => (
          <Image key={img.id} image={img}/>
        ))}
      </InfiniteScroll>
    </div>
    )
  }
}

export default Images

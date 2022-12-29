import React from 'react';
import { Searchbar } from './Input/Searchbar';

// import axios from "axios";
import { Modal } from './Modal/Modal';
import { fetchPictures } from 'helpers/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoad } from 'components/Button/Button';

import { Loader } from './Loader/Loader';

export class App extends React.Component {
  state = {
    post: [],
    query: '',
    page: 1,
    isLoad: false,
    error: '',
    modalImg: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ isLoad: true });
        const newImg = await fetchPictures(query, page);
        this.setState(prevState => ({ post: [...prevState.post, ...newImg] }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({
          isLoad: false,
        });
      }
    }
  }

  handleSubmit = query => {
    this.setState({ query: query, page: 1, post: [] });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  getLargeImgURL = url => {
    this.setState({ modalImg: url });
  };

  closeModal = () => {
    this.setState({
      modalImg: null,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoad && <Loader />}

        <ImageGallery list={this.state.post} getUrl={this.getLargeImgURL} />
        {this.state.post.length === 0 ? null : (
          <ButtonLoad onClick={this.onLoadMoreClick} />
        )}
        {this.state.modalImg && (
          <Modal
            largeImgUrl={this.state.modalImg}
            closeModal={this.closeModal}
          />
        )}
      </div>
    );
  }
}

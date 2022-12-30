import React from 'react';
import { Searchbar } from './Input/Searchbar';

// import axios from "axios";
import { Modal } from './Modal/Modal';
import { fetchPictures } from 'helpers/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ButtonLoad } from 'components/Button/Button';
import { Loader } from './Loader/Loader';
import { useState, useEffect } from 'react';

export function App() {
  const [post, setPost] = useState([]);
  const [query, setquery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoad, setIsLoad] = useState(false);
  // const [errore,setError] = useState('');
  const [modalImg, setModalImg] = useState(null);

  useEffect(() => {
    if (!query) return;
    async function loadAsyncImages() {
      try {
        setIsLoad(true);
        const newImg = await fetchPictures(query, page);
        setPost(prevState => [...prevState, ...newImg]);
      } catch (error) {
        // setError(errore);
      } finally {
        setIsLoad(false);
      }
    }
    loadAsyncImages();
  }, [page, query]);

  const handleSubmit = query => {
    setPost([]);
    setPage(1);
    setquery(query);
  };

  const onLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  const getLargeImgURL = url => {
    setModalImg(url);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      {isLoad && <Loader />}

      <ImageGallery list={post} getUrl={getLargeImgURL} />
      {post.length === 0 ? null : <ButtonLoad onClick={onLoadMoreClick} />}
      {modalImg && <Modal largeImgUrl={modalImg} closeModal={closeModal} />}
    </div>
  );
}

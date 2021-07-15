import React, { Component } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { ModalLoader } from './components/Loader/Loader'
import PropTypes from 'prop-types'
import Modal from './components/Modal/Modal'
import Container from './components/Container/Container'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'

class App extends Component {
  state = {
    isShow: false,
    loader: false,
    articlesName: '',
    largeImageURL: '',
    imgTags: '',
  }

  toggleModal = () => {
    this.setState(({ isShow }) => ({ isShow: !isShow }))
  }

  handleFormSubmit = (articlesName) => {
    this.setState({ articlesName })
  }

  handleImageClick = (largeImageURL, imgTags) => {
    this.setState({ largeImageURL, imgTags, loader: true })
    this.toggleModal()
  }

  hideLoaderInModal = () => this.setState({ loader: false })

  render() {
    const { isShow, articlesName , largeImageURL, imgTags, loader } = this.state
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ToastContainer autoClose={4000} />
        <ImageGallery
          articlesName={articlesName}
          handleImageClick={this.handleImageClick}
        />

        {isShow && (
          <Modal onClose={this.toggleModal}>
            {loader && <ModalLoader />}
            <img
              src={largeImageURL}
              alt={imgTags}
              onLoad={this.hideLoaderInModal}
            />
          </Modal>
        )}
      </Container>
    )
  }
}

App.propTypes = {
  isShow: PropTypes.bool,
  articlesName: PropTypes.string,
  loader: PropTypes.bool,
}

export default App

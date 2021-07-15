import s from './Searchbar.module.css'
import PropTypes from 'prop-types'
import { Component } from 'react'
import { onErrorToast } from '../ToastError'

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  }
  state = {
    articlesName: '',
  }

  handleNameChange = (e) => {
    this.setState({ articlesName: e.currentTarget.value.toLowerCase() })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.articlesName.trim() === '') {
      onErrorToast()

      return
    }
    this.props.onSubmit(this.state.articlesName)
    this.setState({ articlesName: '' })
  }
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchForm_button}>
            <span className={s.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={s.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.articlesName}
            placeholder="Поиск картинок и фото"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    )
  }
}

export default Searchbar

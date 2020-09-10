import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'

function Header() {
  return (
    <nav className='header'>
      <Link className='header__linkLogo' to='/'>
        <img className='header__logo' src='/img/amazon-logo.png' alt='logo' />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className="header__nav">
        <Link className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Hello, Yemi</span>
            <span className='header__optionLineTwo'>Sign in</span>
          </div>
        </Link>
        <Link className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLinetTwo'>& order</span>
          </div>
        </Link>
        <Link className='header__link'>
          <div className="header__option">
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        <Link className='header__link'>
        <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className='header__optionLineTwo header__basketCount'>0</span>
        </div>
        </Link>
      </div>

    </nav>
  )

}
export default Header
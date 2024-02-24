import React from 'react'
import html from '../../assets/images/htmlLogo.png'
import { cardsData } from '../../data/cardsData'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="header-content">
                <h1 className='header-title'>Savollarni tanlang</h1>

                <div className="header-cards">
                {
                    cardsData.map((item, key) => (
                        <div className="header-card" key={item.id}>
                            <img src={item.img} className='header-image' alt={item.name} />
                        <div className="header-items">
                            <h1 className='header-name'>{item.name}</h1>
                            <h1 className='header-numbers'>{item.number}</h1>
                            <Link to={item.to} className="header-link">
                                Testni boshlash
                            </Link>
                        </div>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
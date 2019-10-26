import React, { Component } from 'react'
import './style.css'

class Page extends Component {


    render(){
        return (
            <div className='main-block'>
                <header className='header'>

                    <div className='header-logo'>
                        <span className='header-logo-text'>Logo</span>
                    </div>

                    <div className='header-links'>
                        <a>Link#1 </a>
                        <a>Link#2 </a>
                        <a>Link#3 </a>
                    </div>

                    <div className='header-profile'>
                        <a>Profile</a>
                    </div>
                    
                </header>

                <main className='main'>

                    <div className='profile-block content-block'>
                        <div className='profile-img'>
                            <div className='img-block'>
                                <img className='img' src='https://i0.wp.com/www.gottabemobile.com/wp-content/uploads/2018/09/How-to-Use-Memoji-iOS-12-iPhone-Xs-1.jpg?fit=1027%2C1027&ssl=1' alt='ProfilePhoto'></img>
                            </div>
                        </div>
                        <div className='profile-info'>
                            <span>The web site of Chris Pidorock and the Web Developer browser extension.</span>
                        </div>
                    </div>

                    <div className='something-block content-block'>Something</div>

                    <div className='third-block content-block'>Third block</div>

                    <div className='fourth-block content-block'>Fourth block</div>
                    
                    <div className='fifth-block content-block'>Fifth block</div>

                </main>

                <footer className='footer'>

                    <div className='footer-email'>
                        <input className='input-form' placeholder='Send me a message!'></input>
                    </div>

                    <div className='footer-contacts'>
                        <ul>
                            <li><a href="tel:+79045133706">+7(904)-513-37-06</a></li>
                            <li><a href='mailto:maxpavlov9991@gmail.com'>maxpavlov9991@gmail.com</a></li>
                            <li><a href='https://github.com/maxpavlov9991'>GitHub</a></li>
                        </ul>
                    </div>
                    
                </footer>

            </div>
        )
    }

}

export default Page
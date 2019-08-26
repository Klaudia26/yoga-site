import React from 'react';
import logo from '../../assets/img/logo.png';
import './style.scss';

const Navigation = () => {
    const links = [
        {
            href: '#about',
            link: 'about',
        },
        {
            href: '#feature',
            link: 'feature',
        },
        {
            href: '#testimonial',
            link: 'testimonial',
        },
        {
            href: '#pricing',
            link: 'pricing',
        },
        {
            href: '#blog',
            link: 'blog',
        },
    ];

    const renderMenu = () => (
        links.map(({ link, href }) => {
            return (
                <li key={link} className="menu__item">
                    <a className="menu__link" href={href}>{link}</a>
                </li>
            );
        })
    );

    return (
        <header className="header">
            <div className="container flex-center">
                <div>
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <nav className="navigation">
                    <ul className="menu flex-center">
                        {renderMenu()}
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navigation; 

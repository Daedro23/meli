import React from 'react';
import './header.scss'
import logo from '../../Assets/Logo_ML@2x.png'
import Input from '../Input/input'
import { ReactTitle } from 'react-meta-tags';

const Header = () => {
    return (
        <nav className="flex">
            <ReactTitle title="Mercado Libre" />
            <a className="logo" href="https://www.mercadolibre.com.ar/"><img className="img" alt="logo" src={logo} /></a>
            <Input holder="Nunca dejes de buscar" />
        </nav>
    )
}

export default Header;


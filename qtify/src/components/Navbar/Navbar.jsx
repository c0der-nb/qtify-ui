import React from 'react';
import styles from './Navbar.module.css';
import Search from '../Search/Search';
import Button from '../Button/Button';
import {ReactComponent as QtifyLogo} from '../../assets/qtify-group.svg'; 

function Navbar(props) {
    return (
        <nav className={styles.navbar}>
            <QtifyLogo />
            <Search placeholder={'Select a album of your choice'} />
            <Button>Give Feedback</Button>
        </nav>
    )
}

export default Navbar;
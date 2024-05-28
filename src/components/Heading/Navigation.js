import React from 'react'
import { useContext } from 'react'
import clsx from 'clsx'

import { ThemeContext } from './ThemeContext'
import styles from "./Navigation.module.css"

export default function Navigation() {
    const { theme, toggle, dark } = useContext(ThemeContext)
    return (
        <nav className="flex justify-between" style={{ backgroundColor:theme.backgroundColor, color: theme.color }}>
           
            <ul className="flex ml-10">
                <li className={clsx(styles.liHover)}><a  href='#home'>Home</a></li>
                <li className={clsx(styles.liHover)}><a  href='#news'>News</a></li>
                <li className={clsx(styles.liHover)}><a  href='#about'>About</a></li>
                <li className={clsx(styles.liHover)}><a  href='#contact'>Contact</a></li>
            </ul>
            
            <div className={clsx(styles.darkMode)} style={{ position: 'relative', display:'inline-block'}}>
                <a className='switch-mode' href='#' onClick={toggle}
                    style={{
                        backgroundColor: theme.backgroundColor,
                        color: theme.color,
                        outline: 'none'
                    }} data-testid="toggle-theme-btn"
                >
                    Switch Nav to {!dark ? 'Dark' : 'Light'} mode
                </a>
            </div>


        </nav>

    )
}

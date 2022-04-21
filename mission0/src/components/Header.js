import React, { useState, useEffect } from "react";
import './Header.css'

function Header(props) {
    const [isMenuShown, setMenuShown] = useState(false)
    const ToggleMenu = () => {
        if (isMenuShown) {
            setMenuShown(false);
        } else setMenuShown(true)
    }


    
    return (
        <div className='Header'>
            <div className='TitleContainer'>
                <img src='/rock profile.jpg' alt='dashboard_icon' className='TitleImage' />
                <h1 className='TitleText'>Rocks</h1>
                <div className='MenuIcon' onClick={ToggleMenu}>
                    <div />
                    <div />
                    <div />
                </div>
            </div>


            <div className={isMenuShown ? 'MenuContainer Show' : 'MenuContainer'}
            // 'MenuContainer'
            >
                <div className='MenuButton'>Menu1</div>
                <div className='MenuButton'>Menu2</div>
                <div className='MenuButton'>Menu3</div>
                <div className='LoginButton'>Login</div>
            </div>
        </div>
    );
}

export default Header;
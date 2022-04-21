import React from 'react';
import './Home.css';
import ImageCard from './ImageCard';
import Header from './Header';


function Home(props) {
    return (
        <>
            <Header />
            <div className='Landing'>
                <div className='LandingText'>Rock, Stones <br/>And maybe Pebbles</div>
                <div className='LandingSearchContainer'>
                    <div className='LandingSearchInput'></div>
                    <div className='LandingSearchButton'><h3>Search</h3></div>
                </div>
            </div>
            <div className='ImageGallery'>
                <ImageCard image='rocks1.jpg'/>
                <ImageCard image='rocks2.jpg'/>
                <ImageCard image='rocks3.jpg'/>
            </div>
        </>
    );
}

export default Home;
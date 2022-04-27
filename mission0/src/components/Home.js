import React from 'react';
import './Home.css';
import ImageCard from './ImageCard';
import Header from './Header';


function Home(props) {
    return (
        <>
            <Header />
            <div className='Landing'>
                <div className='LandingTextContainer'>
                   
                    <div className='LandingText'>Rock, Stones <br/>and maybe Pebbles</div>
                    <div className='LandingTextBackground' />
                </div>
                <div className='LandingSearchContainer'>
                    <div className='LandingSearchInput'></div>
                    <div className='LandingSearchButton'><h3>Search</h3></div>
                </div>
            </div>
            <div className='ImageGallery'>
                <ImageCard image='rocks1.jpg'/>
                <ImageCard image='rocks2.jpg'/>
                <ImageCard image='rocks3.jpg'/>
                <ImageCard image='rocks4.jpg'/>
                <ImageCard image='rocks5.jpg'/>
                <ImageCard image='rocks6.jpg'/>
                <ImageCard image='rocks7.jpg'/>
                <ImageCard image='rocks8.jpg'/>
                <ImageCard image='rocks9.jpg'/>
                <ImageCard image='rocks10.jpg'/>
                <ImageCard image='rocks11.jpg'/>
                <ImageCard image='rocks12.jpg'/>
            </div>
        </>
    );
}

export default Home;
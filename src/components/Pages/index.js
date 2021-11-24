import React from 'react';
import Pagecontent from '../Pagecontent';
import About from '../Profile.js';
import Contact from './Contact';
import Portfolio from '../Portfolio';

function Page({ currentPage }) {
    const renderPage = ()=>{
        switch(currentPage.name){
            case "About-Me": 
                return <About/>
            case "Portfolio":
                return <Portfolio/>
            case "Contact":
                return <Contact/>
        }
    } 
    return (
        <div>
            <Pagecontent>{renderPage()}</Pagecontent>
        </div>
    )
}

export default Page;
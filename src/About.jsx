import React from 'react';
import Girl from '../src/Images/Girl.jpeg';
import Common from './Common'
const About=()=>{
    return(
        <>
        <Common name="Welcome to About page" imgsrc={Girl} visit="./contact"
           btname="Contact Now"/>
    </>
    );
};
export default About;
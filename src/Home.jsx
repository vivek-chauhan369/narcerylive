import React from 'react';
import vivek from "../src/Images/vivek.jpg";
import Common from "./Common";

const Home = () => {
    return (
        <>
           <Common name="Grow your bussinus with" imgsrc={vivek} visit="./service"
           btname="Get Started"/>
        </>
    );
};
export default Home;
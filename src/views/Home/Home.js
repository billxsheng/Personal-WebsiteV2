import React from 'react';

//import CSSModules from 'react-css-modules';
//import styles from './Home.css';
import Hero from './HomeContainers/Hero/Hero';
import AboutPreview from './HomeContainers/AboutPreview/AboutPreview';
import ProjectsPreview from './HomeContainers/ProjectsPreview/ProjectsPreview';
import GalleryPreview from './HomeContainers/GalleryPreview/GalleryPreview';

const Home = (props) => (
    <div>
        <Hero/>
        <AboutPreview/>
        <ProjectsPreview/>
        {/* <GalleryPreview/> */}
    </div>
)

export default Home;
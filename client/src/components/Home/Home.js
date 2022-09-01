import React from 'react'
import './styles.css'
import Typical from 'react-typical'

const Home = () => {
  return (
    <>  
    <div className='homeWrapper' data-aos="fade-up">
        <div className='homeInfo'>
            <div className='homeHeading'>
                👋🏻 Hey...
                <br/>
                I'm Suhas Kachare.
            </div>
            <div className='homeSubtitle'>
            A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with 👇🏻
            <h2 className='techStack'>
                 {" "}
                 <Typical
                 loop={Infinity}
                 steps={[
                     "JavaScript ",
                     2000,
                     "React JS ",
                     2000,
                     "Node JS ",
                     2000,
                     "Express JS ",
                     2000,
                     "MongoDB ",
                     2000,
                 ]}
                 />
             </h2> 
            </div>
        </div>
        <div className='homeImage'>
            <div className='imageContainer'>
                <div className='imageContainer-background'></div> 
            </div>
        </div>
    </div>
    <p className='homeScroll'>Scroll down to see more</p>
    </>
  )
}

export default Home
import React from 'react'
import './styles.css'
import Timeline from '../Timeline/Timeline';


const About = () => {
  return (
    <>
    <div className='aboutWrapper' data-aos="fade-up">
        <div className='aboutLeft'>
            <div className='aboutImgBg'></div>
            <div className='aboutImgContainer'>
                <img className='aboutImage' src='https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt=''/>
            </div>
        </div>
        <div className='aboutRight'>
            <h1 className='aboutHeading'>About Me</h1>
            <br/>
            <p className='aboutDesc'>🏡 I live in Kamothe, Maharashtra IN.</p>
            <br/>
            <p className='aboutDesc'>👨‍👩‍👦‍👦 I belong to a family of four.</p>
            <br/>
            <p className='aboutDesc'>🤩 I like watching amazing art, listening songs and reading self help books.</p>
            <br/>
            <p className='aboutDesc'>🤗 When I'm free; I like to explore startups, watch ted talks, scratch ideas and talk with some good vibing hoomans.</p>
            <br/>
            <p className='aboutDesc'>❤️ I love to play snooker a lot and also to binge watch amazing suspenseful and sci-fi web series and movies.</p>
        </div>
    </div>
    {/* <div className='tl-wrapper'>
      <div className="tl-centerLine"></div>
      <div className='tl-row row-1'>
         <section className='tl-section'>
           <div className='tl-details'>
               <span className='tl-title'>Title of Section 1</span>
               <span>1st Jan 2021</span>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit et quos maiores illum similique, eum blanditiis nostrum architecto. Quia temporibus magni quas, placeat iure ut obcaecati eveniet animi voluptatibus!</p>
         </section>
      </div>
      <div className='tl-row row-2'>
         <section className='tl-section'>
           <div className='tl-details'>
               <span className='tl-title'>Title of Section 2</span>
               <span>2nd Jan 2021</span>
           </div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit et quos maiores illum similique, eum blanditiis nostrum architecto. Quia temporibus magni quas, placeat iure ut obcaecati eveniet animi voluptatibus!</p>
         </section>
      </div>
    </div> */}


{/* 
    <div className='tl-heading'>
      <h1>My TimeLine 💫</h1>
    </div>
    <div className='tl-wrapper'>
    <div className="tl-centerLine">
      <a className='tl-scroll'><Star/></a>
    </div>
      <div className='row-1'>
        <div className='tl-card tl-card1'>
          <Work className='tl-icon'/>
          <div className='tl-imgBx tl-imgBx1' data-text='Job'>
             
          </div>
          <div className='tl-content1'>
            <div>
              <h3>Web Developer</h3>
              <p>May 2022 - Current</p>
              <p className='tl-institutes'>NUK 9 Information Security Auditors</p>
              <p className='tl-marks'>It's my First Job and I'm enjoying it</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row-2'>
        <div className='tl-card tl-card2'>
          <School className='tl-icon'/>
          <div className='tl-imgBx tl-imgBx2' data-text='Degree'>
             
          </div>
          <div className='tl-content2'>
            <div>
              <h3>Bachelor's of Engineering (Mechatronics)</h3>
              <p>June 2016 - October 2020</p>
              <p className='tl-institutes'>Terna Engineering College , Mumbai University</p>
              <p className='tl-marks'>Secured 8.25 CGPA</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row-1'>
        <div className='tl-card tl-card1'>
          <School className='tl-icon'/>
          <div className='tl-imgBx tl-imgBx1' data-text='Jr College'>
              
          </div>
          <div className='tl-content1'>
            <div>
              <h3>Completed HSC (Science)</h3>
              <p>June 2014 - February 2016</p>
              <p className='tl-institutes'>Ramniwas Ruia Junior College</p>
              <p className='tl-marks'>Secured 80.77%</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row-2'>
        <div className='tl-card tl-card2'>
          <School className='tl-icon'/>
          <div className='tl-imgBx tl-imgBx2' data-text='School'>
              
          </div>
          <div className='tl-content2'>
            <div>
              <h3>Completed SSC</h3>
              <p>June 2004 - March 2014</p>
              <p className='tl-institutes'>Academy of Fine Arts & Crafts English School</p>
              <p className='tl-marks'>Secured 92.80%</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <Timeline/>
  </>  
  ) 
}

export default About
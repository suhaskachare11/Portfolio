import React from 'react'
import Work from '@material-ui/icons/Work';
import School from '@material-ui/icons/School';
import Star from '@material-ui/icons/Star';
import './styles.css'

const Timeline = () => {
  return (
    <>
    <div className='tl-heading'>
      <h1>My TimeLine 💫</h1>
    </div>
    <div className='tl-wrapper'>
    <div className="tl-centerLine">
      <a className='tl-scroll'><Star/></a>
    </div>
      <div className='row-1' data-aos="fade-right">
        <div className='tl-card tl-card1'>
          <Work className='tl-icon'/>
          <div className='tl-imgBx tl-imgBx1' data-text='Job'>
              {/* <img style={{height:'150px' , width:'150px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjpFW6ZoI7TywwLJ0xFm1t-LL2_4XWtRgy_oUJNW7kkgXsm-GCCaQaQVKdkZWbsnxz0s&usqp=CAU'/> */}
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
      <div className='row-2'data-aos="fade-left">
        <div className='tl-card tl-card2'>
          <School className='tl-icon'/>
          <div className='tl-imgBx tl-imgBx2' data-text='Degree'>
              {/* <img style={{height:'250px' , width:'400px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjpFW6ZoI7TywwLJ0xFm1t-LL2_4XWtRgy_oUJNW7kkgXsm-GCCaQaQVKdkZWbsnxz0s&usqp=CAU'/> */}
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
      <div className='row-1' data-aos="fade-right">
        <div className='tl-card tl-card1'>
          <School className='tl-icon'/>
          <div className='tl-imgBx tl-imgBx1' data-text='Jr College'>
              {/* <img style={{height:'150px' , width:'150px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjpFW6ZoI7TywwLJ0xFm1t-LL2_4XWtRgy_oUJNW7kkgXsm-GCCaQaQVKdkZWbsnxz0s&usqp=CAU'/> */}
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
      <div className='row-2' data-aos="fade-left">
        <div className='tl-card tl-card2'>
          <School className='tl-icon'/>
          <div className='tl-imgBx tl-imgBx2' data-text='School'>
              {/* <img style={{height:'250px' , width:'400px'}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIjpFW6ZoI7TywwLJ0xFm1t-LL2_4XWtRgy_oUJNW7kkgXsm-GCCaQaQVKdkZWbsnxz0s&usqp=CAU'/> */}
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
    </div>
    </>
  )
}

export default Timeline
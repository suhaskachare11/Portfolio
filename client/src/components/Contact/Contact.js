import React, { useRef, useState } from 'react'
import LocationOn from '@material-ui/icons/LocationOn';
import Mail from '@material-ui/icons/Mail';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import GitHub from '@material-ui/icons/GitHub';
import emailjs from '@emailjs/browser';
import './styles.css'

const Contact = () => {
    const formRef = useRef()
    const [done , setDone] = useState(false)
    const [input, setInput] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm('service_cmk4gbh', 'template_h5gn795', formRef.current, 'pUmgchsknIYheCtPJ')
        .then((result) => {
          console.log(result.text);
          setDone(true)
          setInput('')
        }, (error) => {
          console.log(error.text);
        });
    }

  return (
    <div className='cu-wrapper' data-aos="fade-up">
        <div className='cu-container'>
            <div className='cu-title'>
                <h2>Get in Touch</h2>
            </div>
            <div className="cu-box">
                <div className="cu-contact cu-form">
                     <h3>Send a Message</h3>
                     <form ref={formRef} onSubmit={handleSubmit}>
                         <div className='cu-formBox'>
                             <div className="cu-row50">
                                 <div className="cu-inputBox">
                                     <span>Name</span>
                                     <input type='text' placeholder='Enter Your Name' Name='user_name' onChange={(e)=>setInput(e.target.value)}/>
                                 </div>
                                 <div className="cu-inputBox">
                                     <span>Subject</span>
                                     <input type='text' placeholder='Enter Subject' Name='user_subject' onChange={(e)=>setInput(e.target.value)}/>
                                 </div>
                             </div>    

                             <div className="cu-row50">
                                 <div className="cu-inputBox">
                                     <span>Email</span>
                                     <input type='text' placeholder='Enter Your Mail' Name='user_email' onChange={(e)=>setInput(e.target.value)}/>
                                 </div>
                                 <div className="cu-inputBox">
                                     <span>Mobile</span>
                                     <input type='text' placeholder='Enter Your Number' Name='user_mobile' onChange={(e)=>setInput(e.target.value)}/>
                                 </div>
                             </div>

                             <div className="cu-row100">
                                 <div className="cu-inputBox">
                                     <span>Message</span>
                                     <textarea placeholder='Write a Message' name='message' onChange={(e)=>setInput(e.target.value)}></textarea>
                                 </div>
                              </div>   

                             <div className="cu-row100">
                                 <div className="cu-inputBox cu-doneMessage">
                                     <input type='submit' value='Send'/>
                                     {done && <div>Thank You for your Interest...</div>} 
                                 </div>  
                              </div>  
                              
                         </div>
                     </form>
                </div>
                <div className="cu-contact cu-info">
                    <h3>Contact Info</h3>
                    <div className="cu-infoBox">
                        <div>
                            <span><LocationOn/></span>
                            <p>Navi Mumbai,Maharashtra<br/>India</p>
                        </div>
                        <div>
                            <span><Mail/></span>
                            <a href='mailto:suhaskachare11@gmail.com'>suhaskachare11@gmail.com</a>
                        </div>
                        <div>
                            <span><LocalPhone/></span>
                            <a href='tel:+919653168225'>+91 9653168225</a>
                        </div>
                    </div>
                    <ul className='cu-social'>
                        <li className='cu-facebook'><a href='https://www.facebook.com/profile.php?id=100008653117976' target='_blank' ><Facebook style={{ fontSize:'30px'}}/></a></li>
                        <li className='cu-instagram'><a href='https://www.instagram.com/suhaskachare/?hl=en' target='_blank' ><Instagram style={{ fontSize:'30px'}}/></a></li>
                        <li className='cu-linkedin'><a href='https://www.linkedin.com/in/suhas-kachare-7166161b0/' target='_blank' ><LinkedIn style={{ fontSize:'30px'}}/></a></li>
                        <li className='cu-github'><a href='https://github.com/suhaskachare11' target='_blank'><GitHub style={{ fontSize:'30px'}}/></a></li>
                    </ul>
                </div>
                <div className="cu-contact cu-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8947932187493!2d73.09369851452398!3d19.024357058538353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d0901a555b%3A0x77853756e8b8339b!2sOm%20Ajinkyatara%20Co-operative%20Housing%20Society%2C%20Main%20Rd%2C%20Sector%206A%2C%20Kamothe%2C%20Panvel%2C%20Navi%20Mumbai%2C%20Maharashtra%20410206!5e0!3m2!1sen!2sin!4v1651764393962!5m2!1sen!2sin"  style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>     
    </div>
  )
}

export default Contact
import React from 'react';
import '../css/Pencilarts.css';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'
import Swal from "sweetalert2";
export default function Pencilarts (){
 function sendEmail(e) {
       e.preventDefault();
       emailjs.sendForm("service_b1u1qsc","template_gzjb8fr", e.target,"user_dPVAaukwy8q1IV78FQj4A").then(res=> {
             console.log(res);

       }).catch(err=> console.log(err));
 }
 
 
 
  
      return (
         
  

        <div className="A"> 
        <Navbar/>
       
              <div className=" commitionbac">
           <div className="del">         
           <center><h1>CUSTOM COMMITIONS</h1></center>
        </div>
        </div>
         
        <div className="Artistgig">
           

          <center>
          <h3 className="artistnameg">#Artist Name</h3>
                <p className="gigp">"Sometimes a client or a designer has a space that cries out for a truly unique work of art. They will often already love my work but can’t find the perfect piece within my existing collection. They need a slightly different size or particular palette of colors. I love being able to create a painting that fits their specific needs. I look at it as an opportunity to collaborate and bring a vision to life using my techniques and talents.

​The commission process involves lots of communication to find out what the client's needs are and all the details are written into a commission agreement. When the painting is getting close to completion I send photographs of the painting so the client has a chance to request any changes they might want.

​I ask for a deposit of 50% to begin and the balance is due upon shipping or delivery of the completed painting. 
​
It's an exciting process that I truly enjoy. I invite you to reach out to me  to discuss your vision for your space." 
​
</p>
<p>#artistname</p>
</center>

        
        
          
          </div>
          <div className="Artistsizes">

              
         <center> <div className="gigall"><p className="gigpx">All work is priced by size.</p> 
         <p className="gigpx">  Commission paintings are available in ANY dimensions. </p>
​              <p className="gigpx">  Below is a list of commonly ordered sizes.</p>
<p className="gigpx">Contact Jennifer to get a price for a specific size or for more information, using the form below.
​<table className="tablexx">
<center><tr>
    <th className="tableth">Size</th>
    <th className="tableth">Price</th>
  </tr>
  <tr>
    <td className="tabletd">24"x36"</td>
    <td className="tabletd">$1800</td>
  </tr>
  <tr>
    <td className="tabletd">24"x36"</td>
    <td className="tabletd">$1800</td>
  </tr>
  <tr>
    <td className="tabletd">24"x36"</td>
    <td className="tabletd">$1800</td>
  </tr>
  <tr>
    <td className="tabletd">24"x36"</td>
    <td className="tabletd">$1800</td>
  </tr>
  <tr>
    <td className="tabletd">24"x36"</td>
    <td className="tabletd">$1800</td>
  </tr>
  </center>
</table>
</p>
</div>
</center>
        
        
          
          </div>

          <div className="commiform"> 
          <p className="formtis">CUSTOM COMMISSION INQUIRY (SPECIAL FOR PENCILE ARTS):</p>
          <p className="Reqtext">*INDICATES REQUIRED FIELD</p>
            <form className="emailformz" onSubmit={sendEmail}>
                  <lable className="formlab">NAME*</lable>
                  <input className = "inputfl" name="name"></input>
                  <lable className="formlab">CONTACT NO*</lable>
                  <input className = "inputfl" type="number" name="no"></input>
                  <label className="formlab">EMAIL*</label>
                  <input className = "inputfl" type="email" name="user_email"></input>
                  <lable className="formlab">IMAGE DRIVE LINK</lable>
                  <input className = "inputfl" name="link"></input>
                  <lable className="formlab">PHOTO </lable>
                  <input className = "inputfl" type="file" name="photo"></input>
                  <label className="formlab">MESSAGE</label>
                  <textarea  className = "inputflar"  name="message" rows='4' />
                  <input className = "inputflz" type="submit" value="send"></input>

            </form>
            
          </div>

          <div className="samplework"> 
          
        <p className="formtis">CUSTOM COMMISSION INQUIRY:</p>
        <p className="Reqtext">*INDICATES REQUIRED FIELD</p>
        <form className="emailformz" onSubmit={sendEmail}>
                  <lable className="formlab">NAME*</lable>
                  <input className = "inputfl" name="name"></input>
                  <lable className="formlab">CONTACT NO*</lable>
                  <input className = "inputfl" type="phone" name="no"></input>
                  <label className="formlab">EMAIL*</label>
                  <input className = "inputfl" type="email" name="user_email"></input>
                  <lable className="formlab">IMAGE DRIVE LINK</lable>
                  <input className = "inputfl" name="link"></input>
                  <lable className="formlab">PHOTO </lable>
                  <input className = "inputfl" type="file" name="photo"></input>
                  <label className="formlab">MESSAGE</label>
                  <textarea  className = "inputflar"  name="message" rows='4' />
                  <input className = "inputflz" type="submit"  value="send"></input>

            </form>
            
          </div>


   
       

       
          
          
  

</div>
      );
  
}
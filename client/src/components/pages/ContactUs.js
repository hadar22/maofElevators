import React , { useState } from 'react'

import '../../App.css'
import Footer from '../Footer';
import './Home.css'
import './ContactUs.css';
import emailjs from 'emailjs-com';


const ContactUs = () =>{
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [address, setAddress] = useState('');
   const [emailSent, setEmailSent] = useState(false);

  

   const submit = () => {
      var x = document.getElementById("snackbar");
      x.className="show";
      if (name && email && phone && address) {
         const serviceId = 'service_8jt4lh3';
         const templateId = 'template_cmhpnlo';
         const userId = 'user_nr1HZgyJuKrWAYlt2uhGy';
         const templateParams = {
             name,
             email,
             phone,
             address
         };

         emailjs.send(serviceId, templateId, templateParams, userId)
             .then(response => console.log(response))
             .then(error => console.log(error));
  
          setName('');
          setEmail('');
          setPhone('');
          setAddress('');
          setEmailSent(true);
          setTimeout(function(){x.className = x.className.replace("show", ""); }, 3000);
          
      } else {
          alert('Please fill in all fields.');
      }
  }
 

   return(
     <div className="container">

        <div className="Filling-in-details"> 
            <h2 className="txt2"> מוזמנים להשאיר פרטים ואנחנו נחזור אליכם </h2>
       
            <from className="form">
               <div className="input">
                  <label  for="name">שם מלא</label><br/>
                  <input name="name" placeholder="...הזן שם מלא" type="text" value={name} onChange={e => setName(e.target.value)}/><br/>
               </div>
               <div className="input">
                  <label for="email">אימייל</label><br/>
                  <input name="email" placeholder="...הזן אימייל" type="email" value={email} onChange={e => setEmail(e.target.value)} /><br/>
               </div>
               <div className="input">
                  <label for="phone">מספר הטלפון</label><br/>
                  <input name="phone" placeholder="...הזן מספר הטלפון" type="number" value={phone} onChange={e => setPhone(e.target.value)}/><br/>
               </div>
               <div className="input">
                  <label for="address">כתובת</label><br/>
                  <input name="address" placeholder="...רחוב +עיר" type="text" value={address} onChange={e => setAddress(e.target.value)}/><br/>
               </div>
               <button onClick={submit} className="send"> שלח </button>
               <div id="snackbar">  הפרטים נשלחו בהצלחה, אנחנו נחזור אלייך</div>
            </from>
         </div>
         <div className="contactInfo">
            <div className="box">
               <div className="icon"> <i class="fas fa-map-marker-alt"></i></div> 
                  <div className="text1">
                     <h3>כתובת</h3>
                     <p>ישראל ב"ק 27, תל אביב</p>
                  </div>
            </div>
            <div className="box">
               <div className="icon"><i class="fas fa-phone"></i> </div> 
                  <div className="text1">
                     <h3>טלפון</h3>
                     <p>054-2280741</p>
                  </div>
            </div>
            <div className="box">
               <div className="icon"> <i class="fas fa-at"></i></div> 
                  <div className="text1">
                     <h3>אימייל</h3>
                     <p>maof.elevators1@gmail.com</p>
               </div>
            </div>
         </div>
   </div>
   );
};

export default ContactUs;
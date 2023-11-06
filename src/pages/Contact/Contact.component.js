import React, { useEffect, useState, useContext,useRef } from "react";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import {
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";
  import { Toast } from 'primereact/toast';
 
const Contact = () => {
    // const { search } = useLocation();
    // const match = search.match(/type=(.*)/);
    // const type = match?.[1]; 
    
    const { type } = useParams();
    console.log("type value",type);
    //let _user = JSON.parse(localStorage.getItem("user")); 

    const toast = useRef(null);
    const [userData, setUserData] = useState({});   
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        type:'',
        emailID: '',
        message: '',
        mobileNumber: '',
        user_Id: '',
        userType_Id: '',
        captcha:'', 
      });

      const [errors, setErrors] = useState({
        emailID: '',
        mobileNumber: ''
      });

      const [captchaText, setCaptchaText] = useState(''); 
    const [userInput, setUserInput] = useState(''); 
    const canvasRef = useRef(null); 


      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        };

    const UpdateConfirmation = (event) => {
     
        event.preventDefault();
        // Perform form validation
        // If there are no errors, you can proceed with form submission
        if (checkValidation()) {
          setIsLoading(true);
          setTimeout(()=>{
            setIsLoading(false);
            navigate("/")
          },5000);

        console.log("came to update form");
       // event.preventDefault();
        console.log('Form Data:', formData);
        // console.log("name value",e.target.name);
        // console.log("data value",e.target.value);
        createenquiry();
        sendenquiry();
        };
    };

    useEffect(() => {      
         
      //console.log('Form Data2:', formData);
      var userLocalStorageData = localStorage.getItem("user")
      if(userLocalStorageData && userLocalStorageData != "" && userLocalStorageData != undefined)
      {
        let _user = JSON.parse(localStorage.getItem("user")); 
        console.log("user data", _user);
        setUserData(_user);
        setFormData({
            ...formData,
              ["type"]: type,
              ["user_Id"]: _user.id,
              ["userType_Id"]: _user.user_Type_Id,
          });
         console.log("formdata",formData);
      }     

      const canvas = canvasRef.current; 
      const ctx = canvas.getContext('2d'); 
      initializeCaptcha(ctx); 
     
       //sendenquiry();
  }, [location.state]);

  const drawCaptchaOnCanvas = (ctx, captcha) => { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
    const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)']; 
    const letterSpace = 150 / captcha.length; 
    for (let i = 0; i < captcha.length; i++) { 
        const xInitialSpace = 25; 
        ctx.font = '20px Roboto Mono'; 
        ctx.fillStyle = textColors[Math.floor( 
            Math.random() * 2)]; 
        ctx.fillText( 
            captcha[i], 
            xInitialSpace + i * letterSpace, 
              
            // Randomize Y position slightly 
            Math.floor(Math.random() * 16 + 25), 
            100 
        ); 
    } 
}; 

const generateRandomChar = (min, max) => 
String.fromCharCode(Math.floor 
    (Math.random() * (max - min + 1) + min)); 

const generateCaptchaText = () => { 
let captcha = ''; 
for (let i = 0; i < 3; i++) { 
    captcha += generateRandomChar(65, 90); 
    captcha += generateRandomChar(97, 122); 
    //captcha += generateRandomChar(48, 57); 
} 
return captcha.split('').sort( 
    () => Math.random() - 0.5).join(''); 
}; 

const initializeCaptcha = (ctx) => { 
  setUserInput(''); 
  const newCaptcha = generateCaptchaText(); 
  setCaptchaText(newCaptcha); 
  drawCaptchaOnCanvas(ctx, newCaptcha); 
  return false;
}; 

const handleUserInputChange = (e) => { 
  setUserInput(e.target.value); 
}; 

  function sendenquiry()
  {
   
  axios
  .post(process.env.REACT_APP_API_URL + `/enquiry/sendenquiry`,formData)
  .then((response) => {      
      if (response.data.success) {
          console.log("=============== enquiry sent successfully===============")
         
          //toast.current.show({ severity: 'success', summary: 'Success', detail: 'enquiry sent successfully.', life: 3000 });
      } else {
        //toast.current.show({ severity: 'error', summary: 'Error', detail: response.data.msg, life: 3000 });
 
      }
  })
  .catch((error) => {
      console.error("There was an error!", error);
  });
}

    function createenquiry()
    {
    axios
    .post(process.env.REACT_APP_API_URL + `/enquiry/createenquiry`,formData)
    .then((response) => {      
        if (response.data.success) {
            console.log("=============== enquiry added successfully===============")
           
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Mail has sent successfully.', life: 3000 });
        } else {
          toast.current.show({ severity: 'error', summary: 'Error', detail: response.data.msg, life: 3000 });
   
        }
    })
    .catch((error) => {
        console.error("There was an error!", error);
    });
}

   
      const checkValidation = () => {
        console.log("type",type);
        console.log("formdata",formData);
        const newErrors = {};
        const indianMobileNumberRegex = /^[6-9]\d{9}$/;
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,15}$/;
    
        const emailRex =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!formData.emailID) {
          toast.current.show({ severity: 'error', summary: 'Error', detail: "Please enter email address", life: 3000 });
 
          newErrors.emailID = 'Please enter email address';
        }
    
       else if (formData.emailID && !emailRex.test(formData.emailID)) {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Invalid email address', life: 3000 });
 
          newErrors.emailID = 'Invalid email address';
        }
    
        else  if (!formData.mobileNumber) {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter mobile number', life: 3000 });
 
          newErrors.mobileNumber = 'Please enter mobile number';
        } 
        
        else if (formData.mobileNumber && !indianMobileNumberRegex.test(formData.mobileNumber)) {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter mobile number', life: 3000 });
 
          newErrors.mobileNumber = 'Invalid mobile number';
        }

        else if (!formData.message) {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter message', life: 3000 });
 
          newErrors.emailID = 'Invalid email address';
        }
        else if(!formData.captcha)
        {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter captcha', life: 3000 });
          newErrors.captcha = 'Invalid captcha';
        }
        else if(formData.captcha && captchaText != formData.captcha)
        {
          toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter valid captcha', life: 3000 });
          newErrors.captcha = 'Invalid captcha';
        }
    
        
        setErrors(newErrors);
        console.log(newErrors);
    
        // If there are no errors, you can proceed with form submission
        if (Object.keys(newErrors).length === 0) {
          //setIsLoading(false);
          // Perform your form submission logic here
          //console.log('Form submitted successfully');
          return true;
        } else {
          return false;
        }
      };
  //     const handleSuccess = () => alert('Captcha matched!');
	// const handleFailure = () => alert('Captcha does not match');



    return (
        <>
<div class="ritekhana-subheader-view1">
    <span class="ritekhana-banner-transparent"></span>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Contact Us</h1>
            </div>
            <ul class="ritekhana-breadcrumb">
                <li><a href="#">Home</a></li>
                <li><i class="fa fa-angle-right"></i> Contact </li>
            </ul>
        </div>
    </div>
    <div>
    <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="ritekhana-contact-form">
                       <span>Talk To Us Today</span>
                        <Form method="POST" onSubmit={UpdateConfirmation}>
                           <ul>
                                <li>
                                   <i class="fa fa-user"></i>
                                   <Input type="text" placeholder="Form Type" name="type" value={type} readOnly />
                               </li>
                               {/* <li>
                                   <i class="fa fa-user"></i>
                                   <Input type="text" placeholder="Name" name="name"/>
                               </li> */}
                               <li>
                                   <i class="fa fa-paper-plane"></i>
                                   <Input type="text" placeholder="Email"  name="emailID" required="" id="emailID" value={formData.emailID} onChange={handleInputChange} onBlur={checkValidation}/>
                                    {/* <span className="error">{errors.emailID}</span> */}
                               </li>
                               <li>
                                   <i class="fa fa-phone"></i>
                                   <Input type="text" name="mobileNumber" placeholder="phone" required="" id="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} onBlur={checkValidation}/>
                                    {/* <span className="error">{errors.mobileNumber}</span> */}
                               </li>
                              
                               <li>
                                   <i class="fa fa-envelope"></i>
                                   <textarea placeholder="Message" name="message" id="message" value={formData.message} onChange={handleInputChange}></textarea>
                               </li>
                               <li>
                               <div className="float-left"> 
                               <canvas ref={canvasRef} 
                                    width="200"
                                    height="70"
                                    className="border border-primary float-left"
                                    > 
              
                                </canvas> 
                                <button type="button" className="btn btn-primary m-auto" id="reload-button" onClick={ 
                                    () => initializeCaptcha( 
                                        canvasRef.current.getContext('2d'))}> 
                                    Reload 
                                </button> 
                                <Input type="text" placeholder="Catcha"  name="captcha" required="" id="captcha" value={formData.captcha} onChange={handleInputChange} onBlur={checkValidation}/>
                               
                                </div>
                               </li>

                               <li> <Button type="submit" color="primary" disabled={isLoading?true:false} >{ isLoading && <CircularProgress size={15} color="inherit" />} Send Message</Button> </li>
                           </ul>
                       </Form>
                       </div>
                </div>
            </div>
        </div>
    </div>
</div> 



<Toast ref={toast} />
        </>   
    );
};

export default Contact;
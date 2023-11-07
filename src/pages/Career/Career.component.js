import React, { useEffect, useState, useContext, useRef } from "react";

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

const CareerComponent = () => {
  // const { search } = useLocation();
  // const match = search.match(/type=(.*)/);
  // const type = match?.[1]; 

  const { type } = useParams();
  console.log("type value", type);
  //let _user = JSON.parse(localStorage.getItem("user")); 

  const toast = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: '',
    emailID: '',
    message: '',
    mobileNumber: '',
    user_Id: '',
    userType_Id: '',
    captcha: '',
    location: '',
    technologies: '',
    qualification: ''
  });

  const [errors, setErrors] = useState({
    emailID: '',
    mobileNumber: '',
    location: '',
    technologies: '',
    qualification: '',
    message: ''
    ,
  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkValidation = () => {
    console.log("type", type);
    console.log("formdata", formData);
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

    else if (!formData.mobileNumber) {
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
    else if (!formData.qualification) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please  enter qualificaion', life: 3000 });

      newErrors.qualification = 'Enter Qulaification';


    }
    else if (!formData.location) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter location', life: 3000 });

      newErrors.qualification = 'Enter Location';


    }
    else if (!formData.location) {
      toast.current.show({ severity: 'error', summary: 'Error', detail: 'Please enter technologies', life: 3000 });

      newErrors.qualification = 'Enter Technologies';


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

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, file: file });
  };

  return (
    <>
      <div className="page-title-section">
        <div className="container"><h2>Career</h2></div>
      </div>
      <div className="page-main-container">

        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="ritekhana-contact-form">
                {/* <span>Talk To Us Today</span> */}
                <Form>
                  <ul>
                    <li>
                      <i class="fa fa-user"></i>
                      <Input type="text" placeholder="Form Type" name="type" value={type} readOnly />
                    </li>

                    <li>
                      <i class="fa fa-paper-plane"></i>
                      <Input type="text" placeholder="Email" name="emailID" required="" id="emailID" value={formData.emailID} onChange={handleInputChange} onBlur={checkValidation} />
                      {/* <span className="error">{errors.emailID}</span> */}
                    </li>
                    <li>
                      <i class="fa fa-phone"></i>
                      <Input type="text" name="mobileNumber" placeholder="phone" required="" id="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} onBlur={checkValidation} />
                      {/* <span className="error">{errors.mobileNumber}</span> */}
                    </li>

                    <li>
                      <i class="fa fa-envelope"></i>
                      <textarea placeholder="Message" name="message" id="message" value={formData.message} onChange={handleInputChange}></textarea>
                    </li>
                    <li>
                      <i class="fa fa-envelope"></i>
                      <Input type="text" name="qualifications" placeholder="Qualifications" required="" id="qualifications" value={formData.qualifications} onChange={handleInputChange} onBlur={checkValidation} />

                      {/* <textarea placeholder="Qualifications" name="qualifications" id="qualifications" value={formData.message} onChange={handleInputChange}></textarea> */}
                    </li>
                    <li>
                      <i class="fa fa-envelope"></i>
                      <Input type="text" name="technologies" placeholder="Technologies" required="" id="technologies" value={formData.technologies} onChange={handleInputChange} onBlur={checkValidation} />

                      {/* <textarea placeholder="Technologies" name="technologies" id="technologies" value={formData.technologies} onChange={handleInputChange}></textarea> */}
                    </li>
                    <li>
                      <i class="fa fa-envelope"></i>
                      <Input type="text" name="location" placeholder="Location" required="" id="location" value={formData.location} onChange={handleInputChange} onBlur={checkValidation} />

                      {/* <textarea placeholder="Location" name="location" id="location" value={formData.location} onChange={handleInputChange}></textarea> */}
                    </li>
                    <li>
                      <i className="fa fa-paper-plane"></i>
                      <Input type="file" placeholder="Upload file" name="file" required="" id="file" onChange={handleFileChange} />
                    </li>

                  </ul>
                </Form>
              </div>
            </div>
          </div>
        </div>

      </div>


      <Toast ref={toast} />
    </>
  );
};

export default CareerComponent;
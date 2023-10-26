import React, { useEffect, useState, useContext,useRef } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core"
import {
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";
import ChangePassword from "./ChangePassword.component";
import { Toast } from 'primereact/toast';


const Profile = () => {
    const toast = useRef(null);
    const [componentType, setcomponentType] = useState("Profile");   
    const [userData, setUserData] = useState({});   
    const location = useLocation();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        user_id: '',
        email: '',
        phone: ''
      });

      const [errors, setErrors] = useState({
        email: '',
        phone: ''
      });

   

    let jsonData = {};

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
          },5000);

        console.log("came to update form");
        event.preventDefault();
        console.log('Form Data:', formData);
        // console.log("name value",e.target.name);
        // console.log("data value",e.target.value);
        updateprofileByuserId(formData);
        };
    };
    

    useEffect(() => {
        
        console.log("update function");
        console.log('Form Data2:', formData);
        let _user = JSON.parse(localStorage.getItem("user")); 
        setUserData(_user);
        setFormData({
            ...formData,
            ["user_id"]: _user.id,
            ["email"]:_user.emailID,
            ["phone"] : _user.mobileNumber
          });
         console.log("formdata",formData);
     
   
    }, []);

    function updateprofileByuserId()
    {
   

    axios
    .post(process.env.REACT_APP_API_URL + `/user/updateuserinfo`,formData)
    .then((response) => {      
        if (response.data.success) {
            console.log("=============== user updated successfully===============")
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Profile data updated successfully.', life: 3000 });
            userData.emailID = formData.email;
            userData.mobileNumber = formData.phone
            localStorage.setItem("user",JSON.stringify(userData));
        } else {
          toast.current.show({ severity: 'error', summary: 'Error', detail: response.data.msg, life: 3000 });
   
        }
    })
    .catch((error) => {
        console.error("There was an error!", error);
    });
}

const checkValidation = () => {
    console.log("formdata",formData);
    const newErrors = {};
    const indianMobileNumberRegex = /^[6-9]\d{9}$/;
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,15}$/;

    const emailRex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formData.email) {
      newErrors.email = 'Please enter email address';
    }

    if (formData.email && !emailRex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Please enter mobile number';
    } 
    
    if (formData.phone && !indianMobileNumberRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid mobile number';
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


    const clickHandler = (event, type) => {
        event.preventDefault()
        //scrollToElement();
            if(type == "ChangePassword")
            {
                setcomponentType("ChangePassword");
            }
            // else if(type == "Orders")
            // {
            //     setcomponentType("Orders");
            // }
            // else if(type == "Logout")
            // {
            //     localStorage.removeItem("token");
            //     navigate("/Login");
            // }
            else
            {
                setcomponentType("Profile");
            }    

        }


    return (
        <>
         <div>
         <div className="ritekhana-main-content home-page">         
            <div className="ritekhana-main-section">
                <div className="container">
                    <div className="ritekhana-row">
                            <div className="ritekhana-column-3 ritekhana-right-padd">
                            <div className="ritekhana-dashboard-nav">
                                <ul>
                                <li><a href="#" onClick={(event) => clickHandler(event, "Profile")}>
                                <i className="fa fa-user"></i> Edit Profile{" "} </a></li>
                                <li><a href="#" onClick={(event) => clickHandler(event, "ChangePassword")}>
                                <i className="fa fa-user"></i>  Change Password{" "} </a></li>
                                {/* <li><a href="#" onClick={(event) => clickHandler(event, "Logout")}>
                                <i className="fa fa-user"></i>  Logout{" "} </a></li>                                  */}
                                </ul>
                            </div>
                        </div>

                         {/* Profile Start */}
                        {componentType == "Profile"? 
                         <div>
                         <div className="ritekhana-column-5 ritekhana-right-padd ritekhana-left-padd">                           
                            <div className="ritekhana-dashboard-box">                            
                                <span className="ritekhana-dashboard-section-title">Profile</span>                            
                                <div className="ritekhana-priceplane-list">
                                    <ul>
                                        <li>{userData.emailID}</li>
                                        <li>{userData.mobileNumber}</li>
                                    </ul>
                                </div>
                            </div>

                            </div>


                            <div className="ritekhana-column-4 ritekhana-right-padd ritekhana-left-padd">
                            <div className="ritekhana-dashboard-box">                            
                                <span className="ritekhana-dashboard-section-title">Edit Profile</span>                            
                                <Form className="ritekhana-dashboard-form" onSubmit={UpdateConfirmation}>
                                    <ul className="ritekhana-row">
                                        <li className="ritekhana-column-12">
                                            <label>Email *</label>
                                            <Input type="text" placeholder="Email"  name="email" required="" id="email" value={formData.email} onChange={handleInputChange} onBlur={checkValidation}/>
                                            <span className="error">{errors.email}</span>
                                        </li>
                                        <li className="ritekhana-column-12">
                                            <label>Mobile Number *</label>
                                            <input type="text" name="phone" placeholder="phone" required="" id="phone" value={formData.phone} onChange={handleInputChange} onBlur={checkValidation}/>
                                            <span className="error">{errors.phone}</span>
                                        </li>
                                        <li className="ritekhana-column-12">  <Button type="submit" color="primary" disabled={isLoading?true:false} >{ isLoading && <CircularProgress size={15} color="inherit" />} Update Profile</Button> </li>
                                    </ul>
                                </Form>
                            </div>


                            </div> 

                         </div>
                         : null}
                      
                         {/* Profile End */}

                         { componentType == "ChangePassword"?
                           <ChangePassword />
                           :null 
                         }

                     

                    </div>
                </div>
            </div>
            </div>
         </div>
         <Toast ref={toast} />
        </>
    );
};

export default Profile;

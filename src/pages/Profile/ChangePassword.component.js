import React, { useEffect, useState, useContext,useRef } from "react";
import { useLocation } from "react-router-dom";
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
  import { Toast } from 'primereact/toast';
  import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const [orderData, setOrderData] = useState({});
    const [outletName, setOutletName] = useState(null);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const toast = useRef(null);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        old_password:'',
        password: '',
        confirm_password: ''
      });

      const [errors, setErrors] = useState({
        old_password:'',
        password: '',
        confirm_password: ''
      });

    let user = JSON.parse(localStorage.getItem("user"));
        console.log("user info",user);

    let jsonData = {};

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        };

    const UpdatePassword = (event) => {
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

    const checkValidation = () => {
        console.log("formData",formData)
        const newErrors = {};
        const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%^*?&])[A-Za-z\d@$!%^*?&]{8,15}$/;
    
        if(!formData.old_password) {
            newErrors.old_password = "Please enter old password";
          }
        if(!formData.password) {
          newErrors.password = "Please enter password";
        }
    
        if (formData.password && !strongPasswordRegex.test(formData.password) ) {
          newErrors.password = 'Password must be at least 8 characters long, one upper case letter, one lower case letter, one numerical digit and one special character';
        }
    
        if (!formData.confirm_password) {
          newErrors.confirm_password ='Please enter confirm password';
        }
    
        if (formData.confirm_password && formData.confirm_password !== formData.password) {
          newErrors.confirm_password = 'Passwords do not match';
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

    useEffect(() => {
       
    }, []);


    function updateprofileByuserId(formData)
    {
        console.log("update function");
        console.log('Form Data2:', formData);
    let _user = JSON.parse(localStorage.getItem("user"));   
    let userid ={
        User_Id:_user.id
    } ;
    if(user !== undefined){
        let userId = user?.id ? user.id+"" : "";
        console.log("userinfo userid value",userId);
        // passegnerInfo.User_Id =  userId ;
        console.log("userinfo password value",formData.password);

        jsonData = {
            User_Id: userId,
            password: formData.password,
            old_password: formData.old_password
          };

          console.log("print json",jsonData);
    }

    axios
    .post(process.env.REACT_APP_API_URL + `/user/changepassword`,jsonData)
    .then((response) => {
      console.log("===============user info===============")
      console.log(response.data.body)
        if (response.data.success) {
            console.log("=============== user updated successfully===============")
            toast.current.show({ severity: 'success', summary: 'Success', detail: 'Password updated successfully.', life: 3000 });
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/Login");
        } else {
            toast.current.show({ severity: 'error', summary: 'error', detail: response.data.msg, life: 3000 });
   
        }
    })
    .catch((error) => {
        console.error("There was an error!", error);
    });
}

    return (
        <>
        
         <div>
         <div className="ritekhana-column-6 ritekhana-right-padd ritekhana-left-padd">                         
                <div className="ritekhana-dashboard-box">                          
                <span className="ritekhana-dashboard-section-title">Change Password</span>                             
                    {/* <form class="ritekhana-dashboard-form" method="post" action="https://traindhaba.com/post_change_password"> */}
                    <Form className="ritekhana-dashboard-form mt-3" onSubmit={UpdatePassword}>
                        <ul className="ritekhana-row pl-0">
                            <li className="ritekhana-column-12">
                                <label>Old Password *</label>
                                <input type="password" name="old_password" id="old_password" value={formData.old_password} onChange={handleInputChange} placeholder="Old Password" required="" />
                                <span className="error">{errors.old_password}</span>
                            </li>
                            <li className="ritekhana-column-12">
                                <label>New Password *</label>
                                <input type="password" name="password" required="" id="password" placeholder="New Password" value={formData.password} onChange={handleInputChange} />
                                <span className="error">{errors.password}</span>
                            </li>
                            <li className="ritekhana-column-12">
                                <label>Confirm Password *</label>
                                <input type="password" name="confirm_password" required="" id="confirm_password" value={formData.confirm_password} onChange={handleInputChange} placeholder="Confirm New Password" />
                                <span className="error">{errors.confirm_password}</span>
                            </li>
                            {/* <li class="ritekhana-column-12"> <input type="submit" class="ritekhana-dashboard-submit-btn ritekhana-bgcolor ritekhana-border-color ritekhana-colorhover" value="Change Password" /> </li> */}
                            <li className="ritekhana-column-12"><Button type="submit" color="primary" disabled={isLoading?true:false} >{ isLoading && <CircularProgress size={15} color="inherit" />} Change Password</Button> </li>
                        </ul>
                    </Form>

                </div>                      

            </div>
         </div>
         <Toast ref={toast} />
        </>
    );
};

export default ChangePassword;

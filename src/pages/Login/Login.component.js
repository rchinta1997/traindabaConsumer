import React,  { useRef,  useState,useEffect, useContext } from "react";
import {
    Form,
    FormFeedback,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@material-ui/core"
import OpenNotification from "../../components/Notifications"
import MantineReactTableComponent from "../../utility/mantineReactTable.component"
import styles from './Login.css';
import cartContext from "../../Context/cart-context";
import { Toast } from 'primereact/toast';


const Login = () => {
  const elementRef = useRef(null);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [validEmailMsg,setValidEmailMsg]  = useState("");
  const context = useContext(cartContext);
  const toast = useRef(null);

  const [formData, setFormData] = useState({
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    mobile: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);
  const togglePasswordVisibility = () => {    
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

    const handleChange = (e) => { 
      //setIsLoading(false);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleForgotPassword = (e) => { 
    setEmail("");
    setIsLoading(false);
    setIsForgotPassword(true);
};

const handleForgotPasswordEmail = (e) => { 
  setEmail(e.target.value);
  //setIsLoading(false);
  //setIsForgotPassword(true);
};

const handleLogin = (e) => { 
  //setIsLoading(false);
  setIsLoginPage(true);
  setIsForgotPassword(false);
};

const handleForgotPasswordSubmit = (e) => {
  e.preventDefault();
  const emailRex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Perform form validation
  // If there are no errors, you can proceed with form submission
  setValidEmailMsg("");
  if (!email) {
    setValidEmailMsg('Please enter email address');
  }

  if (email && !emailRex.test(email)) {
    setValidEmailMsg('Invalid email address');
  }
  if (email && emailRex.test(email)) {
 
    let user = {
      email: email,        
     
    };
    axios
      .post(process.env.REACT_APP_API_URL + "/user/forgotpassword", user)
      .then((response) => {
        console.log("response=",response.data)
        if (response.data) {
          toast.current.show({ severity: 'success', summary: 'Success', detail: 'New password has sent to your registered email address.', life: 3000 });
          setTimeout(()=>{
            setIsForgotPassword(false);
            setIsLoading(false);
           
          },2000);
        }
        else
        {
          //alert(response.data.error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
    };
    // Perform your form submission logic here
    console.log('Form submitted successfully');
  
};

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    // If there are no errors, you can proceed with form submission
    console.log(checkValidation())
    if (checkValidation()) {
      setIsLoading(true);
      setTimeout(()=>{
        setIsLoading(false);
      },5000);

      let user = {
        emailID: formData.email,         
        password: formData.password,
      };
      axios
        .post(process.env.REACT_APP_API_URL + "/user/authenticate", user)
        .then((response) => {
          if (response.data.success) {
            localStorage.setItem("token", response.data.body.token);
            localStorage.setItem("user", JSON.stringify(response.data.body));

            if(context?.cart?.length > 0){    
              let passengerData = localStorage.getItem("PassengerInfo");
              if(passengerData)
              {
                 let passengerInfo = JSON.parse(passengerData);
                 passengerInfo["email"] = response.data.body?.emailID;
                 passengerInfo["mobileNumber"] = response.data.body?.mobileNumber;
                 localStorage.setItem("PassengerInfo", JSON.stringify(passengerInfo));
              }
             
              navigate("/Checkout");
            }else{
              setLoggedIn(true);
              navigate("/");
            }
            
          }
          else
          {
            toast.current.show({ severity: 'error', summary: 'Error', detail: response.data.error, life: 3000 });
   
            //alert(response.data.error);
          }
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
      };
      // Perform your form submission logic here
      console.log('Form submitted successfully');
    
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Perform form validation
    // If there are no errors, you can proceed with form submission
    if (checkValidation()) {
      setIsLoading(true);
      setTimeout(()=>{
        setIsLoading(false);
      },5000);

      var user_type_id = '636a4769ab61d6a52e52d460';
        console.log("=====submitForm============"+process.env.REACT_APP_BASE_URL)
        let user = {
          emailID: formData.email,
          mobileNumber: formData.mobile,
          password: formData.password,  
          userType_Id: user_type_id,
          isActive:true
        };
        axios
          .post(process.env.REACT_APP_API_URL + "/user/create", user)
          .then((response) => {
            console.log(response)
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            if (response.data.success) {
              setIsLoading(false);
              localStorage.setItem("token", response.data.body.token);
              localStorage.setItem("user", JSON.stringify(response.data.body));

             
              toast.current.show({ severity: 'success', summary: 'Success', detail: 'Registration Successful.', life: 3000 });
              navigate("/");
            }
            else
            {
              alert(response.data.error);
            }
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      };
      // Perform your form submission logic here
      console.log('Form submitted successfully');
    
  };


  const checkValidation = () => {
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

    if (!formData.mobile && !isLoginPage) {
      newErrors.mobile = 'Please enter mobile number';
    } 

    if (formData.mobile && !indianMobileNumberRegex.test(formData.mobile) && !isLoginPage) {
      newErrors.mobile = 'Invalid mobile number';
    }

    if(!formData.password) {
      newErrors.password = "Please enter password";
    }

    if (formData.password && !strongPasswordRegex.test(formData.password) && !isLoginPage) {
      newErrors.password = 'Password must be at least 8 characters long, one upper case letter, one lower case letter, one numerical digit and one special character';
    }

    if (!formData.confirmPassword && !isLoginPage) {
      newErrors.confirmPassword ='Please enter confirm password';
    }

    if (formData.confirmPassword && formData.confirmPassword !== formData.password && !isLoginPage) {
      newErrors.confirmPassword = 'Passwords do not match';
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





  const navigate = useNavigate();
  const validateEmail = (e) => {
  const emailRex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        let validate = {};
    
        if (emailRex.test(e.target.value)) {
          validate.emailState = "has-success";
        } else {
          validate.emailState = "has-danger";
        }
    
        setValidate(validate);
      };

const validateMobileNumber = (e) => {
const mobileRex = /^\d{10}$/;

if (mobileRex.test(e.target.value)) {
    validate.mobileState = "has-success";
  } else {
    validate.mobileState = "has-danger";
  }

  setValidate(validate);
};

useEffect(() => {
    setValidEmailMsg("");
    scrollToElement();
    
  }, [context]);

  const scrollToElement = () => {
    console.log("======elementRef.current=====");
    console.log(elementRef.current);
    elementRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const clickHandler = (event, type) => {
    scrollToElement();
        if(type === "Signup")
        {
            setIsLoading(false);
            setIsLoginPage(false);
        }
        else
        {
            setIsLoading(false);
            setIsLoginPage(true);
        }

        
		//alert(type);
	}


  return (
    <>   
      
  <div className="ritekhana-main-section ritekhana-services-view1-full" ref={elementRef}>
        <div className="container" >         
        {loggedIn}
        {/* <button onClick={scrollToElement}>Scroll to Element</button> */}
          {isLoginPage && !loggedIn && !isForgotPassword ?   
          <div className="row">
                <div className="col-12 col-md-12">
                    <div className="ritekhana-fancy-title">
                        <h2 className="ritekhana-color">Login</h2>                       
                    </div>
                    <div className="ritekhana-login-box-wrap">
                    <div className="ritekhana-login-box">
                    <ul className="login_row">
                    <Form className="form" onSubmit={handleLoginSubmit}>
                        <FormGroup>
                            <li><Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="example@example.com"
                                valid={validate.emailState === "has-success"}
                                invalid={validate.emailState === "has-danger"}
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={checkValidation}
                            />
                            <i className="login-box-iconin far fa-user"></i> 
                            </li>
                            
                            <FormFeedback>
                                Uh oh! Looks like there is an issue with your email. Please input
                                a correct email.
                            </FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <li> <Input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    id="examplePassword"
                                    placeholder="********"
                                    value={formData.password}
                                    onChange={handleChange}
                                    onBlur={checkValidation}
                                    />
                            <i className="login-box-iconin far fa-eye" onClick={togglePasswordVisibility}></i> 
                            </li>
                        </FormGroup>
                            <li><Button color="primary"  disabled={isLoading?true:false}>{ isLoading && <CircularProgress size={15} color="inherit" />} Login</Button></li>
                            <div className="forgot-pass">
                                <a href="javascript:;" className="fg_show" onClick={handleForgotPassword} >Forgot Password?</a><br></br>
                            </div>
                            <li><p>Don't have an account? <a href="#" className="ritekhana-color" onClick={(event) => clickHandler(event, "Signup")}>Register Here</a></p></li>
                    </Form>
                    </ul>
                    </div>
                    </div>
                </div>

            </div> : null}

          {!isLoginPage && !loggedIn   && !isForgotPassword ?
             <div className="row">
             <div className="col-12 col-md-12">
                 <div className="ritekhana-fancy-title">
                     <h2 className="ritekhana-color">SignUp</h2>                       
                 </div>
                 
                 <div className="ritekhana-login-box-wrap">
                 <div className="ritekhana-login-box">
                 <ul className="login_row">
                 <Form className="form" onSubmit={handleSignupSubmit}>                
                     <FormGroup>
                         <li><Input
                             type="email"
                             name="email"
                             id="signupemail"
                             placeholder="example@example.com"
                             value={formData.email}
                             onChange={handleChange}
                             onBlur={checkValidation}
                         />
                         <i className="login-box-iconin far fa-user"></i> 
                         </li>
                         <span className="error">{errors.email}</span>
                         <FormFeedback>
                             Uh oh! Looks like there is an issue with your email. Please input
                             a correct email.
                         </FormFeedback>
                     </FormGroup>
                     <FormGroup>
                         <li><Input
                             type="number"
                             name="mobile"
                             id="mobile"
                             placeholder="Mobile Number"
                             
                             value={formData.mobile}
                             onChange={handleChange}
                             onBlur={checkValidation}
                             
                         />
                         <i className="login-box-iconin mobile fa fa-mobile"></i> 
                         </li>
                         <span className="error">{errors.mobile}</span>
                         <FormFeedback>
                             Uh oh! Looks like there is an issue with your mobile number. Please input
                             a correct mobile number.
                         </FormFeedback>
                     </FormGroup>
                     <FormGroup>
                         <li> <Input
                                 type={showPassword ? 'text' : 'password'}
                                 name="password"
                                 id="examplePassword"
                                 placeholder="********"
                                 value={formData.password}
                                 onChange={handleChange}
                                 onBlur={checkValidation}
                                 />
                         <i className="login-box-iconin far fa-eye" onClick={togglePasswordVisibility}></i> 
                         </li>
                         <span className="error">{errors.password}</span>
                     </FormGroup>
                     <FormGroup>
                         <li> <Input
                                 type={showConfirmPassword ? 'text' : 'password'}
                                 name="confirmPassword"
                                 id="confirmPassword"
                                 placeholder="********"
                                 value={formData.confirmPassword}
                                 onChange={handleChange}
                                 onBlur={checkValidation}
                                 />
                         <i className="login-box-iconin far fa-eye" onClick={toggleConfirmPasswordVisibility}></i> 
                         </li>
                         <span className="error">{errors.confirmPassword}</span>
                     </FormGroup>
                         <li><Button type="submit" color="primary" disabled={isLoading?true:false} >{ isLoading && <CircularProgress size={15} color="inherit" />} Submit</Button></li>
                         <div className="forgot-pass">
                             <a href="javascript:;" className="fg_show" onClick={handleForgotPassword}>Forgot Password?</a><br></br>
                         </div>
                         <li><p>Don't have an account? <a href="#" className="ritekhana-color" onClick={(event) => clickHandler(event, "Login")}>Login Here</a></p></li>
                 </Form>
                 </ul>
                 </div>
                 </div>
             </div>

        </div>:null} 
         { isForgotPassword ?
          <div className="row">
          <div className="col-12 col-md-12">
              <div className="ritekhana-fancy-title">
                  <h2 className="ritekhana-color">Forgot Password</h2>                       
              </div>
              <div className="ritekhana-login-box-wrap">
              <div className="ritekhana-login-box">
              <div class="fg_password" >
                                <h2>Forgot Password</h2>
                                <ul>
                                    <li><Input type="email" placeholder="Email Address" id="email" name="email" value={email}
                                 onChange={handleForgotPasswordEmail} required=""/> <i className="login-box-iconin email far fa-envelope"></i></li>
                                 <span className="error">{validEmailMsg}</span>
                                    <div className="forgot-pass">
                                        <a href="#" className="ritekhana-header-btn" id="reset_pwd" onClick={handleForgotPasswordSubmit} disabled={isLoading?true:false} >{ isLoading && <CircularProgress size={15} color="inherit" />}Reset Password</a>
                                    </div>
                                    <div className="forgot-pass">
                                        <a href="javascript:;" className="login_show" onClick={handleLogin}>Click here to Login</a><br></br>
                                    </div>
                                </ul>
                            </div>
              </div>
              </div>
          </div>

      </div>
          :null}  
           
        </div>
    </div>
   
   <Toast ref={toast} />
    </>
  );
};

export default Login;

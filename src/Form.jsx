import React,{ useState } from "react"
import "./Form.css"


function Form(){
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [confirmPassword , setConfirmPassword] = useState("");

    const [validatedEmail,setValidatedEmail] = useState(false);
    const [validatedPassword,setValidatedPassword] = useState(false);
    const [validatedConfirmPassword,setvalidatedConfirmPassword] = useState(false);

    function handleEmail(e){
        const newEmail = e.target.value;
        setEmail(newEmail);
        setValidatedEmail(validateEmail(newEmail));
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    function handlePassword(e){
        const newPassword = e.target.value;
        setPassword(newPassword);
        setValidatedPassword( newPassword.length >= 8);
    }

    function handleConfirmPassword(e){
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setvalidatedConfirmPassword(newConfirmPassword === password);
    }
    
   

      function handleSubmit(event){
         event.preventDefault();
         if(validatedEmail && validatedPassword && validatedConfirmPassword){
            alert("form submitted successfully");
         }else{
            alert("can’t submit the form");
         }
      }
    

    return(
      <div className='main'>
        <div className="form" onSubmit={handleSubmit}>
          <form className="form">
            <label for="email">Email</label>
            <input type="email"
                className='input'
                placeholder="  Enter your email"
                 onChange={handleEmail}
                // value = {email}
                required
            />
              {!validatedEmail && <span className="validate" style={{ color: 'red' }}>Please enter a valid email</span>}

            <label for="Password">Password</label>
            <input type="Password"
                className='input'
                placeholder=" Enter Password" 
                // value = {password}
                onChange={handlePassword}
                required
            />
           {!validatedPassword && <span className="validate" style={{ color: 'red' }}>Password must be at least 8 characters</span>}

            <label for="Password"> Confirm Password</label>
            <input type="Password"
                className='input'
                placeholder="  Re-enter Password" 
                // value = {confirmPassword}
                onChange={handleConfirmPassword}
                required
            />
           {!validatedConfirmPassword && <span className="validate"  style={{ color: 'red' }}>Password do not match</span>}

            <div className='divBtn'>
                <button
                 className='btn' 
                 type='submit'>
                    Sign Up
                </button>
            </div>
          </form>
        </div>
      </div>
    )
  }



  export default Form;
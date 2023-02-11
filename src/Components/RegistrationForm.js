import React, {useState,setState} from 'react';
import './style.css';
function RegistrationForm() {
    
    const [Name, setName] = useState(null);
   
    const [email, setEmail] = useState(null);
    const [phoneNo,setphoneNo] = useState(null);
    const [Address,setAddress] = useState(null);

    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "Name"){
            setName(value);
        }
        
        if(id === "email"){
            setEmail(value);
        }
        if(id === "phoneNo"){
            setphoneNo(value);
        }
        if(id === "Address"){
            setAddress(value);
        }

    }

    const handleSubmit  = () => {
    
}

    return(
        <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="Name"> Name </label>
                    <input className="form__input" type="text" value={Name} onChange = {(e) => handleInputChange(e)} id="Name" placeholder=" Name"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
                </div>
                <div className="phoneNo">
                    <label className="form__label" for="phoneNo">phoneNo </label>
                    <input className="form__input" type="phoneNo"  id="phoneNo" value={phoneNo} onChange = {(e) => handleInputChange(e)} placeholder="PhoneNo"/>
                </div>
                <div className="Address">
                    <label className="form__label" for="Address">Confirm Password </label>
                    <input className="form__input" type="Address" id="Address" value={Address} onChange = {(e) => handleInputChange(e)} placeholder="Address"/>
                </div>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
            </div>
            <div class="footer">
                <button onClick={()=>handleSubmit()} type="submit" class="btn1">View Members</button>
            </div>

        </div>
       
    )       
}

export default RegistrationForm
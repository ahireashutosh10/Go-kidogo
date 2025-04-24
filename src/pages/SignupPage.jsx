import React, { useState, useEffect } from "react";
import axios from "axios";
import "./SignupPage.css"; // External CSS
import logo from '../assets/logo-sticky.svg'; // adjust path if needed

const SignupPage = () => {
  const [formData, setFormData] = useState({
    // salutation: "Lord",
    // forename: "",
    // surname: "",
    // email: "",
    // mobile: "",
    // street: "",
    // houseNumber: "",
    // deliveryArea: "Dornbusch-60320",
    // floor: "",
    // doorbellName: "",
    // password: "",
    // confirmPassword: "",
    // termsAccepted: false,
    // newsletter: false,
    // ipadd: "", // ADD IP field

    
      "title": "",
      "lastname": "",
      "firstname": "",
      "gender": "",
      "mobile": "",
      "email": "",
      "terms": "",
      "newsl": "",
      "passwd": "",
      "ipadd": "",
      "smssub": "",
      "emailOTPVerified" : 1
      
  });

  // Fetch IP address when component mounts
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await axios.get('https://api.ipify.org?format=json');
        setFormData(prev => ({ ...prev, ipadd: res.data.ip }));
      } catch (err) {
        console.error('Error fetching IP:', err);
      }
    };
    fetchIP();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Prepare payload matching backend expectations
      const payload = {
        title: formData.title,
        firstname: formData.firstname,
        lastname: formData.lastname,
        gender: formData.gender,
        mobile: formData.mobile,
        email: formData.email,
        terms: formData.terms,
        newsl: formData.newsl,
        passwd: formData.passwd,
        ipadd: formData.ipadd,
        smssub: formData.smssub,
        emailOTPVerified: formData.emailOTPVerified,
        // termsAccepted: formData.termsAccepted ? '1' : '0',
        // newsletter: formData.newsletter ? '1' : '0',
        // ipadd: formData.ipadd,
      };

      const response = await axios.post(
        '/api/api.php/customersignup',
        payload
      );

      console.log('Signup successful:', response.data);
      alert('Signup successful!'); 
      // TODO: Redirect user or clear form if needed
    } catch (error) {
      console.error('Signup error:', error.response || error.message);
      alert('Signup failed! Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="form-section">
        <img src={logo} alt="Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <label>Salutation</label>
          <select name="salutation" value={formData.salutation} onChange={handleChange}>
            <option>Lord</option>
            <option>Mr</option>
            <option>Ms</option>
          </select>

          <input name="firstname" placeholder="First-Name" value={formData.firstname} onChange={handleChange} />
          <input name="lastname" placeholder="Surname" value={formData.lastname} onChange={handleChange} />
          <input type="email" name="email" placeholder="Mail e.g.: muster@domain.de" value={formData.email} onChange={handleChange} />
          <input name="mobile" placeholder="Mobile number" value={formData.mobile} onChange={handleChange} />
          <input name="gender" placeholder="Street" value={formData.gender} onChange={handleChange} />
         
         
          <input name="term" placeholder="term" value={formData.term} onChange={handleChange} />
          <input name="newsl" placeholder="newsl" value={formData.newsl} onChange={handleChange} />
          <input name="passwd" placeholder="passwd" value={formData.passwd} onChange={handleChange} />
          <input name="ipadd" placeholder="ipadd" value={formData.ipadd} onChange={handleChange} />

          <input name="emailOTPVerified" placeholder="emailOTPVerified" value={formData.emailOTPVerified} onChange={handleChange} />




{/* 
          <input name="gender" placeholder="House number e.g.: 15, 100 b, 35C..." value={formData.houseNumber} onChange={handleChange} />
          <select name="deliveryArea" value={formData.deliveryArea} onChange={handleChange}>
            <option>Dornbusch-60320</option>
          </select>
          <input name="floor" placeholder="Floor" value={formData.floor} onChange={handleChange} />
          <input name="doorbellName" placeholder="Company or name on the doorbell" value={formData.doorbellName} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} /> */}

          <div className="checkbox-group">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            <label>Accept terms and conditions</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
            <label>Subscribe to our newsletter</label>
          </div>

          <button type="submit">Create an account</button>

          <p className="signin-link">Already have an account? <a href="#">Sign in</a></p>
        </form>
      </div>

      <div className="image-section">
        <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f" alt="Laptop" />
      </div>
    </div>
  );
};

export default SignupPage;

import React from 'react';



const SignupPage = ({ onBack }) => {
  return (
    <div className="signup-wrapper">
      <div className="form-section">
        <img src="/logo.png" alt="Logo" className="logo" />
        <form className="signup-form">
          <select><option>Frau</option><option>Herr</option></select>
          <input type="text" placeholder="Vorname" />
          <input type="text" placeholder="Nachname" />
          <input type="email" placeholder="eMail z.B.: muster@domain.de" />
          <input type="text" placeholder="Mobile Nummer" />
          <input type="text" placeholder="Straße ohne Hausnummer" />
          <input type="text" placeholder="Hausnummer z.B.: 15, 100 b, 35c..." />
          <select><option>Dornbusch-60320</option></select>
          <input type="text" placeholder="Etage" />
          <input type="text" placeholder="Firma bzw. Name auf der Türklingel" />
          <input type="password" placeholder="Passwort" />
          <input type="password" placeholder="Passwort bestätigen" />
          <div className="checkbox-container">
            <input type="checkbox" />
            <span>Geschäftsbedingung akzeptieren</span>
          </div>
          <button type="submit">Create an Account</button>
          <button type="button" onClick={onBack} className="back-button">Back</button>
        </form>
      </div>
      <div className="image-section"></div>
    </div>
  );
};

export default SignupPage;

import React from 'react';
import './GokidoTool.css';
import devices from "../assets/headergokidogotools.png";
import q1 from "../assets/gokidogotools-01.png"
import q2 from "../assets/gokidogotools-02.png"
import q3 from "../assets/gokidogotools-03.png"
import q4 from "../assets/gokidogotools-04.png"
import q5 from "../assets/gokidogotools-05.png"
const GokidoTool = () => {
  const features = [
    "Management of the menu in real time",
    "Temporary or permanent promotional prices",
    "Promotions with coupons for customers",
    "Creation of several menus (e.g. seasonal)",
    "Management of several restaurants",
    "Management of the team with assignment of rights",
    "Overview of sales and payments",
    "Sales statistics for optimal sales",
    "Central management of customer complaints",
    "Our team will help you set it up",
  ];

  const features1 = [
    "Adjustment of the lead time",
    "Support for receipt printers (e.g., Epson TM)",
    "Management of orders (delivery and collection)",
    "Management of availability of individual products",
    "Support of multiple terminals simultaneously",
    "Automated digital invoices for customers"
  ];

  const features2=[
    "Receiving reusable bowls",
    "Dispensing reusable bowls",
    "Easy scanning of codes",
    " Manual entry of customer codes (e.g., for orders by telephone or in the comments field of third-party suppliers)"
  ];

  const features4=[
     "No login necessary",
     "Overview of the most important information of an order",
     " Support for multiple simultaneous deliveries",
     "Navigation support",
     " Status update of the order"
  ];

  const features5=[
     "Always up-to-date and in real time",
     "Choice of a meaningful web address",
     "Inclusion on Google Maps, Facebook, Instagram, etc",
     "Initiate orders via the menu on the website",
     " Your new website?"


  ];

  const packages = [
    {
      title: "EINSTEIGERPAKET KLEIN",
      price: "€79",
      description: [
        "25 Geschirrsets*",
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner (gestrichen)",
        "Individualisiertes Onlinetraining (gestrichen)"
      ]
    },
    {
      title: "EINSTEIGERPAKET MITTEL",
      price: "€109",
      description: [
        "40 Geschirrsets*",
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner (gestrichen)",
        "Individualisiertes Onlinetraining (gestrichen)"
      ]
    },
    {
      title: "EINSTEIGERPAKET GROS",
      price: "€209",
      description: [
        "80 Geschirrsets*",
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner (gestrichen)",
        "Individualisiertes Onlinetraining (gestrichen)"
      ]
    },
    {
      title: "EINSTEIGERPAKET EXTRA GROS",
      price: "€440",
      description: [
        "200 Geschirrsets*",
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner",
        "Individualisiertes Onlinetraining"
      ]
    },
    {
      title: "GRÖSSERES PAKET",
      price: "> 200 Geschirrsets*",
      description: [
        "Ausleih-Flatrate: 3 Monate",
        "Setup in das GOKI-System",
        "Marketingmaterial",
        "Digitales Onboarding",
        "Promotion auf unsere Social Media Plattform",
        "Telefonischer Kunden-Support",
        "Persönlicher Ansprechpartner",
        "Individualisiertes Onlinetraining"
      ]
    }
  ];
  

  return (
    <>


    const formSection = document.getElementById("demo-form");
    if (form-section1) {
      form-section1.scrollIntoView({ behavior: "smooth" })
    };
  
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <img src={devices} alt="Devices Preview" className="hero-img" />
          </div>
          <div className="hero-right">
            <h1>Your smart companions</h1>
            <h1>into a digital future</h1>
            <button className="demo-request-btn">Request a demo now</button>
          </div>
        </div>
        <div className="wave"></div>
      </div>

      {/* Marketplace Section */}
      <section className="marketplace">
        <div className="marketplace-content">
          <div className="marketplace-left">
            <h2>Gokido Marketplace</h2>
            <p>
              The Gokido Marketplace is your new hub for your digital business. Here you
              control your digital offer in real time. All changes are immediately available
              to your customers. Are you spontaneous or planning ahead? In both cases, the
              Marketplace is right for you and your business.
            </p>
            <ul className="feature-list">
              {features.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✔</span> {item}
                </li>
                
              ))}
            </ul>
            <button className="demo-request-btn">Request a demo now</button>
          </div>
          <div className="marketplace-right">
            <img
              src={q1}
              alt="Gokido Marketplace Laptop"
              className="laptop-image"
            />
            
          </div>
        </div>
      </section>


      <section className="terminal-section">
      <div className="terminal-content">
        <div className="terminal-left">
          <img src={q2} alt="Tablet showing Gokido Terminal" className="terminal-image" />
        </div>
        <div className="terminal-right">
          <h2>Gokido Terminal</h2>
          <p>
            The Gokido Terminal runs on all tablets (iOS and Android) and is the new interface between you
            and your customers. Here you take the order and inform your customers about the preparation in real time.
            Busy at the moment? Use the slider to adjust your lead time to the situation.
          </p>
          <ul className="terminal-feature-list">
            {features1.map((item, idx) => (
              <li key={idx}>
                <span className="check-icon">✔</span> {item}
              </li>
            ))}
          </ul>
          <button className="demo-request-btn">REQUEST A DEMO NOW</button>
        </div>
      </div>
    </section>



    <section className="marketplace">
        <div className="marketplace-content">
          <div className="marketplace-left">
            <h2>Gokido Scan App</h2>
            <p>
            Each of our deposit-free reusable bowls has 
            a unique QR code that you can easily scan 
            with the Gokido Scan app. In the blink of an
            eye, you can hand out the bowls and take 
            them back again. This is how the cycle closes.
            </p>
            <ul className="feature-list">
              {features2.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✔</span> {item}
                </li>
                
              ))}
            </ul>
            <button className="demo-request-btn">Request a demo now</button>
          </div>
          <div className="marketplace-right">
            <img
              src={q3}
              alt="Gokido Marketplace Laptop"
              className="laptop-image"
            />
            
          </div>
        </div>
      </section>



      <section className="terminal-section">
      <div className="terminal-content">
        <div className="terminal-left">
          <img src={q4} alt="Tablet showing Gokido Terminal" className="terminal-image" />
        </div>
        <div className="terminal-right">
          <h2>Gokido Pilot App</h2>
          <p>
          Do you offer deliveries? Then the Gokido Pilot 
          app is the new tool for your delivery team – 
          your pilots. It is developed in such a way that
           a login is not necessary and external pilots 
           can also deliver the orders.
          </p>
          <ul className="terminal-feature-list">
            {features4.map((item, idx) => (
              <li key={idx}>
                <span className="check-icon">✔</span> {item}
              </li>
            ))}
          </ul>
          <button className="demo-request-btn">REQUEST A DEMO NOW</button>
        </div>
      </div>
    </section>


    <section className="marketplace">
        <div className="marketplace-content">
          <div className="marketplace-left">
            <h2>Digital Menu</h2>
            <p>
            You don’t have a website yet or would like to have a beautiful digital menu? We can create a digital menu for you with all information in a flash. The convenient thing is that it is always up to date and adapts in real time to the data from the Gokido Marketplace. So you only have to maintain it in one place.
            </p>
            <ul className="feature-list">
              {features5.map((item, index) => (
                <li key={index}>
                  <span className="check-icon">✔</span> {item}
                </li>
                
              ))}
            </ul>
            <button className="demo-request-btn">Request a demo now</button>
          </div>
          <div className="marketplace-right">
            <img
              src={q5}
              alt="Gokido Marketplace Laptop"
              className="laptop-image"
            />
            
          </div>
        </div>
      </section>

      
      <div className="pricing-table">
      <div className="pricing-cards">
        {packages.map((pack, index) => (
          <div key={index} className="pricing-card">
            <h3 className="pricing-title">{pack.title}</h3>
            <div className="pricing-price">
              {pack.price}<span className="pricing-tax"> zzgl. MwSt.</span>
            </div>
            <ul className="pricing-features">
              {pack.description.map((item, idx) => (
                <li key={idx} className={item.includes("(gestrichen)") ? "strikethrough" : ""}>
                  {item.replace(" (gestrichen)", "")}
                </li>
              ))}
            </ul>
            <button className="pricing-button">JETZT SICHERN!</button>
          </div>
        ))}
      </div>
    </div>
    

    {/* <div className="form-container">
      <h2 className="form-title1">Please fill the form below</h2>
      <form className="form-card1">
        <div className="form-section1">
          <h3>Personal data</h3>
          <input type="text" placeholder="Name and Last Name" />
          <input type="email" placeholder="Email Address" />
        </div>

        <div className="form-section1">
          <h3>Restaurant data</h3>
          <input type="text" placeholder="Restaurant Name" />
          <input type="text" placeholder="Address" />
          <div className="form-row1">
            <input type="text" placeholder="City" />
            <select>
              <option>Africa</option>
              <option>Asia</option>
              <option>Europe</option>
              <option>America</option>
              <option>Australia</option>
            </select>
          </div>
        </div>

        <div className="form-section1">
          <h3>I am not a robot</h3>
          <input type="text" placeholder="Human verify: 3 + 1 = ?" />
        </div>

        <button type="submit" className="submit-button1">Submit</button>
      </form>
    </div> */}



<div className="pricing-table">
      <div className="pricing-cards">
        {packages.map((pack, index) => (
          <div key={index} className="pricing-card">
            <h3 className="pricing-title">{pack.title}</h3>
            <div className="pricing-price">
              {pack.price}<span className="pricing-tax"> zzgl. MwSt.</span>
            </div>
            <ul className="pricing-features">
              {pack.description.map((item, idx) => (
                <li key={idx} className={item.includes("(gestrichen)") ? "strikethrough" : ""}>
                  {item.replace(" (gestrichen)", "")}
                </li>
              ))}
            </ul>
            <button className="pricing-button" onClick={handleButtonClick}>
              JETZT SICHERN!
            </button>
          </div>
        ))}
      </div>

      {/* New Form Section */}
      <div ref={formRef} className="form-section">
        <h2>Jetzt Demo Anfordern</h2>
        <form className="demo-form">
          <input type="text" placeholder="Ihr Name" required />
          <input type="email" placeholder="Ihre Email" required />
          <input type="text" placeholder="Unternehmen" />
          <textarea placeholder="Ihre Nachricht" rows="4"></textarea>
          <button type="submit">Absenden</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default GokidoTool;

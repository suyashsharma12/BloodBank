import React from 'react';
import './Home1.css';
import { Link } from 'react-router-dom';
import articleImage1 from '../../image/article1.jpg';
import articleImage2 from '../../image/article2.jpg';
import articleImage3 from '../../image/article3.jpg';
import img1 from '../../image/donor.jpg';
 import img2 from '../../image/search.jpg';
 import img3 from '../../image/blood.jpg';


const App = () => {
  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <div className="logo">
            <a href="#">Blood Bank</a>
          </div>
          

        
          <ul className="nav-links">
          <Link to="/Login">Login</Link>
          <Link to="/Contact ">Contact Us</Link>
          <Link to="#instruction">Instruction</Link>
          </ul>
        </nav>
        <div className="hero">
          <h1 className="hero-title">Give the Gift of Blood</h1>
          <p className="hero-description">Your donation can save lives.</p>
        </div>
      </header>
      <main>
        
        <section className="articles">
          <h2 className="section-title"> Features & Articles</h2>
          <div className="article-grid">
          
            <div className="article-card">
              <img src={img1} alt="Article 3" className="article-image" />
              <h3 className="article-title">Register for Blood Donation</h3>
              <p className="article-content">"Registering as a blood donor at a camp is a pledge of life, a simple yet profound commitment to saving lives and spreading hope in times of need."</p>
              <Link to="/Register"><button>Donor</button></Link>
            </div>
            
            <div className="article-card">
              <img src={img3} alt="Article 3" className="article-image" />
              <h3 className="article-title">Search Blood/Plasma</h3>
              <p className="article-content">
"The search for blood and plasma is a quest for life itself, where each donation becomes a beacon of hope for those battling illness. In every drop lies the potential to save a life, uniting donors and recipients in a powerful bond of resilience and compassion."</p>
              <Link to="/Search"><button>Search</button></Link>
            </div>
            
            <div className="article-card">
              <img src={img2} alt="Article 3" className="article-image" />
              <h3 className="article-title"> Blood Donation Camps</h3>
              <p className="article-content">"Blood donation camps symbolize human compassion, unity, and hope, where each donated drop represents a lifeline for those in need."</p>
              <Link to="/RegisterCamp"><button>Register for Camp</button></Link>
            </div>
            
            
            <div className="article-card">
              <img src={articleImage1} alt="Article 1" className="article-image" />
              <h3 className="article-title">The Importance of Blood Donation</h3>
              <p className="article-content">Safe blood saves lives. Blood is needed by women with complications during pregnancy and childbirth, children with severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients.</p>
              <a href="https://www.redcrossblood.org/local-homepage/news/article/blood-donation-importance.html" className="read-more">Read More</a>
            </div>
            <div className="article-card">
              <img src={articleImage2} alt="Article 2" className="article-image" />
              <h3 className="article-title">Blood Donation Myths Debunked</h3>
              <p className="article-content">As long as you are healthy and meet all the criteria of donating blood, you can go ahead and donate. It doesn't matter whether you are a vegetarian or non-vegetarian. The misconception that vegans cannot donate blood is because meat-based foods are rich in iron and iron helps in haemoglobin production in the body.</p>
              <a href="https://www.summahealth.org/flourish/entries/2022/09/8-common-myths-about-blood-donation-debunked" className="read-more">Read More</a>
            </div>
            <div className="article-card">
              <img src={articleImage3} alt="Article 3" className="article-image" />
              <h3 className="article-title"> Benefits of Donating Blood</h3>
              <p className="article-content">Donating blood offers numerous benefits, both for the recipient and the donor. Firstly, it saves lives by providing crucial support in emergencies, surgeries, and medical treatments. Regular donation helps prevent blood shortages in hospitals, ensuring that patients receive the care they need. It also contributes to medical research, facilitating advancements in treatments and therapies</p>
              <a href="https://www.healthline.com/health/benefits-of-donating-blood" className="read-more">Read More</a>
            </div>
            
            
            <br/>
            <br/>
           
          
          </div>
          <div className="instruction-section" id='instruction'>
            <div className="table-container">
              <h2>Learn About Donation</h2>
              <p>One Blood Donation can save upto Three Lives</p>
              <h3>Compatible Blood Type Donors</h3>
              <table>
                <thead>
                  <tr>
                    <th>Blood Type</th>
                    <th>Donate Blood To</th>
                    <th>Receive Blood From</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>A+</td>
                    <td>A+ AB+</td>
                    <td>A+ A- O+ O-</td>
                  </tr>
                  <tr>
                    <td>O+</td>
                    <td>O+ A+ B+ AB+</td>
                    <td>O+ O-</td>
                  </tr>
                  <tr>
                    <td>B+</td>
                    <td>B+ AB+</td>
                    <td>B+ B- O+ O-</td>
                  </tr>
                  <tr>
                    <td>AB+</td>
                    <td>AB+</td>
                    <td>Everyone</td>
                  </tr>
                  <tr>
                    <td>A-</td>
                    <td>A+ A- AB+ AB-</td>
                    <td>A- O-</td>
                  </tr>
                  <tr>
                    <td>O-</td>
                    <td>Everyone</td>
                    <td>O-</td>
                  </tr>
                  <tr>
                    <td>B-</td>
                    <td>B+ B- AB+ AB-</td>
                    <td>B- O-</td>
                  </tr>
                  <tr>
                    <td>AB-</td>
                    <td>AB+ AB-</td>
                    <td>AB- A- B- O-</td>
                  </tr>
                </tbody>
              </table>
             
            </div>
            </div>
        </section>
        <section className="call-to-action">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-description">Get in touch with us for more information about our services.</p>
          <a href="https://wa.me/919079372990" className="whatsapp-button">
            <i className="fab fa-whatsapp"></i> Contact via WhatsApp
          </a>
        </section>
        <section className="info-boxes">
          <div className="info-box">
            <i className="fas fa-map-marker-alt"></i>
            <h3 className="info-title">Visit Us</h3>
            <p className="info-content">Belagavi,karnataka</p>
          </div>
          <div className="info-box">
            <i className="fas fa-phone-alt"></i>
            <h3 className="info-title">Call Us</h3>
            <p className="info-content">9079372990</p>
          </div>
          <div className="info-box">
            <i className="fas fa-envelope"></i>
            <h3 className="info-title">Email Us</h3>
            <p className="info-content">Suyashsharma974@gmail.com</p>
          </div>
          <div className="info-box">
            <i className="fas fa-globe"></i>
            <h3 className="info-title">Visit Our Website</h3>
            <p className="info-content">www.bloodbank.com</p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Blood Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

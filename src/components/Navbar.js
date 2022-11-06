// import PropTypes from "prop-types";
import ".././App.css";
function Navbar() {
  return (
    <body>
      <div className="top"></div>
      <div className="header">
        <div className="head">
          <div className="logo">
            <img src="./src/logo_tcm87-366_w1024_n.png" alt="" />
          </div>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <p>Find A Store</p>
          </div>
        </div>
        <div className="nav-item">
          <ul>
            <li className="fa-li-1">
              <a href="/">COFFEE</a>
              <div className="container">
                <div className="links">
                  <div className="1">
                    <h4>
                      <a href="/">Our Coffees</a>
                    </h4>
                    <ul>
                      <li>
                        <a href="/">Starbucks VIA®</a>
                      </li>
                      <li>
                        <a href="/">Whole Bean Coffee</a>
                      </li>
                      <li>
                        <a href="/">View All Coffees</a>
                      </li>
                    </ul>
                  </div>
                  <div className="2">
                    <h4>
                      <a href="/">Find Your Perfect Coffee</a>
                    </h4>
                  </div>
                  <div className="3">
                    <h4>
                      <a href="/">Espresso</a>
                    </h4>
                    <ul>
                      <li>
                        <a href="/">The Ingredients</a>
                      </li>
                      <li>
                        <a href="/">The Best Equipment</a>
                      </li>
                      <li>
                        <a href="/">Who Makes It</a>
                      </li>
                    </ul>
                  </div>
                  <div className="4">
                    <h4>
                      <a href="/">How to Brew Great Coffee</a>
                    </h4>
                    <ul>
                      <li>
                        <a href="/">Coffee Press</a>
                      </li>
                      <li>
                        <a href="/">Pour-Over</a>
                      </li>
                      <li>
                        <a href="/">Iced Pour-Over</a>
                      </li>
                      <li>
                        <a href="/">Coffee Brewer</a>
                      </li>
                    </ul>
                  </div>
                  <div className="5">
                    <h4>
                      <a href="/">Ethical Sourcing</a>
                    </h4>
                    <ul>
                      <li>
                        <a href="/">Coffee</a>
                      </li>
                      <li>
                        <a href="/">Coffee Quality</a>
                      </li>
                      <li>
                        <a href="/">Farmer Support</a>
                      </li>
                    </ul>
                  </div>
                  <div className="6">
                    <h4>
                      <a href="/">Learn More</a>
                    </h4>
                    <ul>
                      <li>
                        <a href="/">Starbucks Roast Spectrum</a>
                      </li>
                      <li>
                        <a href="/">Coffee by Form</a>
                      </li>
                      <li>
                        <a href="/">Flavors in Your Cup</a>
                      </li>
                      <li>
                        <a href="/">Coffee FAQ</a>
                      </li>
                    </ul>
                  </div>
                  <div className="lower">
                    <hr />
                    <p>Looking for Coffee Beverages?</p>
                    <p>Drink</p>
                  </div>
                </div>
                <div className="side-img"></div>
              </div>
            </li>
            <li>
              <a href="/">MENU</a>
            </li>
            <li>
              <a href="/">COFFEEHOUSE</a>
            </li>
            <li>
              <a href="/">RESPONSIBILITY</a>
            </li>
            <li>
              <a href="/">REWARDS</a>
            </li>
            <li>
              <a href="/">CAREERS</a>
            </li>
            <li>
              <a href="/">STARBUCKS SEASON GIFTING</a>
            </li>
            <li>
              <a href="/">STARBUCKS DELIVERS</a>
            </li>
            <li>
              <a href="/">ABOUT US</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="banner"></div>
      <div className="banner1"></div>
      <div className="banner2"></div>
      <div className="banner3"></div>
      <div className="banner4"></div>
      <div className="banner5"></div>
      <div className="section">
        <div className="product">
          <img src="./src/latte-starbucks_tcm87-16216_w1024_n.png" alt="" />
          <div className="content">
            <h2>LET US DELIGHT YOU.</h2>
            <p>
              Delicious, handcrafted beverages and great-tasting food. The{" "}
              <br />
              ecret to making life better.
            </p>
          </div>
        </div>
        <div className="job">
          <div className="content">
            <h2>OPPORTUNITY</h2>
            <p>To be more than an employee, to be a partner.</p>
          </div>
          <img src="./src/oportunity_tcm87-16218_w1024_n.png" alt="" />
        </div>
      </div>
      <div className="social-icon">
        <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <footer>
        <div className="footer">
          <div className="footer-link">
            <div className="links">
              <div className="first">
                <h4>ABOUT US</h4>
                <p>
                  <a href="/">Our Heritage</a>
                </p>
                <p>
                  <a href="/">Our Company</a>
                </p>
              </div>
              <div className="second">
                <h4>CUSTOMER SERVICE</h4>
                <p>
                  <a href="/">Frequently Asked Questions</a>
                </p>
              </div>
              <div className="third">
                <h4>QUICK LINKS</h4>
                <p>
                  <a href="/">Store Locator</a>
                </p>
              </div>
            </div>
            <div className="brand">
              <img src="./src/wordmark_footer_tcm87-397.png" alt="" />
            </div>
          </div>
          <div className="lower-links">
            <ul>
              <li>Web Accessiblity |</li>
              <li>Privacy Statement |</li>
              <li>Terms of Use |</li>
              <li>Site Map |</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="last">
            <p>© 2022 Starbucks Coffee Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </body>
  );
}

export default Navbar;

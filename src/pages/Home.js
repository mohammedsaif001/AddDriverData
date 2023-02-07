import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import "../css/HomePage.css";
import DriverTable from "../components/DriverTable";
import AddDriver from "./AddDriver";
import { Link } from "react-router-dom";
import { DriverList } from "../context/DriverListContext";

const Home = () => {
  const { driversList } = useContext(DriverList);
  console.log("he;;;;", driversList);
  const [handleModal, setHandleModal] = useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="hamburger">
          <div className="menu_icon"></div>
        </div>
        <div className="notification">
          <Icon icon="mdi:bell-outline" color="#109887" className="bellIcon" />
          <div className="notificationBadge">1</div>
        </div>
      </nav>
      <main>
        <section className="dropdown_section">
          <div className="dropdown">
            <div className="dropdown_individual" data-bs-toggle="dropdown">
              <div className="dropdown_icon">
                <iconify-icon icon="ph:globe"></iconify-icon>
              </div>
              <div className="dropdownCustom">
                <span className="drText">United Arab Emirates</span>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      India
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Female
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Others
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown_label">COUNTRY</div>
              <div className="arrow">&#8744;</div>
            </div>
            <div className="dropdown_individual" data-bs-toggle="dropdown">
              <div className="dropdown_icon">
                <img src="calendar.png" alt="" />
              </div>
              <div className="dropdownCustom dropdownCustom1">
                <span className="drText1">12 MAR 2022 - 12 AUG 2022</span>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      12 MAR 2022 - 12 AUG 2022
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      12 MAR 2022 - 12 AUG 2022
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      12 MAR 2022 - 12 AUG 2022
                    </a>
                  </li>
                </ul>
              </div>

              <div className="dropdown_label dropdown_label1">LAST 5 MONTH</div>
              <div className="arrow">&#8744;</div>
            </div>
          </div>
          <div className="addMultipleDrivers">
            <Icon
              icon="material-symbols:library-add-outline-sharp"
              color="white"
              rotate={3}
            />
          </div>
        </section>
        <section className="cards">
          <div className="cardSection1">
            <div className="cardLarge">
              <div className="cardLarge_top">Total New Drivers</div>
              <div className="cardLarge_top_rigt">
                <p> Transporter Name</p> &#8744;
              </div>
              <div className="cardLarge_bottom">
                <Icon icon="healthicons:truck-driver" className="driverIcon" />
                <div>0</div>
              </div>
            </div>
          </div>
          <div className="cardSection2">
            <div className="cardMedium">
              <div className="cardMedium_top">Active Drivers</div>
              <div className="cardMedium_bottom">
                <Icon icon="healthicons:truck-driver" className="driverIcon" />
                <div>0</div>
              </div>
            </div>
            <div className="cardMedium">
              <div className="cardMedium_top">Inactive Drivers</div>
              <div className="cardMedium_bottom">
                <Icon icon="healthicons:truck-driver" className="driverIcon" />
                <div>0</div>
              </div>
            </div>
            <div className="cardMedium">
              <div className="cardMedium_top">In-Process</div>
              <div className="cardMedium_bottom">
                <Icon icon="healthicons:truck-driver" className="driverIcon" />
                <div>{driversList.length}</div>
              </div>
            </div>
            <div className="cardMedium">
              <div className="cardMedium_top">Rejected Drivers</div>
              <div className="cardMedium_bottom">
                <Icon icon="healthicons:truck-driver" className="driverIcon" />
                <div>0</div>
              </div>
            </div>
          </div>
          <div className="cardSection3">
            <button
              className="addButton"
              onClick={() => {
                setHandleModal(true);
                console.log(handleModal);
              }}
            >
              <Link className="nav-link" to="/addNewDriver">
                Add New Driver{" "}
                <Icon
                  icon="material-symbols:keyboard-arrow-right"
                  color="white"
                  className="rightArrow"
                />
              </Link>
            </button>
            <div className="section3Card">
              <div className="cardTop">
                <div className="heading">Total Drivers</div>
                <Icon icon="healthicons:truck-driver" className="driverIcon" />
              </div>
              <div className="cardBottom">
                <div className="stats">
                  <div className="subtitle">Percentage increase</div>
                  <div className="percentageChange">
                    <div> 30%</div>
                    <div style={{ color: "#109887" }}>&#8593;</div>
                  </div>
                </div>
                <div className="number">0</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DriverTable />
    </>
  );
};

export default Home;

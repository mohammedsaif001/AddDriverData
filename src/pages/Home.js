import React, { useContext, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import "../css/HomePage.css";
import DriverTable from "../components/DriverTable";
import AddDriver from "./AddDriver";
import { Link } from "react-router-dom";
import { DriverList } from "../context/DriverListContext";
import { countryData } from "../apis/fetchingAPI";

const Home = () => {
  const { driversList } = useContext(DriverList);
  const [selectMonthData, setselectMonthData] = useState(
    "12 MAR 2022 - 12 AUG 2022"
  );
  const [country, setCountry] = useState("Afghanistan");
  const [countryList, setCountryList] = useState([]);
  const countryRef = useRef();
  const monthRef = useRef();
  useEffect(() => {
    const fetchCountryDetails = async () => {
      const { data, status } = await countryData();
      console.log(data, status);
      if (status === 401) {
        setCountryList([]);
        console.error(data);
      }
      if (status === 200) {
        setCountryList(data);
      }
    };
    fetchCountryDetails();
  }, []);

  const handleSetMonth = (e) => {
    setselectMonthData(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

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
          <div className="dropdown btn-group">
            <div
              className="dropdown_individual"
              data-bs-toggle="dropdown"
              style={{ position: "relative" }}
              onClick={(e) => countryRef.country.select()}
            >
              <div className="dropdown_icon">
                <iconify-icon icon="ph:globe"></iconify-icon>
              </div>
              <div className="dropdownCustom">
                <select
                  className="dropdown"
                  style={{
                    position: "absolute",
                    // border: "none",
                    top: "-20px",
                    width: "12rem",
                    opacity: "0",
                  }}
                  data-bs-toggle="dropdown"
                  required
                  name="nationality"
                  onClick={handleCountry}
                  ref={countryRef}
                >
                  {countryList?.map((countryItems) => {
                    return (
                      <option
                        value={countryItems.name}
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        key={countryItems.id}
                      >
                        {countryItems.name}
                      </option>
                    );
                  })}
                </select>
                <span className="drText">{country}</span>
              </div>

              <div className="dropdown_label">COUNTRY</div>
              <div className="arrow">&#8744;</div>
            </div>
            <div className="dropdown_individual" data-bs-toggle="dropdown">
              <div className="dropdown_icon">
                <img src="calendar.png" alt="" />
              </div>
              <div className="dropdownCustom dropdownCustom1">
                <select
                  className="dropdown"
                  style={{
                    position: "absolute",
                    // border: "none",
                    top: "-20px",
                    width: "12rem",
                    opacity: "0",
                  }}
                  data-bs-toggle="dropdown"
                  required
                  name="prevMonth"
                  onClick={handleSetMonth}
                  ref={monthRef}
                >
                  <option
                    value="12 MAR 2022 - 12 AUG 2022"
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    12 MAR 2022 - 12 AUG 2022
                  </option>
                  <option
                    value="12 AUG 2022 - 12 JAN 2023"
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    12 AUG 2022 - 12 JAN 2023
                  </option>
                  <option
                    value="12 MAR 2022 - 12 AUG 2022"
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    12 MAR 2022 - 12 AUG 2022
                  </option>
                  <option
                    value="12 AUG 2022 - 12 JAN 2023"
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    12 AUG 2022 - 12 JAN 2023
                  </option>
                  <option
                    value="12 MAR 2022 - 12 AUG 2022"
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    12 MAR 2022 - 12 AUG 2022
                  </option>
                  <option
                    value="12 AUG 2022 - 12 JAN 2023"
                    className="dropdown-item"
                    style={{ cursor: "pointer" }}
                  >
                    12 AUG 2022 - 12 JAN 2023
                  </option>
                </select>
                <span className="drText1">{selectMonthData}</span>
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
            <Link className="nav-link" to="/addNewDriver">
              <button
                className="addButton"
                onClick={() => {
                  setHandleModal(true);
                  console.log(handleModal);
                }}
              >
                Add New Driver{" "}
                <Icon
                  icon="material-symbols:keyboard-arrow-right"
                  color="white"
                  className="rightArrow"
                />
              </button>
            </Link>
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

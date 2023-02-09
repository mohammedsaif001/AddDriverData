import React, { useContext, useEffect, useState } from "react";
import "../css/AddDriver.css";
import "../css/IndividualDriver.css";
import { Icon } from "@iconify/react";
import { Link, useHistory, useParams } from "react-router-dom";
import { DriverList } from "../context/DriverListContext";

const IndividualDriverDetails = () => {
  const history = useHistory();
  let { id } = useParams();
  const [individualDriverData, setindividualDriverData] = useState({});
  const { driversList } = useContext(DriverList);
  useEffect(() => {
    let driverData = driversList.find((object) => {
      return object.userID == id;
    });
    setindividualDriverData(driverData);
  }, []);
  console.log(individualDriverData?.userType, driversList, "kshkd");
  return (
    <>
      {" "}
      <header>
        <section className="header_new_driver">
          <span className="driver_heading">ADD NEW DRIVER</span>
          <div className="close_button">
            <Link className="nav-link" to="/">
              <Icon
                icon="material-symbols:close"
                color="white"
                className="close_button_custom"
                height={34}
                style={{ cursor: "pointer" }}
              />
            </Link>
          </div>
        </section>
      </header>
      <main className="main">
        <div className="section0">
          <div className="input-field section0Country">
            <div className="label required">Country</div>
            <div className={"dropdownCustom"}>
              <select
                className="dropdown drText"
                data-bs-toggle="dropdown"
                name="selectedCountry1"
                disabled
                // defaultValue={individualDriverData?.selectedCountry1}
              >
                <option
                  className="dropdown-item drText"
                  value={individualDriverData?.selectedCountry1}
                >
                  {individualDriverData?.selectedCountry1}
                </option>
              </select>
            </div>
          </div>
          <div className="">
            <div className="label">User Type</div>
            <div className="radioButton">
              <div className="radioButtonGroup">
                <input
                  type="radio"
                  name="userType"
                  checked={
                    individualDriverData?.userType === "Driver" ? true : false
                  }
                />
                <div className="">Driver</div>
              </div>
              <div className="radioButtonGroup">
                <input
                  type="radio"
                  name="userType"
                  disabled
                  checked={
                    individualDriverData?.userType === "Broker & Driver"
                      ? true
                      : false
                  }
                />
                <div className="">Broker & Driver</div>
              </div>
            </div>
          </div>
        </div>
        <div className="section1 section">
          <div className="sectionMarker">
            <div className="clipPath">PERSONAL DETAILS</div>
            <div className="line"></div>
          </div>
          <div className="columnFlex">
            <div className="section1_info">
              <div className={"driverImage"}>
                <>
                  <img
                    src={individualDriverData?.driverImage}
                    alt="uploadedDriverImage"
                    className="driverIcon"
                  />
                </>
              </div>
              <div className="personalDetailsInput">
                <div className="input-field">
                  <div className="label required">First Name</div>
                  <input
                    type="text"
                    className={"input-field "}
                    name="fName"
                    disabled
                    value={individualDriverData?.fName}
                  />
                </div>
                <div className="input-field">
                  <div className="label">Middle Name</div>
                  <input
                    type="text"
                    className="input-field"
                    name="mName"
                    disabled
                    value={individualDriverData?.mName}
                  />
                </div>
                <div className="input-field">
                  <div className="label required">Last Name</div>
                  <input
                    type="text"
                    className={"input-field"}
                    name="lName"
                    disabled
                    value={individualDriverData?.lName}
                  />
                </div>
                <div className="input-field">
                  <div className="label required">Gender</div>
                  <div className={"dropdownCustom"}>
                    <select
                      className="dropdown drText"
                      data-bs-toggle="dropdown"
                      name="gender"
                      disabled
                    >
                      <option
                        className="dropdown-item drText"
                        value={individualDriverData?.gender}
                      >
                        {individualDriverData?.gender}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="input-field">
                  <div className="label">First Name in Arabic</div>
                  <input
                    type="text"
                    className=".input-field"
                    name="fNameAr"
                    disabled
                    value={individualDriverData?.fNameAr}
                  />
                </div>
                <div className="input-field">
                  <div className="label">Middle Name in Arabic</div>
                  <input
                    type="text"
                    className=".input-field"
                    name="mNameAr"
                    disabled
                    value={individualDriverData?.mNameAr}
                  />
                </div>
                <div className="input-field">
                  <div className="label">Last Name in Arabic</div>
                  <input
                    type="text"
                    className=".input-field"
                    name="lNameAr"
                    disabled
                    value={individualDriverData?.lNameAr}
                  />
                </div>
                <div className="input-field">
                  <div className="label required">Date of Birth</div>
                  <input
                    type="date"
                    className={"input-field"}
                    name="dateBirth"
                    disabled
                    value={individualDriverData?.dateBirth}
                  />
                </div>
                <div className="input-field">
                  <div className="label required">Mobile Number</div>
                  <input
                    type="number"
                    className={"input-field"}
                    defaultValue="+971 "
                    name="mobile"
                    disabled
                    value={individualDriverData?.mobile}
                  />
                </div>
                <div className="input-field">
                  <div className="label required">Nationality</div>
                  <div className="dropdownCustom">
                    <select
                      className={"dropdown drText"}
                      data-bs-toggle="dropdown"
                      disabled
                      name="nationality"
                    >
                      <option
                        className="dropdown-item drText"
                        value={individualDriverData?.nationality}
                      >
                        {individualDriverData?.nationality}
                      </option>
                    </select>
                  </div>
                </div>
                <div className="input-field">
                  <div className="label required">Country</div>
                  <div className="dropdownCustom">
                    {/* <div className="dropdown" data-bs-toggle="dropdown"> */}
                    <select
                      className={"dropdown drText"}
                      data-bs-toggle="dropdown"
                      disabled
                      name="selectedCountry2"
                    >
                      <option
                        className="dropdown-item drText"
                        value={individualDriverData?.selectedCountry2}
                      >
                        {individualDriverData?.selectedCountry2}
                      </option>
                    </select>
                    {/* </div> */}
                  </div>
                </div>
                <div className="input-field">
                  <div className="label required">City of birth</div>
                  <div className={"dropdownCustom"}>
                    <select
                      className="dropdown drText"
                      data-bs-toggle="dropdown"
                      name="selectedCity2"
                      disabled
                    >
                      <option
                        className="dropdown-item drText"
                        value={individualDriverData?.selectedCity2}
                      >
                        {individualDriverData?.selectedCity2}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="input-field subsection">
              <div className="label required">Name on the card</div>
              <input
                type="text"
                className={"input-field-large"}
                name="nameOnCard"
                disabled
                value={individualDriverData?.nameOnCard}
              />
              <p className="remark">
                Not more than 19 characters and no special characters allowed
              </p>
            </div>
          </div>
        </div>
        <div className="section2 section">
          <div className="sectionMarker">
            <div className="clipPath">PERESENT ADDRESS</div>
            <div className="line"></div>
          </div>
          <div className="section2_info">
            <div className="input-field">
              <div className="label required">Street Name</div>
              <input
                type="text"
                className={"input-field-medium"}
                name="streetName"
                disabled
                value={individualDriverData?.streetName}
              />
            </div>
            <div className="input-field">
              <div className="label required">COUNTRY</div>
              <div className="dropdownCustom">
                <select
                  className={"dropdown drText"}
                  data-bs-toggle="dropdown"
                  name="selectedCountry3"
                  disabled
                >
                  <option
                    className="dropdown-item drText"
                    value={individualDriverData?.selectedCountry3}
                  >
                    {individualDriverData?.selectedCountry3}
                  </option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="label required">CITY/Town</div>
              <div className={"dropdownCustom"}>
                <select
                  className="dropdown drText"
                  data-bs-toggle="dropdown"
                  name="selectedCity3"
                  disabled
                >
                  <option
                    className="dropdown-item drText"
                    value={individualDriverData?.selectedCity3}
                  >
                    {individualDriverData?.selectedCity3}
                  </option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="label required">Zip Code</div>
              <input
                type="number"
                className={"input-field"}
                name="zipCode"
                disabled
                value={individualDriverData?.zipCode}
              />
            </div>
            <div className="input-field">
              <div className="label">Building Number</div>
              <input
                type="number"
                className=".input-field"
                name="buildingNumber"
                disabled
                value={individualDriverData?.buildingNumber}
              />
            </div>
          </div>
        </div>
        <div className="section3 section">
          <div className="sectionMarker">
            <div className="clipPath clipPathLarge">Employment Details</div>
            <div className="line"></div>
          </div>
          <div className="section3_info">
            <div className="input-field">
              <div className="label required">Work status</div>
              <div className={"dropdownCustom"}>
                <select
                  className="dropdown drText"
                  data-bs-toggle="dropdown"
                  name="workStatus"
                  disabled
                >
                  <option
                    className="dropdown-item drText"
                    value={individualDriverData?.workStatus}
                  >
                    {individualDriverData?.workStatus}
                  </option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="label required">Professional Level</div>
              <div className={"dropdownCustom"}>
                <select
                  className="dropdown drText"
                  data-bs-toggle="dropdown"
                  name="professionalLevel"
                  disabled
                >
                  <option
                    className="dropdown-item drText"
                    value={individualDriverData?.professionalLevel}
                  >
                    {individualDriverData?.professionalLevel}
                  </option>
                </select>
              </div>
            </div>
            <div className="input-field">
              <div className="label required">Employer Name</div>
              <input
                type="text"
                className={"input-field"}
                name="employerName"
                disabled
                value={individualDriverData?.employerName}
              />
            </div>
            <div className="input-field">
              <div className="label required">Work Address</div>
              <input
                type="text"
                className={"input-field-medium"}
                name="workAddress"
                disabled
                value={individualDriverData?.workAddress}
              />
            </div>

            <div className="input-field">
              <div className="label">Salary Range</div>
              <div className="dropdownCustom">
                <select
                  className="dropdown drText"
                  data-bs-toggle="dropdown"
                  name="salaryRange"
                  disabled
                >
                  <option
                    className="dropdown-item drText"
                    value={individualDriverData?.salaryRange}
                  >
                    {individualDriverData?.salaryRange}
                  </option>
                  {/* <select className="dropdown-menu"> */}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="section4 section">
          <div className="sectionMarker">
            <div className="clipPath clipPathLarge">PROOF OF Identity</div>
            <div className="line"></div>
          </div>
          <div className="section4_info">
            <div className="identification_input">
              <div className="input-field">
                <div className="label required">Identification Type</div>
                <div className={"dropdownCustom"}>
                  <select
                    className="dropdown drText"
                    data-bs-toggle="dropdown"
                    name="identificationType"
                    disabled
                  >
                    <option
                      className="dropdown-item drText"
                      value={individualDriverData?.identificationType}
                    >
                      {individualDriverData?.identificationType}
                    </option>
                  </select>
                </div>
              </div>
              <div className="input-field">
                <div className="label required">IDENTIFICATION NO.</div>
                <input
                  type="text"
                  className={"input-field"}
                  name="idNo"
                  disabled
                  value={individualDriverData?.idNo}
                />
              </div>
              <div className="input-field">
                <div className="label required">Issued Date</div>
                <input
                  type="date"
                  className={"input-field"}
                  name="issuedDate"
                  disabled
                  value={individualDriverData?.issuedDate}
                />
              </div>
            </div>

            <div className="uploadPic">
              <div className="input-field-image">
                <div className="label required">Front side</div>
                <div className={"imageDiv"}>
                  <>
                    <img
                      src={individualDriverData?.frontImage}
                      alt="frontSideKYC"
                      className="kycImage"
                    />
                  </>
                </div>
              </div>
              <div className="input-field-image">
                <div className="label required">Back side</div>
                <div className={"imageDiv"}>
                  <>
                    <img
                      src={individualDriverData?.backImage}
                      alt="backSideKYC"
                      className="kycImage"
                    />
                  </>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section5 section">
          <div className="sectionMarker">
            <div className="clipPath clipPathLarge">ADDITIONAL Information</div>
            <div className="line"></div>
          </div>
          <div className="section5_info">
            <div className="section5_first">
              <div className="">
                <div className="label required">
                  Are you a U.S. Green Card Holder?
                </div>
                <div className="radioButton radioButtonSpace">
                  <div className="radioButtonGroup">
                    <input
                      type="radio"
                      name="greencardholder"
                      disabled
                      checked={
                        individualDriverData?.greencardholder === "No"
                          ? true
                          : false
                      }
                    />
                    <div className="">No</div>
                  </div>
                  <div className="radioButtonGroup">
                    <input
                      type="radio"
                      name="greencardholder"
                      disabled
                      checked={
                        individualDriverData?.greencardholder === "Yes"
                          ? true
                          : false
                      }
                    />
                    <div className="">Yes</div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="label required">Are you a U.S. tAX Payer</div>
                <div className="radioButton radioButtonSpace">
                  <div className="radioButtonGroup">
                    <input
                      type="radio"
                      name="taxPayer"
                      disabled
                      checked={
                        individualDriverData?.taxPayer === "No" ? true : false
                      }
                    />
                    <div className="">No</div>
                  </div>
                  <div className="radioButtonGroup">
                    <input
                      type="radio"
                      name="taxPayer"
                      disabled
                      checked={
                        individualDriverData?.taxPayer === "Yes" ? true : false
                      }
                    />
                    <div className="">Yes</div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="label required">
                  Are you Resident in the US ?
                </div>
                <div className="radioButton radioButtonSpace">
                  <div className="radioButtonGroup">
                    <input
                      type="radio"
                      name="usResident"
                      disabled
                      checked={
                        individualDriverData?.usResident === "No" ? true : false
                      }
                    />
                    <div className="">No</div>
                  </div>
                  <div className="radioButtonGroup">
                    <input
                      type="radio"
                      name="usResident"
                      disabled
                      checked={
                        individualDriverData?.usResident === "Yes"
                          ? true
                          : false
                      }
                    />
                    <div className="">Yes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section5_second">
              <div className="">
                <div className="label required">
                  Are you a politically exposed person or do you have a first
                  degree relationship with family members, or close associates
                  of peps nature?
                </div>
                <div className="radioButton radioButtonSpace">
                  <div className="radioButtonGroup">
                    <input
                      type="radio"
                      name="politicallyExposed"
                      disabled
                      checked={
                        individualDriverData?.politicallyExposed === "No"
                          ? true
                          : false
                      }
                    />
                    <div className="">No</div>
                  </div>
                  <div className="radioButtonGroup">
                    <input
                      type="radio"
                      name="politicallyExposed"
                      disabled
                      checked={
                        individualDriverData?.politicallyExposed === "Yes"
                          ? true
                          : false
                      }
                    />
                    <div className="">Yes</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section5_third">
              <div className="input-field">
                <div className="label required">
                  Degree of relationship with customer
                </div>
                <div className={"dropdownCustom dropDownBig"}>
                  <select
                    className="dropdown dropDownBig drText"
                    data-bs-toggle="dropdown"
                    name="relationhipWithCustomer"
                    disabled
                  >
                    <option
                      className="dropdown-item drText"
                      value={individualDriverData?.relationhipWithCustomer}
                    >
                      {individualDriverData?.relationhipWithCustomer}
                    </option>
                  </select>
                </div>
              </div>
              <div className="input-field">
                <div className="label ">
                  Preferred location for card delivery
                </div>
                <div className="dropdownCustom dropDownBig">
                  <select
                    className="dropdown dropDownBig drText"
                    data-bs-toggle="dropdown"
                    name="preferredLocation"
                    disabled
                  >
                    <option
                      className="dropdown-item drText"
                      value={
                        individualDriverData?.preferredLocation !== ""
                          ? individualDriverData?.preferredLocation
                          : "Select Location"
                      }
                    >
                      {individualDriverData?.preferredLocation !== ""
                        ? individualDriverData?.preferredLocation
                        : "Select Location"}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndividualDriverDetails;

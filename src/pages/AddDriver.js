import React, { useContext, useEffect, useRef, useState } from "react";
import "../css/AddDriver.css";
import { Icon } from "@iconify/react";
import { countryData, cityData } from "../apis/fetchingAPI";
import { Link, useHistory } from "react-router-dom";
import { DriverList } from "../context/DriverListContext";

const AddDriver = () => {
  const isValidBirthdate = require("is-valid-birthdate");

  const history = useHistory();
  const {
    driversList,
    setDriversList,
    staticTableValues,
    driverData,
    setdriverData,
    initialState,
  } = useContext(DriverList);
  const driverImageRef = useRef();
  const frontImageRef = useRef();
  const backImageRef = useRef();
  const initialErrors = {
    fName: "",
    lName: "",
    dateBirth: "",
    mobile: "",
    nameOnCard: "",
    streetName: "",
    zipCode: "",
    employerName: "",
    workAddress: "",
    idNo: "",
    issuedDate: "",
    greencardholder: "",
    taxPayer: "",
    usResident: "",
    politicallyExposed: "",
    nationality: "",
    selectedCountry1: "",
    selectedCountry2: "",
    selectedCountry3: "",
    selectedCity2: "",
    selectedCity3: "",
    workStatus: "",
    professionalLevel: "",
    identificationType: "",
    relationhipWithCustomer: "",
    driverImage: "",
    frontImage: "",
    backImage: "",
    gender: "",
  };
  const [isError, setisError] = useState(initialErrors);
  console.log(isError, "jajsj");

  const additionalDropdownInfo = {
    gender: [
      { id: 0, value: "Male" },
      { id: 1, value: "Female" },
      { id: 2, value: "Dont Want to Disclose" },
    ],
    workStatus: [
      { id: "0", value: "Unemployed" },
      { id: "1", value: "Salaried" },
      { id: "2", value: "Self Employed" },
    ],
    professionalLevel: [
      { id: "0", value: "Beginner" },
      { id: "1", value: "Intermediate" },
      { id: "2", value: "Experienced" },
      { id: "3", value: "Professional" },
    ],
    salaryRange: [
      { id: "0", value: "EGP 2000 - EGP 10000" },
      { id: "1", value: "EGP 10000 - EGP 50000" },
      { id: "2", value: "EGP 50000 - EGP 100000" },
    ],
    identificationType: [
      { id: "0", value: "Passport" },
      { id: "1", value: "Driver Licence" },
    ],
    preferredLocation: [
      { id: "0", value: "Home" },
      { id: "1", value: "Office" },
      { id: "2", value: "Post Ofice" },
      { id: "3", value: "Work Place" },
      { id: "4", value: "Cab Stop" },
      { id: "5", value: "Home" },
      { id: "6", value: "Office" },
      { id: "7", value: "Post Ofice" },
      { id: "8", value: "Work Place" },
      { id: "9", value: "Cab Stop" },
    ],
    relationhipWithCustomer: [
      { id: "0", value: "Relationship1" },
      { id: "1", value: "Relationship2" },
      { id: "2", value: "Relationship3" },
      { id: "3", value: "Relationship4" },
      { id: "4", value: "Relationship5" },
      { id: "5", value: "Relationship7" },
      { id: "6", value: "Relationship8" },
      { id: "7", value: "Relationship44" },
      { id: "8", value: "Relationship84" },
      { id: "9", value: "Relationship24" },
    ],
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    // console.log(e);
  };
  const handleDrop = (e, name) => {
    e.preventDefault();
    console.log(e.dataTransfer.files);
    let uploadedImage = e.dataTransfer.files;
    setdriverData((prevValue) => {
      return { ...prevValue, [name]: uploadedImage };
    });
  };
  const handleClickUploadImage = (e, name) => {
    e.preventDefault();
    let uploadedImage = e.target.files;
    console.log(uploadedImage);
    setdriverData((prevValue) => {
      return { ...prevValue, [name]: uploadedImage };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdriverData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  // for (let key in driverData) {
  //   console.log(key, driverData[key]);
  // }

  console.log(driverData);
  const formValidation = () => {
    if (
      driverData.fName !== "" &&
      driverData.lName !== "" &&
      driverData.dateBirth !== "" &&
      driverData.mobile !== "" &&
      driverData.nameOnCard !== "" &&
      driverData.streetName !== "" &&
      driverData.zipCode !== "" &&
      driverData.employerName !== "" &&
      driverData.workAddress !== "" &&
      driverData.idNo !== "" &&
      driverData.issuedDate !== "" &&
      driverData.greencardholder !== "" &&
      driverData.taxPayer !== "" &&
      driverData.usResident !== "" &&
      driverData.politicallyExposed !== "" &&
      driverData.nationality !== "" &&
      driverData.selectedCountry1 !== "" &&
      driverData.selectedCountry2 !== "" &&
      driverData.selectedCountry3 !== "" &&
      driverData.selectedCity2 !== "" &&
      driverData.selectedCity3 !== "" &&
      driverData.workStatus !== "" &&
      driverData.professionalLevel !== "" &&
      driverData.identificationType !== "" &&
      driverData.relationhipWithCustomer !== "" &&
      driverData.driverImage !== null &&
      driverData.frontImage !== null &&
      driverData.backImage !== null
    ) {
      return true;
    } else {
      if (driverData.selectedCountry1 === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCountry1"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCountry1"]: false };
        });
      }
      if (driverData.driverImage === null) {
        setisError((prevErrors) => {
          return { ...prevErrors, ["driverImage"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["driverImage"]: false };
        });
      }
      if (driverData.fName === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["fName"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["fName"]: false };
        });
      }

      if (driverData.lName === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["lName"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["lName"]: false };
        });
      }
      if (driverData.gender === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["gender"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["gender"]: false };
        });
      }

      if (driverData.dateBirth === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["dateBirth"]: true };
        });
        return false;
      } else {
        var now = new Date(); //getting current date
        var currentY = now.getFullYear(); //extracting year from the date

        var dobget = driverData.dateBirth; //getting user input
        var dob = new Date(dobget); //formatting input as date
        var prevY = dob.getFullYear(); //extracting year from input date

        var ageDriver = currentY - prevY;
        if (ageDriver < 18) {
          setisError((prevErrors) => {
            return { ...prevErrors, ["dateBirth"]: true };
          });
          alert("Driver Age should be more than 18");
          return false;
        } else {
          setisError((prevErrors) => {
            return { ...prevErrors, ["dateBirth"]: false };
          });
        }
      }

      if (driverData.mobile === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["mobile"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["mobile"]: false };
        });
      }
      if (driverData.nationality === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["nationality"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["nationality"]: false };
        });
      }
      if (driverData.selectedCountry2 === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCountry2"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCountry2"]: false };
        });
      }
      if (driverData.selectedCity2 === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCity2"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCity2"]: false };
        });
      }
      if (driverData.nameOnCard === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["nameOnCard"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["nameOnCard"]: false };
        });
      }

      if (driverData.streetName === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["streetName"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["streetName"]: false };
        });
      }
      if (driverData.selectedCountry3 === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCountry3"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCountry3"]: false };
        });
      }

      if (driverData.selectedCity3 === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCity3"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["selectedCity3"]: false };
        });
      }
      if (driverData.zipCode === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["zipCode"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["zipCode"]: false };
        });
      }

      if (driverData.workStatus === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["workStatus"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["workStatus"]: false };
        });
      }

      if (driverData.professionalLevel === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["professionalLevel"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["professionalLevel"]: false };
        });
      }
      if (driverData.employerName === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["employerName"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["employerName"]: false };
        });
      }

      if (driverData.workAddress === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["workAddress"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["workAddress"]: false };
        });
      }

      if (driverData.identificationType === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["identificationType"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["identificationType"]: false };
        });
      }

      if (driverData.idNo === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["idNo"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["idNo"]: false };
        });
      }

      if (driverData.issuedDate === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["issuedDate"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["issuedDate"]: false };
        });
      }
      if (driverData.frontImage === null) {
        setisError((prevErrors) => {
          return { ...prevErrors, ["frontImage"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["frontImage"]: false };
        });
      }

      if (driverData.backImage === null) {
        setisError((prevErrors) => {
          return { ...prevErrors, ["backImage"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["backImage"]: false };
        });
      }

      if (driverData.greencardholder === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["greencardholder"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["greencardholder"]: false };
        });
      }

      if (driverData.taxPayer === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["taxPayer"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["taxPayer"]: false };
        });
      }

      if (driverData.usResident === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["usResident"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["usResident"]: false };
        });
      }

      if (driverData.politicallyExposed === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["politicallyExposed"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["politicallyExposed"]: false };
        });
      }

      if (driverData.relationhipWithCustomer === "") {
        setisError((prevErrors) => {
          return { ...prevErrors, ["relationhipWithCustomer"]: true };
        });
        return false;
      } else {
        setisError((prevErrors) => {
          return { ...prevErrors, ["relationhipWithCustomer"]: false };
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = formValidation();
    console.log("sgdjsgujds", isError, isFormValid);
    if (isFormValid) {
      isValidBirthdate(driverData.dateBirth, { minAge: 18 });
      setDriversList((prevList) => [
        ...prevList,
        { ...staticTableValues, ...driverData },
      ]);
      console.log(driverData, driversList, "djgjak");
      setdriverData(initialState);
      history.push("/");
    }
  };

  const handleDropDownDataAdditional = (e) => {
    const { name, value } = e.target;
    setdriverData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    // setdriverData((prevValue) => {
    //   return { ...prevValue, [cityName]: cityValue };
    // });
  };

  const handleDropDownData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    const objValue = JSON.parse(value);
    console.log(objValue);
    for (let key in objValue) {
      setdriverData((prevValue) => {
        return { ...prevValue, [key]: objValue[key] };
      });
    }
  };

  const [countryList, setCountryList] = useState();
  const [cityList, setCityList] = useState();

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

  useEffect(() => {
    console.log(driverData.selectedCountry2_code);
    const fetchCityDetails = async () => {
      const { data, status } = await cityData(driverData.selectedCountry2_code);
      console.log(data, status);
      if (status === 401) {
        setCityList([]);
        console.error(data);
      }
      if (status === 200) {
        setCityList(data);
      }
    };
    fetchCityDetails();
  }, [driverData.selectedCountry2]);

  useEffect(() => {
    const fetchCityDetails = async () => {
      const { data, status } = await cityData(driverData.selectedCountry3_code);
      console.log(data, status);
      if (status === 401) {
        setCityList([]);
        console.error(data);
      }
      if (status === 200) {
        setCityList(data);
      }
    };
    fetchCityDetails();
  }, [driverData.selectedCountry3]);

  return (
    <>
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
      <form action="" onSubmit={handleSubmit} noValidate={true}>
        <section className="header_button_section">
          <button
            className="cancelButton headerButton"
            onClick={() => {
              setdriverData(initialState);
            }}
          >
            Cancel
          </button>
          <input
            className="sendButton headerButton"
            type="submit"
            value=" Send"
          />
        </section>
        <main className="main">
          <div className="section0">
            <div className="input-field section0Country">
              <div className="label required">Country</div>
              <div
                className={
                  isError.selectedCountry1
                    ? "errorFields dropdownCustom"
                    : "dropdownCustom"
                }
              >
                <select
                  className="dropdown drText"
                  data-bs-toggle="dropdown"
                  required
                  name="selectedCountry1"
                  onClick={handleDropDownDataAdditional}
                >
                  <option className="dropdown-item drText" value="" disabled>
                    Select Country
                  </option>
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
              </div>
            </div>
            <div className="">
              <div className="label">User Type</div>
              <div className="radioButton">
                <div className="radioButtonGroup">
                  <input
                    type="radio"
                    name="userType"
                    value={driverData.userType}
                    defaultChecked
                    required
                    onChange={handleInputChange}
                    // Onchange={(e) => setdriverData.userType(e.target.value)}
                  />
                  <div className="">Driver</div>
                </div>
                <div className="radioButtonGroup">
                  <input
                    type="radio"
                    name="userType"
                    value={"Broker & Driver"}
                    onChange={handleInputChange}

                    // Onchange={(e) => setdriverData.userType(e.target.value)}
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
                <div
                  className={
                    isError.driverImage
                      ? " driverImage errorFields"
                      : "driverImage"
                  }
                  onDragOver={(e) => handleDragOver(e, "driverImage")}
                  onDrop={(e) => handleDrop(e, "driverImage")}
                  onClick={(e) => driverImageRef.current.click()}
                >
                  <input
                    type="file"
                    required
                    className="inputImageHidden"
                    ref={driverImageRef}
                    onChange={(e) => handleClickUploadImage(e, "driverImage")}
                  />
                  <img
                    src="driverIcon.svg"
                    alt="Add Driver"
                    className="driverIcon"
                  />
                  <p className="driverAddContent">
                    Click or drag & drop Driver Image
                  </p>
                </div>
                <div className="personalDetailsInput">
                  <div className="input-field">
                    <div className="label required">First Name</div>
                    <input
                      type="text"
                      required
                      className={
                        isError.fName
                          ? ".input-field errorFields"
                          : "input-field "
                      }
                      name="fName"
                      value={driverData.fName}
                      onChange={handleInputChange}
                      // Onchange={(e) => setdriverData.fName(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <div className="label">Middle Name</div>
                    <input
                      type="text"
                      className="input-field"
                      name="mName"
                      value={driverData.mName}
                      onChange={handleInputChange}

                      // Onchange={(e) => setdriverData.mName(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <div className="label required">Last Name</div>
                    <input
                      type="text"
                      required
                      className={
                        isError.lName
                          ? "input-field errorFields"
                          : "input-field"
                      }
                      name="lName"
                      value={driverData.lName}
                      onChange={handleInputChange}

                      // Onchange={(e) => setdriverData.lName(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <div className="label required">Gender</div>
                    <div
                      className={
                        isError.gender
                          ? "dropdownCustom errorFields"
                          : "dropdownCustom"
                      }
                    >
                      <select
                        className="dropdown drText"
                        data-bs-toggle="dropdown"
                        required
                        name="gender"
                        onClick={handleDropDownDataAdditional}
                      >
                        <option className="dropdown-item drText" value="">
                          Select
                        </option>
                        {/* <select className="dropdown-menu"> */}
                        {additionalDropdownInfo.gender?.map((gender) => {
                          return (
                            <option
                              value={gender.value}
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                              key={gender.id}
                            >
                              {gender.value}
                            </option>
                          );
                        })}
                      </select>
                      {/* <span className="drText">
                          <img src="arrow.png" alt="" />
                          {driverData.gender === ""
                            ? "Select"
                            : driverData.gender}
                        </span> */}
                      {/* <select className="dropdown-menu">
                        {additionalDropdownInfo.gender?.map((gender) => {
                          return (
                            <option
                              value={gender.value}
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                              key={gender.id}
                              onClick={() =>
                                handleDropDownDataAdditional(
                                  "gender",
                                  gender.value
                                )
                              }
                            >
                              {gender.value}
                            </option>
                          );
                        })}
                      </select> */}
                    </div>
                  </div>
                  <div className="input-field">
                    <div className="label">First Name in Arabic</div>
                    <input
                      type="text"
                      className=".input-field"
                      name="fNameAr"
                      value={driverData.fNameAr}
                      // Onchange={(e) => setdriverData.fNameAr(e.target.value)}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-field">
                    <div className="label">Middle Name in Arabic</div>
                    <input
                      type="text"
                      className=".input-field"
                      name="mNameAr"
                      value={driverData.mNameAr}
                      onChange={handleInputChange}

                      // Onchange={(e) => setdriverData.mNameAr(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <div className="label">Last Name in Arabic</div>
                    <input
                      type="text"
                      className=".input-field"
                      name="lNameAr"
                      value={driverData.lNameAr}
                      onChange={handleInputChange}

                      // Onchange={(e) => setdriverData.lNameAr(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <div className="label required">Date of Birth</div>
                    <input
                      type="date"
                      required
                      className={
                        isError.dateBirth
                          ? "input-field errorFields"
                          : "input-field"
                      }
                      name="dateBirth"
                      value={driverData.dateBirth}
                      onChange={handleInputChange}

                      // Onchange={(e) => setdriverData.dateBirth(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <div className="label required">Mobile Number</div>
                    <input
                      type="number"
                      required
                      className={
                        isError.dateBirth
                          ? "input-field errorFields"
                          : "input-field"
                      }
                      defaultValue="+971 "
                      name="mobile"
                      value={driverData.mobile}
                      onChange={handleInputChange}

                      // Onchange={(e) => setdriverData.mobile(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <div className="label required">Nationality</div>
                    <div className="dropdownCustom">
                      <select
                        className={
                          isError.nationality
                            ? "dropdown drText errorFields"
                            : "dropdown drText"
                        }
                        data-bs-toggle="dropdown"
                        required
                        name="nationality"
                        onClick={handleDropDownDataAdditional}
                      >
                        <option
                          className="dropdown-item drText"
                          value=""
                          disabled
                        >
                          Select Nationality
                        </option>
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
                    </div>
                  </div>
                  <div className="input-field">
                    <div className="label required">Country</div>
                    <div className="dropdownCustom">
                      {/* <div className="dropdown" data-bs-toggle="dropdown"> */}
                      <select
                        className={
                          isError.selectedCountry2
                            ? "dropdown drText errorFields"
                            : "dropdown drText"
                        }
                        data-bs-toggle="dropdown"
                        required
                        name="selectedCountry2"
                        onClick={handleDropDownData}
                      >
                        <option
                          className="dropdown-item drText"
                          value=""
                          disabled
                        >
                          Select Country
                        </option>
                        {countryList?.map((countryItems) => {
                          return (
                            <option
                              value={`{"selectedCountry2":"${countryItems.name}","selectedCountry2_code":"${countryItems.iso2}"}`}
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                              key={countryItems.id}
                            >
                              {countryItems.name}
                            </option>
                          );
                        })}
                      </select>
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="input-field">
                    <div className="label required">City of birth</div>
                    <div
                      className={
                        isError.selectedCity2
                          ? "dropdownCustom errorFields"
                          : "dropdownCustom"
                      }
                    >
                      {cityList?.length === 0 ||
                      driverData?.selectedCountry2 === "" ? (
                        <>
                          <div className="dropdown" data-bs-toggle="dropdown">
                            <select
                              name="selectedCity2"
                              required
                              style={{ display: "none" }}
                            ></select>
                            <span className="drText">Select City</span>
                            <img src="arrow.png" alt="" />
                          </div>
                          <div
                            className="dropdown-menu"
                            style={{
                              fontSize: "20px",
                              dislay: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              padding: "75px 20px",
                              textTransform: "capitalize",
                              color: "red",
                              fontWeight: "bold",
                              textAlign: "center",
                            }}
                          >
                            Cities are not available for the choosen country
                          </div>
                        </>
                      ) : (
                        <select
                          className="dropdown drText"
                          data-bs-toggle="dropdown"
                          required
                          name="selectedCity2"
                          onClick={handleDropDownDataAdditional}
                        >
                          <option
                            className="dropdown-item drText"
                            value=""
                            disabled
                          >
                            Select City
                          </option>
                          {cityList?.map((cityItems) => {
                            return (
                              <option
                                value={cityItems.name}
                                className="dropdown-item"
                                style={{
                                  cursor: "pointer",
                                }}
                                key={cityList.id}
                              >
                                {cityItems.name}
                              </option>
                            );
                          })}
                        </select>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="input-field subsection">
                <div className="label required">Name on the card</div>
                <input
                  type="text"
                  className={
                    isError.nameOnCard
                      ? "input-field-large errorFields"
                      : "input-field-large"
                  }
                  name="nameOnCard"
                  required
                  value={driverData.nameOnCard}
                  onChange={handleInputChange}

                  // Onchange={(e) => setdriverData.nameOnCard(e.target.value)}
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
                  required
                  className={
                    isError.streetName
                      ? "input-field-medium errorFields"
                      : "input-field-medium"
                  }
                  name="streetName"
                  value={driverData.streetName}
                  onChange={handleInputChange}

                  // Onchange={(e) => setdriverData.streetName(e.target.value)}
                />
              </div>
              <div className="input-field">
                <div className="label required">COUNTRY</div>
                <div className="dropdownCustom">
                  {/* <div className="dropdown" data-bs-toggle="dropdown"> */}
                  <select
                    className={
                      isError.selectedCountry3
                        ? "dropdown drText errorFields"
                        : "dropdown drText"
                    }
                    data-bs-toggle="dropdown"
                    required
                    name="selectedCountry3"
                    onClick={handleDropDownData}
                  >
                    <option className="dropdown-item drText" value="" disabled>
                      Select Country
                    </option>
                    {countryList?.map((countryItems) => {
                      return (
                        <option
                          value={`{"selectedCountry3":"${countryItems.name}","selectedCountry3_code":"${countryItems.iso2}"}`}
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                          key={countryItems.id}
                        >
                          {countryItems.name}
                        </option>
                      );
                    })}
                  </select>
                  {/* </div> */}
                </div>
              </div>
              <div className="input-field">
                <div className="label required">CITY/Town</div>
                <div
                  className={
                    isError.selectedCity3
                      ? "dropdownCustom errorFields"
                      : "dropdownCustom"
                  }
                >
                  {cityList?.length === 0 ||
                  driverData?.selectedCountry3 === "" ? (
                    <>
                      <div className="dropdown" data-bs-toggle="dropdown">
                        <select
                          name="selectedCity3"
                          required
                          style={{ display: "none" }}
                        ></select>
                        <span className="drText">Select City/Town</span>
                        <img src="arrow.png" alt="" />
                      </div>
                      <div
                        className="dropdown-menu"
                        style={{
                          fontSize: "20px",
                          dislay: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: "75px 20px",
                          textTransform: "capitalize",
                          color: "red",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      >
                        Cities are not available for the choosen country
                      </div>
                    </>
                  ) : (
                    <select
                      className="dropdown drText"
                      data-bs-toggle="dropdown"
                      required
                      name="selectedCity3"
                      onClick={handleDropDownDataAdditional}
                    >
                      <option
                        className="dropdown-item drText"
                        value=""
                        disabled
                      >
                        Select City
                      </option>
                      {cityList?.map((cityItems) => {
                        return (
                          <option
                            value={cityItems.name}
                            className="dropdown-item"
                            style={{
                              cursor: "pointer",
                            }}
                            key={cityList.id}
                          >
                            {cityItems.name}
                          </option>
                        );
                      })}
                    </select>
                  )}
                </div>
              </div>
              <div className="input-field">
                <div className="label required">Zip Code</div>
                <input
                  type="number"
                  required
                  className={
                    isError.zipCode ? "input-field errorFields" : "input-field"
                  }
                  name="zipCode"
                  value={driverData.zipCode}
                  onChange={handleInputChange}

                  // Onchange={(e) => setdriverData.zipCode(e.target.value)}
                />
              </div>
              <div className="input-field">
                <div className="label">Building Number</div>
                <input
                  type="number"
                  className=".input-field"
                  name="buildingNumber"
                  value={driverData.buildingNumber}
                  onChange={handleInputChange}

                  // Onchange={(e) => setdriverData.buildingNumber(e.target.value)}
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
                <div
                  className={
                    isError.workStatus
                      ? "errorFields dropdownCustom"
                      : "dropdownCustom"
                  }
                >
                  <select
                    className="dropdown drText"
                    data-bs-toggle="dropdown"
                    required
                    name="workStatus"
                    onClick={handleDropDownDataAdditional}
                  >
                    <option className="dropdown-item drText" value="">
                      Select Work Status
                    </option>
                    {/* <select className="dropdown-menu"> */}
                    {additionalDropdownInfo.workStatus?.map((workstat) => {
                      return (
                        <option
                          value={workstat.value}
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                          key={workstat.id}
                        >
                          {workstat.value}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="input-field">
                <div className="label required">Professional Level</div>
                <div
                  className={
                    isError.professionalLevel
                      ? "errorFields dropdownCustom"
                      : "dropdownCustom"
                  }
                >
                  <select
                    className="dropdown drText"
                    data-bs-toggle="dropdown"
                    required
                    name="professionalLevel"
                    onClick={handleDropDownDataAdditional}
                  >
                    <option className="dropdown-item drText" value="">
                      Select Professional Level
                    </option>
                    {/* <select className="dropdown-menu"> */}
                    {additionalDropdownInfo.professionalLevel?.map(
                      (profLevel) => {
                        return (
                          <option
                            value={profLevel.value}
                            className="dropdown-item"
                            style={{ cursor: "pointer" }}
                            key={profLevel.id}
                          >
                            {profLevel.value}
                          </option>
                        );
                      }
                    )}
                  </select>
                </div>
              </div>
              <div className="input-field">
                <div className="label required">Employer Name</div>
                <input
                  type="text"
                  required
                  className={
                    isError.employerName
                      ? "input-field errorFields"
                      : "input-field"
                  }
                  name="employerName"
                  onChange={handleInputChange}
                  value={driverData.employerName}
                  // Onchange={(e) => setdriverData.employerName(e.target.value)}
                />
              </div>
              <div className="input-field">
                <div className="label required">Work Address</div>
                <input
                  type="text"
                  required
                  className={
                    isError.workAddress
                      ? "input-field-medium errorFields"
                      : "input-field-medium"
                  }
                  name="workAddress"
                  value={driverData.workAddress}
                  onChange={handleInputChange}

                  // Onchange={(e) => setdriverData.workAddress(e.target.value)}
                />
              </div>

              <div className="input-field">
                <div className="label">Salary Range</div>
                <div className="dropdownCustom">
                  <select
                    className="dropdown drText"
                    data-bs-toggle="dropdown"
                    required
                    name="salaryRange"
                    onClick={handleDropDownDataAdditional}
                  >
                    <option
                      className="dropdown-item drText"
                      value="EGP 2000 - EGP 10000"
                    >
                      EGP 2000 - EGP 10000
                    </option>
                    {/* <select className="dropdown-menu"> */}
                    {additionalDropdownInfo.salaryRange?.map((salRange) => {
                      return (
                        <option
                          value={salRange.value}
                          className="dropdown-item"
                          style={{ cursor: "pointer" }}
                          key={salRange.id}
                        >
                          {salRange.value}
                        </option>
                      );
                    })}
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
                  <div
                    className={
                      isError.identificationType
                        ? "errorFields dropdownCustom"
                        : "dropdownCustom"
                    }
                  >
                    <select
                      className="dropdown drText"
                      data-bs-toggle="dropdown"
                      required
                      name="identificationType"
                      onClick={handleDropDownDataAdditional}
                    >
                      <option className="dropdown-item drText" value="">
                        Select Identification Type
                      </option>
                      {/* <select className="dropdown-menu"> */}
                      {additionalDropdownInfo.identificationType?.map(
                        (idType) => {
                          return (
                            <option
                              value={idType.value}
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                              key={idType.id}
                            >
                              {idType.value}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                </div>
                <div className="input-field">
                  <div className="label required">IDENTIFICATION NO.</div>
                  <input
                    type="text"
                    required
                    className={
                      isError.idNo ? "input-field errorFields" : "input-field"
                    }
                    name="idNo"
                    value={driverData.idNo}
                    onChange={handleInputChange}

                    // Onchange={(e) => setdriverData.idNo(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <div className="label required">Issued Date</div>
                  <input
                    type="date"
                    required
                    className={
                      isError.issuedDate
                        ? "input-field errorFields"
                        : "input-field"
                    }
                    name="issuedDate"
                    value={driverData.issuedDate}
                    onChange={handleInputChange}

                    // Onchange={(e) => setdriverData.issuedDate(e.target.value)}
                  />
                </div>
              </div>

              <div className="uploadPic">
                <div className="input-field-image">
                  <div className="label required">Front side</div>
                  <div
                    className={
                      isError.frontImage ? "imageDiv errorFields" : "imageDiv"
                    }
                    onDragOver={(e) => handleDragOver(e, "frontImage")}
                    onDrop={(e) => handleDrop(e, "frontImage")}
                    onClick={(e) => frontImageRef.current.click()}
                  >
                    <input
                      type="file"
                      className="inputImageHidden"
                      required
                      ref={frontImageRef}
                      onChange={(e) => handleClickUploadImage(e, "frontImage")}
                    />
                    <img
                      src="addImage.png"
                      alt="AddImage"
                      className="addImage"
                    />
                    <p className="addImageTitle">
                      Click or Drag and Drop to upload KYC image
                    </p>
                  </div>

                  {/* <input type="file" name="myImage" accept="image/*" />  */}
                </div>
                <div className="input-field-image">
                  <div className="label required">Back side</div>
                  <div
                    className={
                      isError.backImage ? "imageDiv errorFields" : "imageDiv"
                    }
                    onDragOver={(e) => handleDragOver(e, "backImage")}
                    onDrop={(e) => handleDrop(e, "backImage")}
                    onClick={(e) => backImageRef.current.click()}
                  >
                    <input
                      type="file"
                      required
                      className="inputImageHidden"
                      ref={backImageRef}
                      onChange={(e) => handleClickUploadImage(e, "backImage")}
                    />
                    <img
                      src="addImage.png"
                      alt="AddImage"
                      className="addImage"
                    />
                    <p className="addImageTitle">
                      Click or Drag and Drop to upload KYC image
                    </p>
                  </div>
                  {/* <input type="file" name="myImage" accept="image/*" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="section5 section">
            <div className="sectionMarker">
              <div className="clipPath clipPathLarge">
                ADDITIONAL Information
              </div>
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
                        defaultChecked
                        value={driverData.greencardholder}
                        onChange={handleInputChange}

                        // Onchange={(e) =>
                        //   setdriverData.greencardholder(e.target.value)
                        // }
                      />
                      <div className="">No</div>
                    </div>
                    <div className="radioButtonGroup">
                      <input
                        type="radio"
                        name="greencardholder"
                        value={driverData.greencardholder}
                        onChange={handleInputChange}

                        // Onchange={(e) =>
                        //   setdriverData.greencardholder(e.target.value)
                        // }
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
                        defaultChecked
                        value={driverData.taxPayer}
                        onChange={handleInputChange}

                        // Onchange={(e) => setdriverData.taxPayer(e.target.value)}
                      />
                      <div className="">No</div>
                    </div>
                    <div className="radioButtonGroup">
                      <input
                        type="radio"
                        name="taxPayer"
                        value={driverData.taxPayer}
                        onChange={handleInputChange}

                        // Onchange={(e) => setdriverData.taxPayer(e.target.value)}
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
                        defaultChecked
                        value={driverData.usResident}
                        onChange={handleInputChange}

                        // Onchange={(e) =>
                        //   setdriverData.usResident(e.target.value)
                        // }
                      />
                      <div className="">No</div>
                    </div>
                    <div className="radioButtonGroup">
                      <input
                        type="radio"
                        name="usResident"
                        value={driverData.usResident}
                        onChange={handleInputChange}

                        // Onchange={(e) =>
                        //   setdriverData.usResident(e.target.value)
                        // }
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
                        defaultChecked
                        value={driverData.politicallyExposed}
                        onChange={handleInputChange}

                        // Onchange={(e) =>
                        //   setdriverData.politicallyExposed(e.target.value)
                        // }
                      />
                      <div className="">No</div>
                    </div>
                    <div className="radioButtonGroup">
                      <input
                        type="radio"
                        name="politicallyExposed"
                        value={driverData.politicallyExposed}
                        onChange={handleInputChange}

                        // Onchange={(e) =>
                        //   setdriverData.politicallyExposed(e.target.value)
                        // }
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
                  <div
                    className={
                      isError.relationhipWithCustomer
                        ? "dropdownCustom dropDownBig errorFields"
                        : "dropdownCustom dropDownBig"
                    }
                  >
                    <select
                      className="dropdown dropDownBig drText"
                      data-bs-toggle="dropdown"
                      required
                      name="relationhipWithCustomer"
                      onClick={handleDropDownDataAdditional}
                    >
                      <option className="dropdown-item drText" value="">
                        Select Relationship
                      </option>
                      {/* <select className="dropdown-menu"> */}
                      {additionalDropdownInfo.relationhipWithCustomer?.map(
                        (relCust) => {
                          return (
                            <option
                              value={relCust.value}
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                              key={relCust.id}
                            >
                              {relCust.value}
                            </option>
                          );
                        }
                      )}
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
                      required
                      name="preferredLocation"
                      onClick={handleDropDownDataAdditional}
                    >
                      <option className="dropdown-item drText" value="">
                        Select Location
                      </option>
                      {/* <select className="dropdown-menu"> */}
                      {additionalDropdownInfo.preferredLocation?.map(
                        (prefLoc) => {
                          return (
                            <option
                              value={prefLoc.value}
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                              key={prefLoc.id}
                            >
                              {prefLoc.value}
                            </option>
                          );
                        }
                      )}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </form>
      ;
    </>
  );
};

export default AddDriver;

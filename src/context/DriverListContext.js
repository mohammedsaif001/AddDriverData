import { createContext, useState } from "react";
export const DriverList = createContext();
const initialState = {
  gender: "",
  userType: "Driver",
  fName: "",
  mName: "",
  lName: "",
  fNameAr: "",
  mNameAr: "",
  lNameAr: "",
  dateBirth: "",
  mobile: "",
  nameOnCard: "",
  streetName: "",
  zipCode: "",
  buildingNumber: "",
  employerName: "",
  workAddress: "",
  idNo: "",
  issuedDate: "",
  greencardholder: "No",
  taxPayer: "No",
  usResident: "No",
  politicallyExposed: "No",
  nationality: "",
  selectedCountry1: "",
  selectedCountry2: "",
  selectedCountry3: "",
  selectedCountry1_code: "",
  selectedCountry2_code: "",
  selectedCountry3_code: "",
  selectedCity2: "",
  selectedCity3: "",
  workStatus: "",
  professionalLevel: "",
  salaryRange: "",
  identificationType: "",
  preferredLocation: "",
  relationhipWithCustomer: "",
  driverImage: null,
  frontImage: null,
  backImage: null,
};
export const DriverListContext = ({ children }) => {
  const [driverData, setdriverData] = useState(initialState);
  const [userID, setUserId] = useState(1);
  const [driversList, setDriversList] = useState([]);
  const staticTableValues = {
    userID: userID,
    status: "Static",
    moxeyID: "MXUAE-DR00000001",
    cust_id: "ARB45678900",
    card_no: "****  ****  ****  2309",
  };
  return (
    <DriverList.Provider
      value={{
        driversList,
        setDriversList,
        staticTableValues,
        driverData,
        setdriverData,
        initialState,
        userID,
        setUserId,
      }}
    >
      {children}
    </DriverList.Provider>
  );
};

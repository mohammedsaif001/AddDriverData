import MaterialTable from "material-table";
import React, { useContext, useState } from "react";
import Icon from "@material-ui/core/Icon";
import { Add } from "@material-ui/icons";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { DriverList } from "../context/DriverListContext";
import "../css/DriverTable.css";
import { CSVLink } from "react-csv";
import { useHistory } from "react-router-dom";

const DriverTable = () => {
  const history = useHistory();
  const { driversList } = useContext(DriverList);
  console.log(driversList);

  const CSV_headers = [
    { label: "BackImage", key: "backImage" },
    { label: "BuildingNumber", key: "buildingNumber" },
    { label: "Card_no", key: "card_no" },
    { label: "Cust_id", key: "cust_id" },
    { label: "DateBirth", key: "dateBirth" },
    // { label: "DriverImage", key: "driverImage" },
    { label: "EmployerName", key: "employerName" },
    { label: "FName", key: "fName" },
    { label: "FNameAr", key: "fNameAr" },
    // { label: "FrontImage", key: "frontImage" },
    { label: "Gender", key: "gender" },
    { label: "Greencardholder", key: "greencardholder" },
    { label: "IdNo", key: "idNo" },
    { label: "IdentificationType", key: "identificationType" },
    { label: "IssuedDate", key: "issuedDate" },
    { label: "LName", key: "lName" },
    { label: "LNameAr", key: "lNameAr" },
    { label: "MName", key: "mName" },
    { label: "MNameAr", key: "mNameAr" },
    { label: "Mobile", key: "mobile" },
    { label: "MoxeyID", key: "moxeyID" },
    { label: "NameOnCard", key: "nameOnCard" },
    { label: "Nationality", key: "nationality" },
    { label: "PoliticallyExposed", key: "politicallyExposed" },
    { label: "PreferredLocation", key: "preferredLocation" },
    { label: "ProfessionalLevel", key: "professionalLevel" },
    { label: "RelationhipWithCustomer", key: "relationhipWithCustomer" },
    { label: "SalaryRange", key: "salaryRange" },
    { label: "SelectedCity2", key: "selectedCity2" },
    { label: "SelectedCity3", key: "selectedCity3" },
    { label: "SelectedCountry1", key: "selectedCountry1" },
    { label: "SelectedCountry1_code", key: "selectedCountry1_code" },
    { label: "SelectedCountry2", key: "selectedCountry2" },
    { label: "SelectedCountry2_code", key: "selectedCountry2_code" },
    { label: "SelectedCountry3", key: "selectedCountry3" },
    { label: "SelectedCountry3_code", key: "selectedCountry3_code" },
    { label: "Status", key: "status" },
    { label: "StreetName", key: "streetName" },
    { label: "TableData", key: "tableData" },
    { label: "TaxPayer", key: "taxPayer" },
    { label: "UsResident", key: "usResident" },
    { label: "UserType", key: "userType" },
    { label: "WorkAddress", key: "workAddress" },
    { label: "WorkStatus", key: "workStatus" },
    { label: "ZipCode", key: "zipCode" },
  ];
  const csvLink = {
    data: driversList,
    headers: CSV_headers,
    filename: "DriverList.csv",
  };
  const columns = [
    {
      title: "Status",
      field: "status",

      //   cellStyle: {
      //     width: 120,
      //     maxWidth: 120,
      //   },
      lookup: { Static: "Static", Pending: "Pending", Active: "Active" },
    },
    {
      title: "MOXEY ID",
      field: "moxeyID",
    },
    { title: "TRANSPORTER", field: "employerName" },
    {
      title: "DRIVER NAME (EN)",
      field: "fName",
      headerStyle: {
        width: 200,
        maxWidth: 200,
      },
      cellStyle: {
        width: 200,
        maxWidth: 200,
      },
    },
    {
      title: "DRIVER NAME (AR)",
      field: "fNameAr",
      headerStyle: {
        width: 190,
        maxWidth: 190,
      },
      cellStyle: {
        width: 190,
        maxWidth: 190,
      },
    },
    { title: "MOBILE NO", field: "mobile" },
    {
      title: "EXTERNAL CUSTOMER ID",
      field: "cust_id",
      headerStyle: {
        width: 200,
        maxWidth: 200,
      },
      cellStyle: {
        width: 200,
        maxWidth: 200,
      },
    },
    { title: "CARD NO.", field: "card_no" },
  ];
  return (
    <div className="driverTable">
      <div className="driverMaterialTable">
        <MaterialTable
          columns={columns}
          data={driversList}
          options={{
            cellStyle: {
              textAlign: "center",
            },
            headerStyle: {
              background: "#109887",
              color: "#FFFFFF",
              fontFamily: "Roboto",
              fontWeight: "300",
              fontSize: "14px",
              // width: "1357px",
              // height: "40px",
              textAlign: "center",
              textTransform: "uppercase",
            },
            actionsColumnIndex: -1,
            rowStyle: {
              fontFamily: "Roboto",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "14px",
              textAlign: "center",

              lineHeight: "22px",
              color: "#000000",
            },
            showTitle: false,
            filtering: true,
            search: false,
            filterCellStyle: {
              background: "#FBFDF7",
            },
          }}
          actions={[
            {
              icon: () => <CheckBoxOutlineBlankIcon />,
              onClick: (e, data) => {
                history.push(`/individualDriverDetails/${data.userID}`);
              },
            },
          ]}
          icons={{
            Filter: () => <div />,
          }}
          localization={{
            pagination: {
              labelDisplayedRows: "{from}-{to} of {count}",
              labelRowsSelect: "rows",
              labelRowsPerPage: "Rows per page:",
            },
          }}
        />
      </div>

      <div className="downloadButton_section">
        <CSVLink {...csvLink} style={{ textDecoration: "none" }}>
          <div className="downloadButton">
            <div className="downloadText">Download Driver List</div>
            <iconify-icon
              icon="material-symbols:download-rounded"
              style={{ color: "white" }}
              width="1.5rem"
            ></iconify-icon>
          </div>
        </CSVLink>
      </div>
    </div>
  );
};

export default DriverTable;

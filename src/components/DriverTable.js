import MaterialTable from "material-table";
import React, { useContext, useState } from "react";
import Icon from "@material-ui/core/Icon";
import { Add } from "@material-ui/icons";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { DriverList } from "../context/DriverListContext";
const DriverTable = () => {
  const { driversList } = useContext(DriverList);
  console.log(driversList);
  const [tableData, setTableData] = useState([
    {
      status: "Static",
      moxeyID: "MXUAE-DR00000001",
      transporter: "Trukker",
      driverName_EN: "Abdul Fathah",
      driverName_AR: "عبد الفتاح",
      mobileNO: "+955738645733",
      cust_id: "ARB45678900",
      card_no: "****  ****  ****  2309",
      driverNsdame_AR: "عبد الفتاح",
      mobissleNO: "+955738645733",
      custsd_id: "ARB45678900",
      cardds_no: "****  ****  ****  2309",
    },
  ]);
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
    <div style={{ maxWidth: "100%", marginTop: "10rem" }}>
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
            onclick: () => <CheckBoxIcon />,
          },
        ]}
        icons={{
          Filter: () => <div />,
        }}
        localization={{
          pagination: {
            labelDisplayedRows: "{from}-{to} of {count}",
            labelRowsSelect: "",
            labelRowsPerPage: "Rows per page:",
          },
        }}
      />
      <div className="downloadButton_section">
        <div className="downloadButton">
          <div className="downloadText">Download Driver List</div>
          <iconify-icon
            icon="material-symbols:download-rounded"
            style={{ color: "white" }}
            width="1.5rem"
          ></iconify-icon>
        </div>
      </div>
    </div>
  );
};

export default DriverTable;

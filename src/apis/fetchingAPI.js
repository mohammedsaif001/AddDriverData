import axios from "axios";

const API_KEY = "RGhzemVIZFQ2VWZWRGdUb2UwMUlBeW9MUEZyejd0dUwzaUhsYWExbQ==";
export const countryData = async () => {
  try {
    const { data, status } = await axios.get(
      "https://api.countrystatecity.in/v1/countries",
      {
        headers: {
          "X-CSCAPI-KEY": API_KEY,
        },
      }
    );
    return { data, status };
  } catch (err) {
    const { status, data } = err.response;
    return { data, status };
  }
};

export const cityData = async (iso2) => {
  console.log(iso2);
  try {
    const { data, status } = await axios.get(
      `https://api.countrystatecity.in/v1/countries/${iso2}/cities`,
      {
        headers: {
          "X-CSCAPI-KEY": API_KEY,
        },
      }
    );
    return { data, status };
  } catch (err) {
    const { status, data } = err.response;
    return { data, status };
  }
};

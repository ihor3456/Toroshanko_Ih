async function sendRequest(url, method = "GET", options) {
  return fetch(url, { method: method, ...options });
}

const apiIP = "https://api.ipify.org/?format=json";
const dataIP = "http://ip-api.com/json/";

const foundBtn = document.querySelector("button");
const dataList = document.querySelector("ul");

foundBtn.addEventListener("click", (event) => {
  sendRequest(apiIP)
    .then((response) => response.json())
    .then((IPdata) => {
      const ip = IPdata.ip;
      sendRequest(
        `${dataIP}${ip}?fields=continent,country,regionName,city,district`
      )
        .then((response) => response.json())
        .then((userData) => {
          const continent = document.createElement("li");
          const country = document.createElement("li");
          const regionName = document.createElement("li");
          const city = document.createElement("li");
          const district = document.createElement("li");

          continent.innerHTML = userData.continent;
          country.innerHTML = userData.country;
          regionName.innerHTML = userData.regionName;
          city.innerHTML = userData.city;
          district.innerHTML = userData.district;

          dataList.append(continent);
          dataList.append(country);
          dataList.append(regionName);
          dataList.append(city);
          dataList.append(district);

          // console.log(userData);
        });
    });
});

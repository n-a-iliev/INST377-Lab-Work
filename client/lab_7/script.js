/* eslint-disable consistent-return */

const markers = [];

function filterFunction(event, data, list, mymap) {
  markers.forEach((marker) => {
    marker.remove();
  });
  list.innerHTML = '';
  const filteredList = data.filter((item, index) => {
    const zipcode = event.target.value;
    return item.zip === zipcode;
  });
  console.table(filteredList);

  const limitedList = filteredList.slice(0, 6);

  limitedList.forEach((item, index) => {
    const point = item.geocoded_column_1;
    if (!point || !point.coordinates) {
      return;
    }
    const latLong = point.coordinates;
    const marker = latLong.reverse();

    list.innerHTML += `<div class ="box radius-small padding-1rem"><span class ="resto-name">${item.name}</span> <br>
                                        <span class = "address">${item.address_line_1}</span> <br>
                                         <br>
                                         </div>`;
    markers.push(L.marker(marker).addTo(mymap));
    mymap.setView(marker, 12);
  });
}

async function windowActions() {
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const json = await request.json();
  const dataSet = [];
  const ACCESSTOKEN = 'pk.eyJ1Ijoibmlja2k1MjU2IiwiYSI6ImNrdXZnMGRhaTY5MXoycG8zbjZnem5ubGIifQ.kBnCL0F8W3VTGiI1cChZGw';

  // Leaflet Map

  const mymap = L.map('mapid').setView([38.987, -76.93], 12);
  L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${ACCESSTOKEN}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
  const inputBox = document.querySelector('#search');
  const listOfFilteredItems = document.querySelector('.append-box');
  console.log('displaySet contents', dataSet.length);
  document.addEventListener('input', (event) => { filterFunction(event, json, listOfFilteredItems, mymap); });

  console.log(dataSet);
}

window.onload = windowActions;

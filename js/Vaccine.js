'use strict';
let state = {
  inputtedText: '',
  tableValue:[]
}
let newZip;

// Add Listener to Input Box
document.querySelector('#ZipInput').addEventListener("input", (event) => {
  event.preventDefault();
  let value = inputValue();
  selectInputList(value);

})

function inputValue() {
  let userInput = document.querySelector("input");
  state.inputtedText = userInput.valueAsNumber;
}

//Display of List
function selectInputList() {
    var testValue, table, tr, td, i, txtValue;
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        txtValue = Number(td.textContent); //Get the i-th zipcode
        if (state.inputtedText <10) {
          testValue = Math.floor(txtValue / 10000);
        } else  if (state.inputtedText < 100) {
          testValue = Math.floor(txtValue / 1000);
        } else  if (state.inputtedText < 1000) {
          testValue = Math.floor(txtValue / 100);
        } else if (state.inputtedText < 10000) {
          testValue = Math.floor(txtValue / 10);
        } else {
          testValue = txtValue;
        }
        if (testValue == state.inputtedText) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }  
    }
    state.tableValue = table;
  }

// Add Listener to Button, render markers
document.querySelector("#button").addEventListener("click", (event) => {
  event.preventDefault();
  addMarker();
  document.querySelector('input').value ='';
  state.inputtedText = '';
})

// Add Map
var map = L.map('map').setView([40,-40], 3);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3xOm9QSSZNB2dK7qFbWh', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

function addMarker() {
  //Set original layer of Map
  map.remove();
  map = L.map('map').setView([44,-97], 4);
  L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3xOm9QSSZNB2dK7qFbWh', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

  var table, tr, td, i, txtValue, coordinate, fg;
  table = document.querySelector("table");
  tr = table.getElementsByTagName("tr");
  fg = L.featureGroup().addTo(map);
  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      txtValue = Number(td.textContent);
      if (txtValue == state.inputtedText) {
        coordinate = [Number(tr[i].getElementsByTagName("td")[3].innerText), Number(tr[i].getElementsByTagName("td")[4].innerText)];
          L.marker(coordinate).addTo(fg);
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
  map.fitBounds(fg.getBounds());
}
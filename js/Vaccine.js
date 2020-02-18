'use strict';
let newZip;

document.querySelector("#button").addEventListener("click", (event) => {
    event.preventDefault();
    let value = newInputZip();
    console.log(value);
    myFunction(value);
    document.querySelector('input').value ='';
})

function newInputZip() {
    let inputNum = document.querySelector("input").valueAsNumber;
    return inputNum;
}

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/satellite-v9',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiZG9yaXNsIiwiYSI6ImNrNnNleGVudTAxbzAzZW5wMjR5b2JibTcifQ.EA3W2ouUwHcCW1uFNYxteg'
  }).addTo(mymap);  


  function myFunction(inputNum) {
    var input, table, tr, td, i, txtValue;
    input = inputNum;
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = Number(td.textContent);
        if (txtValue == input) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    //   if (count == tr.length - 1) {
    //     let text = "Sorry, there is no data from the area now."
    //     console.log(text);
    //   }     
    }
  }

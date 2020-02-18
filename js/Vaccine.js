'use strict';
let newZip;

document.querySelector("#button").addEventListener("click", (event) => {
    let inputNum;
    event.preventDefault();
    newInputZip(inputNum);
    console.log(inputNum);
    myFunction(inputNum);
})

function newInputZip(inputNum) {
    inputNum = document.querySelector("input").valueAsNumber;
    console.log(inputNum);
    return inputNum;
}

var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// function myFunction() {
//     // Declare variables
//     var input, filter, table, tr, td, i, txtValue;
//     input = newZip;
//     filter = input.value.toUpperCase();
//     table = document.getElementById("#locationMap");
//     tr = table.getElementsByTagName("tr");
  
//     // Loop through all table rows, and hide those who don't match the search query
//     for (i = 0; i < tr.length; i++) {
//       td = tr[i].getElementsByTagName("td")[0];
//       if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//           tr[i].style.display = "";
//         } else {
//           tr[i].style.display = "none";
//         }
//       }
//     }
//   }

  var mymap = L.map('#locationMap').setView([51.505, -0.09], 13);
  // console.log(mymap);
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
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = Number(td.textContent);
        if (txtValue == input) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

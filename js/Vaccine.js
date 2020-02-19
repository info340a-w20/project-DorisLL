'use strict';

let newZip;
document.querySelector("#button").addEventListener("click", (event) => {
    event.preventDefault();
    let value = newInputZip();
    selectList(value);
    selectPoint(value);
    document.querySelector('input').value ='';
})

function newInputZip() {
    let inputNum = document.querySelector("input").valueAsNumber;
    return inputNum;
}

function selectList(inputNum) {
    var input, table, tr, td, i, txtValue;
    input = inputNum;
    table = document.querySelector("table");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5];
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

    //Map
    let map = L.map('map').setView([0,0], 1);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3xOm9QSSZNB2dK7qFbWh', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);

    function selectPoint(inputNum) {
        map.remove();
        map = L.map('map').setView([0,0], 1);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=3xOm9QSSZNB2dK7qFbWh', {
      attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);
        
        var input, table, tr, td, i, txtValue;
        input = inputNum;
        table = document.querySelector("table");
        tr = table.getElementsByTagName("tr");
        for (i = 1; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[5];
          if (td) {
            txtValue = Number(td.textContent);
            if (txtValue == input) {
                L.marker([Number(tr[i].getElementsByTagName("td")[3].innerText), Number(tr[i].getElementsByTagName("td")[4].innerText)]).addTo(map);
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }  
        }
      }

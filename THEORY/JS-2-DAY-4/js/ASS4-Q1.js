const table = document.getElementsByTagName("table")[0];

table.tBodies[0].rows[0].style.backgroundColor = "pink";
table.tBodies[0].rows[1].style.backgroundColor = "blue";
table.tBodies[0].rows[2].style.backgroundColor = "brown";
table.tBodies[0].rows[3].style.backgroundColor = "gold";
table.tBodies[0].rows[4].style.backgroundColor = "purple";

for (let i = 1; i < 5; i += 2) {
  console.log(table.tHead.rows[0].cells[i].innerText);
  for (let j = 0; j < 5; j++) {
    console.log(table.tBodies[0].rows[j].cells[i].innerText);
  }
}

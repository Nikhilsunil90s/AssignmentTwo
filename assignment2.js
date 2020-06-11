function getInput(){
    var row = prompt("Enter Number Of Rows You Want <Must Be Lesser Than 15> : ");
    var column = prompt("Enter Number Of Columns You Want <Must Be Lesser Than 15> : ");
    rows = parseInt(row);
    columns = parseInt(column);
    generate_table(rows, columns);
}

function generate_table(rows, columns) {
    // get the reference for the body
    var body = document.getElementById("divtable");
  
    // creates a <table> element and a <tbody> element
    //var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 1; i <= rows; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 1; j <= columns; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode(i+","+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    body.appendChild(tblBody);
    // appends <table> into <body>
    //body.appendChild(tbl);
    // sets the border attribute of tbl to 4;
    //tbl.setAttribute("style" , "width : 300px;");
    body.setAttribute("border", "4");
  } 
function insert_Row() {
    //Write your code here
    // Get the table element by its id
    var table = document.getElementById("sampleTable");

    // Insert a new row at the top
    var newRow = table.insertRow(0);

    // Insert two cells in the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Add text to the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}

  
  
}

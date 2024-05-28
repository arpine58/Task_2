function refreshPage() {
    location.reload();
}

function addInputNumber() {
    var inputNumber = document.createElement('input');
    inputNumber.type = 'number';
    document.body.appendChild(inputNumber);
}

function addToTable() {
    var table = document.getElementById('myTable');
    var newRow = table.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = 'New';
    cell2.innerHTML = 'Row';
}

const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("Expense-list");

expenseForm.addEventListener("submit", function(event){
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    if(description && category && !isNaN (amount)){
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${description}</td><td>${category}</td><td>${amount}</td>`;
        expenseList.appendChild(newRow);

        document.getElementById('description').value = ''
        document.getElementById('category').value = ''
        document.getElementById('amount').value = ''
    }
    else{
        alert("Please fill out all fields with valid data")
    }
})
function deleteAllRows() {
    // Select the table body element
    var tbody = document.getElementById('Expense-table').getElementsByTagName('tbody')[0];
    
    // Remove all <tr> elements within the <tbody>
    while (tbody.rows.length > 0) {
        tbody.deleteRow(0);
    }
}
document.addEventListener("DOMContentLoaded", async function() {
    await fetchData();
});

async function fetchData() {
    try {
        const response = await fetch('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole');
        const data = await response.json();
        populateTable(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function populateTable(data) {
    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = '';

    data.forEach(user => {
      const row = document.createElement('tr');
      const firstNameCell = document.createElement('td');
      const lastNameCell = document.createElement('td');
      const emailCell = document.createElement('td');
      const createdCell = document.createElement('td');
      const addressCell = document.createElement('td');
      const balanceCell = document.createElement('td');

      firstNameCell.textContent = user.first;
      lastNameCell.textContent = user.last;
      emailCell.textContent = user.email;
      createdCell.textContent = user.created;
      addressCell.textContent = user.address;
      balanceCell.textContent = user.balance;

      row.appendChild(firstNameCell);
      row.appendChild(lastNameCell);
      row.appendChild(emailCell);
      row.appendChild(createdCell);
      row.appendChild(addressCell);
      row.appendChild(balanceCell);

      tableBody.appendChild(row);
    });
}
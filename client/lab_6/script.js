async function windowActions() {
  const request = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
  const json = await request.json();
  const dataSet = [];

  console.log('displaySet contents', dataSet.length);

  const inputBox = document.querySelector('#search');
  const listOfFilteredItems = document.querySelector('.append-box');
  document.addEventListener('input', (event) => {
    if (!event.target.value) {
      document.querySelector('.append-box').innerHTML = '';
      return false;
    }
    const filteredList = json.filter((item, index) => {
      const zipcode = event.target.value;
      return item.zip === zipcode;
    });
    console.table(filteredList);

    filteredList.forEach((item, index) => {
      listOfFilteredItems.innerHTML += `<span class ="resto-name">${item.name}</span> <br>
                                        <span class = "category-name">${item.category}</span> <br>
                                        <span class = "address">${item.address_line_1}</span> <br>
                                        <span class = "address">${item.city}</span> <br>
                                        <span class = "address">${item.zip}</span> <br>
                                        , <br>`;
    });
  });

  console.log(dataSet);
}

window.onload = windowActions;

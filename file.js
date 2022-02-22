let output = document.getElementById('forms')
let results = document.getElementById('result');
let addItem = document.getElementsByTagName('button');

output.addEventListener('submit', function (e) {
    e.preventDefault()
    const name = document.getElementById('name').value;
    const select = document.getElementById('select').value;
    const description = document.getElementById('text2').value;
    const price = document.getElementById('prices').value;
    const discount = document.getElementById('disc').value;
    let trashbtn = document.createElement('i');
    trashbtn.innerHTML = "<i class='fa-solid fa-ban'></i>"
    trashbtn.style.cursor = "pointer";
    trashbtn.style.margin="40px";


    let table = document.getElementById("display").getElementsByTagName("tbody")[0];

    let newRow = table.insertRow(table.length);


    let count = newRow.insertCell(0);
    count.innerHTML = table.rows.length;
    let names = newRow.insertCell(1);
    names.innerHTML = name;
    let selects = newRow.insertCell(2);
    selects.innerHTML = select;
    let descriptions = newRow.insertCell(3);
    descriptions.innerHTML = description;
    let prices = newRow.insertCell(4);
    prices.innerHTML = price;
    let discounts = newRow.insertCell(5);
    discounts.innerHTML = discount + "%";
    let pwd = newRow.insertCell(6);
    let output = (discount * price) / 100;
    pwd.innerText = price - output;
    let action= newRow.insertCell(7);
    action.appendChild(trashbtn)


    trashbtn.addEventListener("click", function (e) {
        e.preventDefault()
        trashbtn.innerHTML = `<i class="fa-solid fa-ban"></i>`
        e.target.parentElement.parentElement.innerHTML = "";
    })



    document.getElementById('name').value = '';
    document.getElementById('select').value = '';
    document.getElementById('text2').value = '';
    document.getElementById('prices').value = '';
    document.getElementById('disc').value = '';

})
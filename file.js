let output = document.getElementById('forms')
let showTable = document.getElementById("display")
let rowIndex
//let count


output.addEventListener('submit', function (e) {
    e.preventDefault()

    showTable.style.visibility = "visible";

    const name = document.getElementById('name').value;
    const select = document.getElementById('select').value;
    const description = document.getElementById('text2').value;
    const price = document.getElementById('prices').value;
    const discount = document.getElementById('disc').value;

    let table = document.getElementById("display").getElementsByTagName("tbody")[0];

    if (table.rows.length === 0) {
       console.log("this is rowsa===>",table.rows.length)
        rowIndex = 0
    } else {
        rowIndex = rowIndex + 1
    }

    let newRow = table.insertRow(rowIndex);

    const count = newRow.insertCell(0);
    count.className = 'recordId';
    count.innerHTML = rowIndex + 1

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
    let result = price - output
    pwd.innerText = result.toFixed(1);
    // console.log("this is resultup===>", result.toFixed(1))

    let action = newRow.insertCell(7);
    let trashbtn = document.createElement('i');
    //trashbtn.id = rowIndex + 1
    trashbtn.className = 'fa-solid fa-ban';
    trashbtn.style.cursor = "pointer";
    action.appendChild(trashbtn);



    let result1
    if (table.rows.length === 1) {
        const totalRow = document.createElement('tr');
        totalRow.setAttribute("id", 'row')

        let total = totalRow.insertCell(0)
        total.innerHTML = "total";

        let countRow = totalRow.insertCell(1)
        countRow.innerHTML = rowIndex + 1;

        let name1 = totalRow.insertCell(2);
        name1.innerHTML = "";

        let totalPrice = totalRow.insertCell(3);
        totalPrice.innerHTML = "";

        let dis = totalRow.insertCell(4);
        let pricess = price
        dis.innerHTML = pricess;

        let pri = totalRow.insertCell(5);
        pri.innerHTML = "";

        let totalDiscount = totalRow.insertCell(6);
        result1 = +price - +output;
            console.log("this isresult===>", result1)
        totalDiscount.innerHTML = +result1.toFixed(1);
       console.log("thi is discount total",totalDiscount)
        let del = totalRow.insertCell(7);
        del.innerHTML = "";

        table.appendChild(totalRow);

        document.getElementById('name').value = '';
        document.getElementById('select').value = '';
        document.getElementById('text2').value = '';
        document.getElementById('prices').value = '';
        document.getElementById('disc').value = '';


    } else {
        let childRow = document.querySelector("#row").children;
        childRow[1].innerText = parseInt(childRow[1].innerText) + 1;
        childRow[4].innerText = parseInt(childRow[4].innerText) + parseInt(price);
        const result = +price - +output;
        const result2 = +childRow[6].innerText + +result.toFixed(1)
        childRow[6].innerText = result2.toFixed(1);


        document.getElementById('name').value = '';
        document.getElementById('select').value = '';
        document.getElementById('text2').value = '';
        document.getElementById('prices').value = '';
        document.getElementById('disc').value = '';

    }

    trashbtn.addEventListener("click", function (e) {
        e.preventDefault();

        rowIndex = rowIndex - 1;
        console.log("rowindex===>",rowIndex)

        const rowText = e.target.parentElement.parentElement.children[0].innerText;

        e.target.parentElement.parentElement.remove();

        const records = document.querySelectorAll(".recordId");

        for (let i = 0; i < records.length; i++) {
            if (parseInt(records[i].innerHTML) > parseInt(rowText)) {
                records[i].innerHTML = parseInt(records[i].innerHTML) - 1;

            }
        }

        if (table.rows.length === 1) {
            const childRow = document.querySelector("#row").children;
            childRow[1].innerText = parseInt(childRow[1].innerText) - parseInt(childRow[1].innerText)
            childRow[4].innerText = parseInt(childRow[4].innerText) - parseInt(childRow[4].innerText)
            childRow[6].innerText = parseInt(childRow[6].innerText) - parseInt(childRow[6].innerText);
            showTable.style.visibility = "hidden";


        } else {
            const childRow = document.querySelector("#row").children;
            childRow[1].innerText = parseInt(childRow[1].innerText) - 1;
            childRow[4].innerText = parseInt(childRow[4].innerText) - parseInt(price);
            const result2 = +childRow[6].innerText - +result.toFixed(1);
            childRow[6].innerText = result2.toFixed(1);
        }
    })


})

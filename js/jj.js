document.getElementById("submit").onclick = function (event) {
  event.preventDefault();
  row(
    document.getElementById("item").value,
    document.getElementById("price").value
  );
};
function row(item, priceIdr) {
  var MyTable = document.getElementById("table");
  // insert new row.
  var NewRow = MyTable.insertRow(-1);
  console.log(MyTable);
  var item1 = NewRow.insertCell(0);
  var priceIdr1 = NewRow.insertCell(1);
  var priceRub = NewRow.insertCell(2);
  var button1 = NewRow.insertCell(3);
  item1.innerHTML = item;
  priceIdr1.innerHTML = priceIdr;
  priceRub.innerHTML = (priceIdr * 5) / 1000;
  button1.innerHTML = editTd;
  console.log(item, priceIdr, priceRub, button1);
}

//-------------------------------------------

//---------------------------------------------
// const form = document.getElementById('add_argument')
// function getFormValue(event) {
//     event.preventDefault();
//     let item = form.querySelector('[name="item"]'), //получаем поле item
//     price = form.querySelector('[name="price"]'); //получаем поле price
//     let data = {
//         item: item.value,
//         price: price.value,
//         priceRub : ((price.value) *5 / 1000);}
//         return data;
//     };

// function row(data) {
//     const tbody = document.querySelector("#table tbody");
//     const tr = document.createElement("tr");
//     let td = data;
//     tr.append(td);
//     tbody.append(tr);
//     }
// //------------------------------------------------------

// document.getElementById("add_argument").onsubmit = function (event) {
//     event.preventDefault();

//     // const item = document.getElementById("item").value;
//     // const rubPrice = document.getElementById("price").value;
//     // const idrPrice = (rubPrice * 5) / 1000;

//     const tbody = document.querySelector("#table tbody");
//     const tr = document.createElement("tr");

//     let td = {
//         td1: (document.createElement("td")).innerText = document.getElementById("item").value,
//         td2: (document.createElement("td")).innerText = document.getElementById("price").value,
//         td3: (document.createElement("td")).innerText = (document.getElementById("price").value) * 5) / 1000,
//         td4: (document.createElement("td")).innerText =  editTd}
//     tr.append(td);
//     tbody.append(tr);
//     console.log(tbody);
//   };

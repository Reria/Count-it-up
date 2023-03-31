const editTd = `<button type="button" class="edit">
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#C1B0B0"  d="M11.8374 3.01575C12.1158 4.00418 12.6433 4.90458 13.3694 5.63069C14.0955 6.3568 14.9959 6.8843 15.9843 7.16266" 
    stroke-width="1.25918" stroke-miterlimit="10" 
    stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M12.7859 2.06714L6.17096 8.68205C5.91912 8.93389 5.66729 
    9.42917 5.61692 9.79013L5.25595 12.3169C5.12164
    13.2319 5.76802 13.8699 6.68303 13.744L9.20979 13.383C9.56236 13.3326 
    10.0576 13.0808 10.3179 12.829L16.9328 6.21405C18.0744 
    5.07239 18.6117 3.74605 16.9328 2.06714C15.2539 0.388229 13.9275
    0.925481 12.7859 2.06714Z" stroke="#C1B0B0" stroke-width="1.25918" s
    troke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5551 1.21088H6.87619C2.67891 1.21088 1 2.88979 1 7.08707V12.1238C1 16.3211 2.67891 18 6.87619 
    18H11.9129C16.1102 18 17.7891 16.3211 17.7891 12.1238V10.4449" 
    stroke="#C1B0B0" stroke-width="1.25918" stroke-linecap="round" stroke-linejoin="round"/>
</svg>                                       
</button>
<button type="button" class="delete">
<svg width="19" height="19" viewBox="0 0 19
    19" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M18 4.383C14.855 4.1025 11.6911
        3.958 8.53667 3.958C6.66667 3.958
        4.79667 4.043 2.92667 4.213L1
        4.383M6.19444 3.5245L6.40222
        2.411C6.55333 1.6035 6.66667 1
        8.26278 1H10.7372C12.3333 1 12.4561
        1.6375 12.5978 2.4195L12.8056
        3.5245M15.9694 7.069L15.3556
        15.6285C15.2517 16.963 15.1667 18
        12.5317 18H6.46833C3.83333 18
        3.74833 16.963 3.64444
        15.6285L3.03056 7.069M7.92278
        13.325H11.0678M7.13889
        9.925H11.8611" stroke="#C1B0B0"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"/>
    </svg>
</button>`;

const rows = [
  {
    id: 1,
    item: "Молоко",
    idrPrice: 10000,
    rubPrice: 50,
  },
  {
    id: 2,
    item: "Хлеб",
    idrPrice: 10000,
    rubPrice: 50,
  },
  {
    id: 3,
    item: "Рис",
    idrPrice: 10000,
    rubPrice: 50,
  },
];

const updateTable = function () {
    for (let i=0; i<rows.length; i++) {
        addRow(rows[i].item, rows[i].idrPrice, rows[i].rubPrice);
    }
    console.log("Таблица обновлена");
};

updateTable();

function addRow(item, priceIdr, rubPrice) {
  const myTable = document.getElementById("table");
  const newRow = myTable.insertRow(-1);

  const item1 = newRow.insertCell(0);
  const priceIdr1 = newRow.insertCell(1);
  const priceRub = newRow.insertCell(2);
  const button1 = newRow.insertCell(3);
  item1.innerHTML = item;
  priceIdr1.innerHTML = priceIdr;
  priceRub.innerHTML = rubPrice;
  button1.innerHTML = editTd;
}

const add_new_row = function () {
// код вынесен из обработчика нажатия на кнопку в отдельную функцию для удоюства
  const item = document.getElementById("item").value;
  const rubPrice = document.getElementById("price").value;
  const idrPrice = (rubPrice * 5) / 1000;

  rows.push({
    id: rows.length + 1,
    item: item,
    idrPrice: idrPrice,
    rubPrice: rubPrice,
  });

  addRow(item, idrPrice, rubPrice);
}


document.getElementById("add_argument").onsubmit = function (event) {
  event.preventDefault();
  
  updateTable();
  //add_new_row();

};

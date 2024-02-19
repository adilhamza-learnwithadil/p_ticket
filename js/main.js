const busSeat = document.getElementsByClassName('select_seat');
let count = 0;
let booked = 40;

for (const btn of busSeat) {
  btn.addEventListener('click', function (e) {
    changeColor(this);

    const seatNum = e.target.innerText;
    const yourClass = 'Economoy';
    const price = 550;

    const seatBuyList = document.getElementById('seat_buy_list');
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = seatNum;
    const p2 = document.createElement('p');
    p2.innerText = yourClass;
    const p3 = document.createElement('p');
    p3.innerText = price;

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    seatBuyList.appendChild(li);

    if (li >= 4) {
      element.style.backgroundColor = '#1DD100';
      element.style.color = 'white';
    } else {
      alert('You can select 4 seat')
    }
    totalCost('total_price', parseInt(price));
    totalCost('grand_total', parseInt(price));

    // Seat + & -
    count = count + 1;
    document.getElementById('seat_count').innerText = count;
    booked = booked - 1;
    document.getElementById('booked').innerText = booked;
  });
}

function totalCost(id, value) {
  const totalPrice = document.getElementById(id).innerText;
  const convertTotalCost = parseInt(totalPrice);
  const mainTotal = (document.getElementById(id).innerText =
    convertTotalCost + parseInt(value));
}
function totalCost(id, value) {
  const grandTotal = document.getElementById(id).innerText;
  const convertGrandTotalCost = parseInt(grandTotal);
  const mainGrandTotal = (document.getElementById(id).innerText =
    convertGrandTotalCost + parseInt(value));
}



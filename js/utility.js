function changeColor(element) {
  element.style.backgroundColor = '#1DD100';
  element.style.color = 'white';
}

function countedNumber(id){
  const totalPrice = document.getElementById(id).innerText;
  const convartTotalPrice = parseInt(totalPrice);
  return  convartTotalPrice;
}



function totalCost(value){
  const totalPrice = countedNumber('total_price');
  const totalSum = totalPrice + parseInt(value);
  document.getElementById('total_price').innerText = totalSum;
}

function grandTotal(){
  const totalPrice = countedNumber('total_price');
  document.getElementById("grand_total").innerText = totalPrice;
      // const couponInput = document.getElementById('coupon_input').value;
      // if(couponInput == 'NEW15'){
      //     const discount = totalPrice*0.2;
      //     console.log(discount);
      // }else{
      //     alert('Plese enter valid coupon code.');
      // }
}

function grandTotalWithCoupon(){
  const grandTotalPrice = countedNumber('total_price');
  const couponInput = document.getElementById('coupon_input').value;
  if(couponInput == 'NEW15'){
      const discount = parseInt(grandTotalPrice*0.15);
      document.getElementById("grand_total").innerText = grandTotalPrice - discount;
      document.getElementById("coupon_code").classList.add('hidden');
  }else if(couponInput == 'Couple 20'){
      const discount = parseInt(grandTotalPrice*0.2);
      document.getElementById("grand_total").innerText = grandTotalPrice - discount;
      document.getElementById("coupon_code").classList.add('hidden');
  }else{
      alert('Plese enter valid coupon code.');
  }
}

function totalSeatSelect(value){
  const totalSeatSelect = countedNumber('seat_count');
  const totalSeatSum = totalSeatSelect + 1;
  document.getElementById('seat_count').innerText = totalSeatSum;
}

function totalSeatLeft(value){
  const totalSeatLeft = countedNumber('booked');
  const totalSeatLeftSum = totalSeatLeft - 1;
  document.getElementById('booked').innerText = totalSeatLeftSum;
}


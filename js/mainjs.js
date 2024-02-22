const allButton = document.getElementsByClassName('select_seat');

for(const btn of allButton){
    btn.addEventListener('click', function(event){
        // document.getElementsByClassName('select_seat').disabled = true;
        if(countedNumber('seat_count')+1>4){
            alert('You can only select 4 seat');
            return;
        }

        const seatNum = event.target.innerText;
        const yourClass = 'Economy';
        const price = 550;
        // const seatSelect = 0;
        
        
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

        

        
        
        
        
        changeColor(this);
        
        totalCost(price);
        grandTotal();
        totalSeatLeft('booked');
        totalSeatSelect('seat_count');
    })
}




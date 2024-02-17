const cards = document.querySelectorAll('.card');
const container = document.getElementById('title-container');
const total = document.getElementById('totalPrice')
const discount = document.getElementById('discountPrice')
const totalMoney = document.getElementById('total')
const applyBtn = document.getElementById('apply-btn')

let TotalPrice = 0;
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener('click', function () {
        // get values 
        const title = card.querySelector('h3').innerText
        const price = parseFloat(card.querySelector('span').innerText.split(' ')[1])

        // items title add
        const li = document.createElement('li');
        li.innerText = ' ' + title;
        container.appendChild(li);
        // calculate price 
        TotalPrice += price;
        total.innerText = TotalPrice;
        discount.innerText = 0;
        totalMoney.innerText = TotalPrice

        // discount part
        applyBtn.addEventListener('click', function () {
            const discountText = document.getElementById('input-field').value;
            const discountValue = discountText.split(" ").join("").toUpperCase();
            console.log(discountValue);

            // discount apply
            if (discountValue === 'SELL200') {
                if (TotalPrice >= 200) {
                    // discount calculate
                    let DiscountMoney = TotalPrice * 0.2

                    // TOTAL MONEY Calculate
                    discount.innerText = DiscountMoney.toFixed(2);
                    totalMoney.innerText = TotalPrice - DiscountMoney;
                    discountValue = '';
                }
                else {
                    alert('please purchase more than 200$')
                    discountValue = '';
                }
            };
            //             // to remove add items
            // container.addEventListener('click',function(event){
            //     console.log(event.target);
            //     event.target.parentNode.removeChild(event.target);

            //     console.log(price);
            // })
        })

    })
};



// purchase btn
// purchase(){}

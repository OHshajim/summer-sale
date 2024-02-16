const cards = document.querySelectorAll('.card');
let titleCount = 1 ;
let TotalPrice = 0 ;
for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    card.addEventListener('click', function () {
        // get values 
        const title = card.querySelector('h3').innerText
        const price =parseFloat( card.querySelector('span').innerText.split(' ')[1])

        // items title set
        const container = document.getElementById('title-container');
        const p = document.createElement('p') ;
        p.innerText =titleCount +'. '+ title ;
        container.appendChild(p);
        titleCount++ ;

        // calculate price 
        TotalPrice +=price;
        const total = document.getElementById('totalPrice')
        total.innerText = TotalPrice ;

        // discount part
        const applyBtn = document.getElementById('apply-btn')
        applyBtn.addEventListener('click',function(){
            const discountText = document.getElementById('input-field')
            // discount apply
            if(discountText.value === 'SELL 200'){
                // discount calculate
                let DiscountMoney =  TotalPrice*0.2
                const discount = document.getElementById('discountPrice')

                // TOTAL MONEY Calculate
                const totalMoney = document.getElementById('total')
                discount.innerText = DiscountMoney ;
                totalMoney.innerText =  TotalPrice - DiscountMoney ;
            }    
        })
        
    })
};

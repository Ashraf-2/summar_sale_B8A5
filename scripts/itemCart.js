// console.log('connect');
//one
function setProductName_One() {
    const perameter1 = 'first-card-title';
    const CardTitlleName1 = ElementName(perameter1);
    SetLiText(CardTitlleName1);

    //pricing area
    const prevTotal_Price = totalPrice('first-price')
    const prevTotalValue = toatlSide('total-price', prevTotal_Price);
}
//second
function setProductName_Two() {
    const perameter2 = 'second-card-title';
    const CardTitlleName2 = ElementName(perameter2);
    SetLiText(CardTitlleName2);

    //pricing area
    const prevTotal_Price = totalPrice('second-price')
    const prevTotalValue = toatlSide('total-price', prevTotal_Price);
}
//third 
function setProductName_Three() {
    const perameter3 = 'third-card-title';
    const CardTitlleName3 = ElementName(perameter3);
    SetLiText(CardTitlleName3);

    //pricing area
    const prevTotal_Price = totalPrice('third-price')
    const prevTotalValue = toatlSide('total-price', prevTotal_Price);
}
//fourth
function setProductName_Fourth() {
    const perameter4 = 'fourth-card-title';
    const CardTitlleName4 = ElementName(perameter4);
    SetLiText(CardTitlleName4);

    //pricing area
    const prevTotal_Price = totalPrice('fourth-price')
    const prevTotalValue = toatlSide('total-price', prevTotal_Price);

}
//fifth
function setProductName_Fifth() {
    const perameter5 = 'fifth-card-title';
    const CardTitlleName5 = ElementName(perameter5);
    SetLiText(CardTitlleName5);

    const prevTotal_Price = totalPrice('fifth-price')

    const prevTotalValue = toatlSide('total-price', prevTotal_Price);

}
//sixth
function setProductName_Sixth() {

    const perameter6 = 'sixth-card-title';
    const CardTitlleName6 = ElementName(perameter6);          //(cardId)

    SetLiText(CardTitlleName6);

    //pricing area
    const prevTotal_Price = totalPrice('sixth-price')
    const prevTotalValue = toatlSide('total-price', prevTotal_Price);
}


//phase-2
function ElementName(pera) {

    const cardTitleElement = document.getElementById(pera);
    const cardTitle = cardTitleElement.innerText;
    // console.log('returned on function 2->',cardTitle);
    return cardTitle;
}

//phase-3
function SetLiText(cardTitleParameter) {
    const listParent = document.getElementById('ol-id');
    const LiElement = document.createElement('li');
    LiElement.innerText = cardTitleParameter;
    LiElement.setAttribute('class', 'lists');

    listParent.appendChild(LiElement);
}

//------total pricing area-------
function totalPrice(peraPriceTotal) {
    const priceElement = document.getElementById(peraPriceTotal); //'fifth-price';
    const PriceText = priceElement.innerText;
    const priceValue = parseFloat(PriceText);

    return priceValue;
}
let newTotalValue = 0;
//total side
function toatlSide(TotalID, prevTotal_Price_Pera) {

    const prevTotal_PriceElement = document.getElementById(TotalID);
    const prevTotal_PriceText = prevTotal_PriceElement.innerText;
    const prevTotal_PriceValue = parseFloat(prevTotal_PriceText);

    newTotalValue = parseFloat(prevTotal_PriceValue + prevTotal_Price_Pera);
    newTotalValue = newTotalValue.toFixed(2);
    // make the purchase btn enable
    if (newTotalValue > 0) {
        const purchaseBtn = document.getElementById('purchase-btn');
        purchaseBtn.removeAttribute('disabled')
    }
    prevTotal_PriceElement.innerText = newTotalValue;

    const discountElement = document.getElementById('discount');
    const PrevdiscountText = discountElement.innerText;
    const PrevdiscountValue = parseFloat(PrevdiscountText);
    // console.log(PrevdiscountValue);
    console.log('total price: ', newTotalValue);


    //now total paid section
    const totalElement = document.getElementById('total');
    // console.log(totalElement);
    const prevTotal_Text = totalElement.innerText;
    const prevTotal_Value = parseFloat(prevTotal_Text);
    // console.log('total : ',prevTotal_Value)

    let discoutedAmount = 0;
    if (newTotalValue >= 200) {
        // make the apply btn enable
        const applyBtn = document.getElementById('apply-btn');
        applyBtn.removeAttribute('disabled')

        //---------start
        //------end
    }
    totalElement.innerText = newTotalValue;
}
let text;
document.getElementById('couple-field').addEventListener('keyup', function (event) {
    //1. coupon text collection from input
    text = event.target.value;
    console.log('text_>', text);
})

function reduceby20() {
    const applyBtn = document.getElementById('apply-btn');

    if (text === 'SELL200') {
        const discountElement = document.getElementById('discount');

        let discoutedAmount = newTotalValue * 0.20;
        discoutedAmount = discoutedAmount.toFixed(2);
        let total_Value = 0;
        if (discoutedAmount > 0) {
            // minus the discout from the total price
            total_Value = newTotalValue - discoutedAmount;
            total_Value = total_Value.toFixed(2);
            //put the total into the total element tag innertext
            const totalElement = document.getElementById('total');
            totalElement.innerText = total_Value;
            discountElement.innerText = discoutedAmount;
        }

        // const prevTotal_Text = totalElement.innerText;
        // const prevTotal_Value = parseFloat(prevTotal_Text);
    }
}

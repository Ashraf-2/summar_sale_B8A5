// console.log('connect');
//one
function setProductName_One(){
    const perameter1 = 'first-card-title';
    const CardTitlleName1 = ElementName(perameter1);
    SetLiText(CardTitlleName1);

    //pricing area
    const prevTotal_Price = totalPrice('first-price')
    const prevTotalValue = toatlSide('total-price',prevTotal_Price);
}
//second
function setProductName_Two(){
    const perameter2 = 'second-card-title';
    const CardTitlleName2 = ElementName(perameter2);
    SetLiText(CardTitlleName2);

    //pricing area
    const prevTotal_Price = totalPrice('second-price')
    const prevTotalValue = toatlSide('total-price',prevTotal_Price);
}
//third 
function setProductName_Three(){
    const perameter3 = 'third-card-title';
    const CardTitlleName3 = ElementName(perameter3);
    SetLiText(CardTitlleName3);

    //pricing area
    const prevTotal_Price = totalPrice('third-price')
    const prevTotalValue = toatlSide('total-price',prevTotal_Price);
}
//fourth
function setProductName_Fourth(){
    const perameter4 = 'fourth-card-title';
    const CardTitlleName4 = ElementName(perameter4);
    SetLiText(CardTitlleName4);

    //pricing area
    const prevTotal_Price = totalPrice('fourth-price')
    const prevTotalValue = toatlSide('total-price',prevTotal_Price);

}
//fifth
function setProductName_Fifth() {
    const perameter5 = 'fifth-card-title';
    const CardTitlleName5 = ElementName(perameter5);
    SetLiText(CardTitlleName5);

    //pricing prod
    // const priceElement = document.getElementById(); //'fifth-price';
    // const PriceText = priceElement.innerText;
    // const priceValue = parseFloat(PriceText);
    // console.log('fifth price value : ',priceValue);
    // console.log(typeof(priceValue));

    const prevTotal_Price = totalPrice('fifth-price')



    // //total side
    // const prevTotalElement =  document.getElementById('total-price');
    // const prevTotalText = prevTotalElement.innerText;
    // const prevTotalValue = parseFloat(prevTotalText);
    // console.log('prev total value: ',prevTotalValue);
    // console.log(typeof(prevTotalValue));

    const prevTotalValue = toatlSide('total-price',prevTotal_Price);

    // const newTotalValue = prevTotalValue + prevTotal_Price;      //prevTotalValue
    // console.log(newTotalValue);
    // console.log('new total value: ', newTotalValue);
    // prevTotalElement.innerText = newTotalValue; //newTotalValue
    // console.log(prevTotalElement);

}
//sixth
function setProductName_Sixth() {
    // console.log('clicked');
    //1. collect the list parent
    //2. collect the name of the card
    const perameter6 = 'sixth-card-title';
    const CardTitlleName6 = ElementName(perameter6);          //(cardId)

    // console.log('returned->',CardTitlleName);
    // console.log(cardName);
    //3. set the card name in the list

    /*
    const LiElement = document.createElement('li');
    LiElement.innerText = cardName;
    listElementParent.appendChild(LiElement);
    */

    SetLiText(CardTitlleName6);
    //4. collect the price of the card
    //5. calculate the previous price and current price and put the total price.

    //pricing area
    const prevTotal_Price = totalPrice('sixth-price')
    const prevTotalValue = toatlSide('total-price',prevTotal_Price);
}


//phase-2
function ElementName(pera) {
    // console.log('2nd function inside of');
    // const cardTitleElement = document.getElementById('sixth-card-title');
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
    
    listParent.appendChild(LiElement);
}

//------total pricing area-------
function totalPrice(peraPriceTotal){
    const priceElement = document.getElementById(peraPriceTotal); //'fifth-price';
    const PriceText = priceElement.innerText;
    const priceValue = parseFloat(PriceText);
    // console.log('fifth price value : ',priceValue);
    // console.log(typeof(priceValue));
    return priceValue;
}
//total side
function toatlSide(TotalID,prevTotal_Price_Pera){
    const prevTotalElement =  document.getElementById(TotalID);
    const prevTotalText = prevTotalElement.innerText;
    const prevTotalValue = parseFloat(prevTotalText);
    // console.log('prev total value: ',prevTotalValue);
    // console.log(typeof(prevTotalValue));
    // return prevTotalValue;

    const newTotalValue = prevTotalValue + prevTotal_Price_Pera; 
    prevTotalElement.innerText = newTotalValue;

}
    
// console.log('connect');

//fourth
function setProductName_Fourth(){
    const perameter4 = 'fourth-card-title';
    const CardTitlleName4 = ElementName(perameter4);
    SetLiText(CardTitlleName4);
}
//fifth
function setProductName_Fifth() {
    const perameter5 = 'fifth-card-title';
    const CardTitlleName5 = ElementName(perameter5);
    SetLiText(CardTitlleName5);
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
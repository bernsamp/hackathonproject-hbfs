export function userOptions(){
    console.log('im hereasda');
$('#harderShirtElement').click(renderHarderShirt);
$('#betterShirtElement').click(renderBetterShirt);
$('#fasterShirtElement').click(renderFasterShirt);
$('#strongerShirtElement').click(renderStrongerShirt);
}


function renderHarderShirt(){
    console.log('vasco');
    deleteAll();
    console.log("banana")
    $('#backgroundContainer').append(dressHarderShirtElement());
    console.log('faz');
   
}

function dressHarderShirtElement(){
    console.log("created hard")
    return (
        '<img id="hardShirtElement" src="./img/harder/harder-shirt.png" />'
    )
}

function renderBetterShirt(){
    console.log('did it');
    deleteAll();
    console.log('better');
    const bettShirt = dressBetterShirtElement();
    $('#backgroundContainer').append(bettShirt);
}


function dressBetterShirtElement(){
    console.log("created bet")
    return (
        '<img id="bettShirtElement" src="./img/better/better-shirt.png" />'
    )
}

function renderFasterShirt(){
    console.log('yey');
    deleteAll();
    console.log('no');
    $('#backgroundContainer').append(dressFastShirtElement());
}

function dressFastShirtElement(){
    console.log("created fa")
    return (
        '<img id="fasShirtElement" src="./img/faster/faster-shirt.png" />'
    )
}


function renderStrongerShirt(){
    deleteAll();
    $('#backgroundContainer').append(dressStrongShirtElement());

}

function dressStrongShirtElement(){
    return (
        '<img id="strongShirtElement" src="./img/stronger/stronger-shirt.png" />'
    )
}


function deleteAll(){
    $('#bettShirtElement').remove();
    $('#hardShirtElement').remove();
    $('#fasShirtElement').remove();
    $('#strongShirtElement').remove();
}
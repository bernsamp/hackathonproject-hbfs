export function userOptions(){
    console.log('im hereasda');
$('#harderAccElement').click(renderHarderAcc);
$('#betterAccElement').click(renderBetterAcc);
$('#fasterAccElement').click(renderFasterAcc);
$('#strongerAccElement').click(renderStrongerAcc);
}


function renderHarderAcc(){
    console.log('vasco');
    deleteAll();
    console.log("banana")
    $('#backgroundContainer').append(dressHarderAccElement());
    console.log('faz');
   
}

function dressHarderAccElement(){
    console.log("created hard")
    return (
        '<img id="hardAccElement" src="./img/harder/harder-accessories.png" />'
    )
}

function renderBetterAcc(){
    console.log('did it');
    deleteAll();
    console.log('better');
    const bettAcc = dressBetterAccElement();
    $('#backgroundContainer').append(bettAcc);
}


function dressBetterAccElement(){
    console.log("created bet")
    return (
        '<img id="bettAccElement" src="./img/better/better-accessories.png" />'
    )
}

function renderFasterAcc(){
    console.log('yey');
    deleteAll();
    console.log('no');
    $('#backgroundContainer').append(dressFastAccElement());
}

function dressFastAccElement(){
    console.log("created fa")
    return (
        '<img id="fasAccElement" src="./img/faster/faster-accessories.png" />'
    )
}


function renderStrongerAcc(){
    deleteAll();
    $('#backgroundContainer').append(dressStrongAccElement());

}

function dressStrongAccElement(){
    return (
        '<img id="strongAccElement" src="./img/stronger/stronger-accessories.png" />'
    )
}


function deleteAll(){
    $('#bettAccElement').remove();
    $('#hardAccElement').remove();
    $('#fasAccElement').remove();
    $('#strongAccElement').remove();
}
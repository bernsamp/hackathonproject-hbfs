export function userOptions(){
    console.log('im hereasda');
$('#harderPantsElement').click(renderHarderPants);
$('#betterPantsElement').click(renderBetterPants);
$('#fasterPantsElement').click(renderFasterPants);
$('#strongerPantsElement').click(renderStrongerPants);
}


function renderHarderPants(){
    console.log('vasco');
    deleteAll();
    console.log("banana")
    $('#backgroundContainer').append(dressHarderPantsElement());
    console.log('faz');
   
}

function dressHarderPantsElement(){
    console.log("created hard")
    return (
        '<img id="hardLegElement" src="./img/harder/harder-pants.png" />'
    )
}

function renderBetterPants(){
    console.log('did it');
    deleteAll();
    console.log('better');
    const bettPants = dressBetterPantsElement();
    $('#backgroundContainer').append(bettPants);
}


function dressBetterPantsElement(){
    console.log("created bet")
    return (
        '<img id="bettLegElement" src="./img/better/better-pants.png" />'
    )
}

function renderFasterPants(){
    console.log('yey');
    deleteAll();
    console.log('no');
    $('#backgroundContainer').append(dressFastPantsElement());
}

function dressFastPantsElement(){
    console.log("created fa")
    return (
        '<img id="fasLegElement" src="./img/faster/faster-pants.png" />'
    )
}


function renderStrongerPants(){
    deleteAll();
    $('#backgroundContainer').append(dressStrongPantsElement());

}

function dressStrongPantsElement(){
    return (
        '<img id="strongLegElement" src="./img/stronger/stronger-pants.png" />'
    )
}


function deleteAll(){
    $('#bettLegElement').remove();
    $('#hardLegElement').remove();
    $('#fasLegElement').remove();
    $('#strongLegElement').remove();
}
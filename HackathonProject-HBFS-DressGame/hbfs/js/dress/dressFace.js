export function userOptions(){
    console.log('im here');
$('#harderFaceElement').click(renderHarderFace);
$('#betterFaceElement').click(renderBetterFace);
$('#fasterFaceElement').click(renderFasterFace);
$('#strongerFaceElement').click(renderStrongerFace);
}


function renderHarderFace(){
    console.log('vasco');
    deleteAll();
    console.log("banana")
    $('#backgroundContainer').append(dressHarderFaceElement());
    console.log('faz');
   
}

function dressHarderFaceElement(){
    console.log("created hard")
    return (
        '<img id="hardFaceElement" src="./img/harder/harder-head.png" />'
    )
}

function renderBetterFace(){
    console.log('did it');
    deleteAll();
    console.log('better');
    const bettFace = dressBetterFaceElement();
    $('#backgroundContainer').append(bettFace);
}


function dressBetterFaceElement(){
    console.log("created bet")
    return (
        '<img id="bettFaceElement" src="./img/better/better-head.png" />'
    )
}

function renderFasterFace(){
    console.log('yey');
    deleteAll();
    console.log('no');
    $('#backgroundContainer').append(dressFastFaceElement());
}

function dressFastFaceElement(){
    console.log("created fa")
    return (
        '<img id="fasFaceElement" src="./img/faster/faster-head.png" />'
    )
}


function renderStrongerFace(){
    deleteAll();
    $('#backgroundContainer').append(dressStrongFaceElement());

}

function dressStrongFaceElement(){
    return (
        '<img id="strongFaceElement" src="./img/stronger/stronger-head.png" />'
    )
}


function deleteAll(){
    $('#bettFaceElement').remove();
    $('#hardFaceElement').remove();
    $('#fasFaceElement').remove();
    $('#strongFaceElement').remove();
}
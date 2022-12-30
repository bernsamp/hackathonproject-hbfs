
export function userOptions(){
    console.log('im here');
$('#harderHairElement').click(renderHarderHair);
$('#betterHairElement').click(renderBetterHair);
$('#fasterHairElement').click(renderFasterHair);
$('#strongerHairElement').click(renderStrongerHair);
}


export function renderHarderHair(){
    console.log('vasco');
    deleteAll();
    console.log("banana")
    $('#backgroundContainer').append(dressHarderHairElement());
    console.log('faz');
   
}

export function dressHarderHairElement(){
    console.log("created hard")
    return (
        '<img id="hardHairElement" src="./img/harder/harder-hair.png" />'
    )
}

export function renderBetterHair(){
    console.log('did it');
    deleteAll();
    console.log('better');
    const bettHair = dressBetterHairElement();
    $('#backgroundContainer').append(bettHair);
}

export function dressBetterHairElement(){
    console.log("created bet")
    return (
        '<img id="bettHairElement" src="./img/better/better-hair.png" />'
    )
}

export function renderFasterHair(){
    console.log('yey');
    deleteAll();
    console.log('no');
    $('#backgroundContainer').append(dressFastHairElement());
}

export function dressFastHairElement(){
    console.log("created fa")
    return (
        '<img id="fasHairElement" src="./img/faster/faster-hair.png" />'
    )
}


export function renderStrongerHair(){
    console.log('mo');
    deleteAll();
    console.log('when');
    $('#backgroundContainer').append(dressStrongHairElement());

}

export function dressStrongHairElement(){
    console.log('miau');
    return (
        '<img id="strongHairElement" src="./img/stronger/stronger-hair.png" />'
    )
}

function deleteAll(){
    $('#bettHairElement').remove();
    $('#hardHairElement').remove();
    $('#fasHairElement').remove();
    $('#strongHairElement').remove();
}
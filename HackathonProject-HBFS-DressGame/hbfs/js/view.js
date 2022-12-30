import * as hairDress from './dress/dressHair.js'
import * as faceDress from './dress/dressFace.js'
import * as accDress  from './dress/dressAcc.js'
import * as shirtDress from './dress/dressShirt.js'
import * as legDress from './dress/dressLeg.js'

export function createSections() {

    console.log("sections")
    $('#hair-btn').click(renderHair);
    console.log($("#hair-btn"))
    $('#face-btn').click(renderFace);
    $('#accessories-btn').click(renderAccessories);
    $('#body-btn').click(renderBody);
    $('#legs-btn').click(renderLegs);

    

}

export function createHairElements() {
    console.log("created hair elements")
    return (
        '<div class="#retest">' +
        '<ul class="hairtest">' + 
        '<li>'+ '<img id="harderHairElement" class="btn btn-black" src="./img/buttons/harder-hair.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="betterHairElement" class="btn btn-black" src="./img/buttons/better-hair.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="fasterHairElement" class="btn btn-black" src="./img/buttons/faster-hair.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="strongerHairElement" class="btn btn-black" src="./img/buttons/stronger-hair.png" alt="" >' +'</li>' +
        '</ul>' +
        '</div>'
    )
}

export function createFaceElements() {

    return (

        '<div class="#retest">' +
        '<ul class="facetest">' +  
        '<li>'+ '<img id="harderFaceElement" class="btn btn-black" src="img/buttons/harder-head.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="betterFaceElement" class="btn btn-black" src="img/buttons/better-head.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="fasterFaceElement" class="btn btn-black" src="img/buttons/faster-head.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="strongerFaceElement" class="btn btn-black" src="img/buttons/stronger-head.png" alt="" >' +'</li>' +
        '</ul>' +
        '</div>'
    )
}

export function createBodyElements() {

    return (

        '<div>' +
        '<ul class="bodytest">' + 
        '<li>'+ '<img id="harderShirtElement" class="btn btn-black" src="img/buttons/harder-shirt.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="betterShirtElement" class="btn btn-black" src="img/buttons/better-shirt.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="fasterShirtElement" class="btn btn-black" src="img/buttons/faster-shirt.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="strongerShirtElement" class="btn btn-black" src="img/buttons/stronger-body.png" alt="" >' +'</li>' +
        '</ul>' +
        '</div>'
    )
}

export function createAccessoriesElements() {

    return (

        '<div>' +
        '<ul class="acctest">' + 
        '<li>'+ '<img id="harderAccElement" class="btn btn-black" src="img/buttons/harder-accessories.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="betterAccElement" class="btn btn-black" src="img/buttons/better-accessories.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="fasterAccElement" class="btn btn-black" src="img/buttons/faster-accessories.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="strongerAccElement" class="btn btn-black" src="img/buttons/stronger-accessories.png" alt="" >' +'</li>' +
        '</ul>' +
        '</div>'
    )
}

export function createLegsElements() {

    return (
        '<div>' +
        '<ul class="pantstest">' + 
        '<li>'+ '<img id="harderPantsElement" class="btn btn-black" src="img/buttons/harder-pants.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="betterPantsElement" class="btn btn-black" src="img/buttons/better-pants.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="fasterPantsElement" class="btn btn-black" src="img/buttons/faster-pants.png" alt="" >' +'</li>' +
        '<li>'+ '<img id="strongerPantsElement" class="btn btn-black" src="img/buttons/stronger-pants.png" alt="" >' +'</li>' +
        '</ul>' +
        '</div>'
    )
}

export function renderHair() {
    
    deleteAll();
    console.log("emptied")
    const hairString = createHairElements();
    $('#right-column').append(hairString);
    
    //hairDress.userOptions();
    clotherChoices();
    }


    //addEventListener("click", renderHair);


export function renderFace() {
    deleteAll();

    console.log("emptiedF")
    $('#right-column').append($(createFaceElements()));
    //faceDress.userOptions();
    clotherChoices();

}

export function renderBody() {
    deleteAll();
    console.log("emptiedB")
    $('#right-column').append($(createBodyElements()));
    //shirtDress.userOptions();
    clotherChoices();
}   

export function renderAccessories() {
    deleteAll();
    $('#right-column').append($(createAccessoriesElements()));
    //accDress.userOptions();
    clotherChoices();
}

export function renderLegs() {

    deleteAll();
    $('#right-column').append($(createLegsElements()));
    //legDress.userOptions();
    clotherChoices();

}

function deleteAll(){
    $('.hairtest').empty();
    $('.facetest').empty();
    $('.bodytest').empty(); 
    $('.acctest').empty();
    $('.pantstest').empty(); 


}

function clotherChoices(){
    legDress.userOptions();
    accDress.userOptions();
    shirtDress.userOptions();
    faceDress.userOptions();
    hairDress.userOptions();

}








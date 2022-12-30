import * as view from './view.js';
import * as sounds from './sounds.js';
import * as description from './description.js';
import * as templates from './templates.js'


$(document).ready(event => {

    


    $('#myBtn').click(deleteBody);
   // $("hair-btn").click(view.renderHair());
   // $("face-btn").click(view.renderFace());


});


function deleteBody() {
    console.log('oi');
    $('.corpo').replaceWith(getGame);
}




export function getGame() {

    
console.log("game")
    document.body.innerHTML =
        '<nav class="navbar navbar-light bg-black">' +
        '<div class="container">' +
        '</div>'+
        '</nav>'+
        '<nav id="navbar" class="fixed-top"><ul id="list1">'+
        '<li>' +
        '<div class="container-fluid">'+
        '<img class="center-block" src="https://cdn.dribbble.com/users/1032972/screenshots/3685888/hbfs_d.jpg"height="170" alt="Responsive image" loading="lazy" />' +
        '</div>'+
        '</li>'+
        '<li><button id="harder-btn" class="btn btn-outline-light">HARDER</button></li>' +
        '<li><button id="better-btn" class="btn btn-outline-light">BETTER</button></li>' +
        '<li><button id="faster-btn" class="btn btn-outline-light">FASTER</button></li>' +
        '<li><button id="stronger-btn" class="btn btn-outline-light">STRONGER</button></li>'+
        '</ul>'+
        '</nav>' +
        '<nav id="main-content" class="row container-fluid">' +
        '<div class="col-sm-4 col-md-4 col-xs-12 column" id="colcol">' +
        '<p class="text-center fs-5 text-white"></p>' +
        '</div>'+
        '<div class="col-sm-4 col-md-4 col-xs-12 column">' +
        '<div id="backgroundContainer">'+
        '<img class="backgroundImage mx-auto d-block" src="img/Artboard1.jpg" height="15%" width="80%" alt="Responsive image"loading="lazy" />' +
        '</div>'+
        '</div>'+
        '<div class="col-sm-4 col-md-4 col-xs-12 column container-fluid" id="right-column" >' +
        '<button class="btn btn-outline-light" id="hair-btn">HAIR</button>' +
        '<button class="btn btn-outline-light" id="face-btn">FACE</button>' +
        '<button class="btn btn-outline-light" id="accessories-btn">ACCESSORIES</button>' +
        '<button class="btn btn-outline-light" id="body-btn">BODY</button>' +
        '<button class="btn btn-outline-light" id="legs-btn">LEGS</button>' +
        '</div>'+
        '<div class="test">' + '</div>' +
        '</nav>';

        
        sounds.playSounds();
        view.createSections();
        description.renderAllDescriptions();
        templates.createAllTemplates();
}




function createHarderTemplate(){
    return '<img src="./img/templates/harder-character-bg.png" alt="" >'
}

 function renderHarderTemplate(){
    $('.backgroundContainer').empty();
    $('.backgroundImage').replaceWith(createHarderTemplate);
}

function harderTemplateOnClick() {
    $('#harder-btn').click(renderHarderTemplate);    
}

function createBetterTemplate(){
    return '<img src="./img/templates/better-character-bg.png" alt="" >'
}

 function renderBetterTemplate(){
    $('.backgroundContainer').empty();
    $('.backgroundImage').replaceWith(createBetterTemplate);
}

function betterTemplateOnClick() {
    $('#better-btn').click(renderBetterTemplate);    
}

function createFasterTemplate(){
    return '<img src="./img/templates/faster-character-bg.png" alt="" >'
}

 function renderFasterTemplate(){
    $('.backgroundContainer').empty();
    $('.backgroundImage').replaceWith(createFasterTemplate);
}

function fasterTemplateOnClick() {
    $('#faster-btn').click(renderFasterTemplate);    
}

function createStrongerTemplate(){
    return '<img src="./img/templates/stronger-character-bg.png" alt="" >'
}

 function renderStrongerTemplate(){
    $('.backgroundContainer').empty();
    $('.backgroundImage').replaceWith(createStrongerTemplate);
}

function strongerTemplateOnClick() {
    $('#stronger-btn').click(renderStrongerTemplate);    
}

export function createAllTemplates(){
    harderTemplateOnClick();
    betterTemplateOnClick();
    fasterTemplateOnClick();
    strongerTemplateOnClick();
}
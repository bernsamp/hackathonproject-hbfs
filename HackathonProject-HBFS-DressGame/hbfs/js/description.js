

function createHarderDescription() { 
    return '<div>' + '<h4 style="color:#ffffff; text-align:center">Harder</h4>' + '<p style="color:#ffffff;">' + 'Resilient by nature, one can become harder not only by taking Viagra but also by being a determined person with a hard passion for achieving its goals.' +
    '<br> <br>Assertiveness and risk-taking makes this one of the most peculiar personalities and commonly people in this category tend to have a small but solid group of friends.' + 
    '<br><br>Punks, anarchists, war veterans, anti social, you name them.' + 
    '<br><br>You hate it when people make instant judgements about things they do not know anything about.' +
    '<br><br>You can become one of them only for 999$' + '</p>'
    + '</div>'    
}

function renderHarder() {  
    $('#colcol').empty(); 
    $('#colcol').append($(createHarderDescription()));
}

function harderOnClick() {
    $('#harder-btn').click(renderHarder);    
}


function createBetterDescription() {
    return '<div>' + '<h4 style="color:#ffffff; text-align:center">Better</h4>' + '<p style="color:#ffffff;">' + 'Good listeners, better spokesmen, this type of personality consumes books and lectures as their normal diet.' +
    '<br> <br>Commonly found in libraries and universities, you won’t find one without their favorite book and their opinion about it.' + 
    '<br><br>In a society where access to information is becoming easier and more reachable every day, you will be glad to have a big brian so you can consume all it has to offer.' + 
    '<br><br>Always curious in developing new interests and meeting new people, this package comes expensive but with a big reward.' +
    '<br><br>Buy it for 7000$ and don’t worry if you can’t pay it all in one time. Special conditions for this package.' + '</p>'
    + '</div>'     
}

function renderBetter() { 
    $('#colcol').empty();
    $('#colcol').append($(createBetterDescription()));
}

function betterOnClick() {
    $('#better-btn').click(renderBetter);  
}

function createFasterDescription() {
    return '<div>' + '<h4 style="color:#ffffff; text-align:center">Faster</h4>' + '<p style="color:#ffffff;">' + 'Outgoing, energetic and fast-paced individual who likes to be around people and enjoys being on the verge of every trend.' +
    '<br> <br>Quick learner, fast on their feet, with a passion for dancing and magic tricks, be careful not to stay behind on their swiftness.' + 
    '<br><br>Sometimes too fast and energetic on matters that should take some time, though it can compensate in other ways too.' + 
    '<br><br>Good relationship-builders and most people like them right away.' +
    '<br><br>Buy it for 2000$ and get a free pair of rollerblades!' + '</p>'
    + '</div>'     
}

function renderFaster() { 
    $('#colcol').empty();
    $('#colcol').append($(createFasterDescription()));
}

function fasterOnClick() {
    $('#faster-btn').click(renderFaster);  
}

function createStrongerDescription() {
    return '<div>' + '<h4 style="color:#ffffff; text-align:center" >Stronger</h4>' + '<p style="color:#ffffff;">' + 'Be more pro-active and focused with this type. You will probably spend your life in a gym training your resistance and outputting your energy.' +
    '<br> <br>Confident and optimistic, your consistency will develop easily and your flexibility will improve like you have never felt before.' + 
    '<br><br>You will show compassion, honesty and fairness, display self-discipline in setting and meeting goals and make good judgments.' + 
    '<br><br> You will show respect to others, show courage in standing up for beliefs, have a strong sense of responsibility, you will become a good citizen who is concerned for their community.' +
    '<br><br>Available for 4000$ and get a free protein shake.' + '</p>'
    + '</div>'     
}

function renderStronger() { 
    $('#colcol').empty();
    $('#colcol').append($(createStrongerDescription()));
}

function strongerOnClick() {
    $('#stronger-btn').click(renderStronger);  
}

export function renderAllDescriptions(){
    harderOnClick();
    betterOnClick();
    fasterOnClick();
    strongerOnClick();

}
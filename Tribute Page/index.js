// Function for Button "Click here"
var btn = document.querySelector('#BTN');
btn.addEventListener('click',function() 
{
    document.querySelector('.close-btn').style.visibility = 'visible';
    document.querySelector('#tribute-info').style.display = 'flex';
    document.querySelector('#title').style.visibility = 'hidden';
    document.querySelector('.container').style.visibility = 'hidden';
    document.querySelector('#tribute-link').style.visibility = 'hidden';
    document.querySelector('.info').style.visibility = 'hidden';
    document.querySelector('.div-btn').style.visibility = 'hidden';
    document.querySelector('#main').style.background= 'rgba(255,255,255,1.0)';
});

// Function for Close-Button "X"
var close = document.querySelector('.close-btn');
close.addEventListener('click',function() 
{
    document.querySelector('.close-btn').style.visibility = 'hidden';
    document.querySelector('#tribute-info').style.display = 'none';
    document.querySelector('#title').style.visibility = 'visible';
    document.querySelector('.container').style.visibility = 'visible';
    document.querySelector('#tribute-link').style.visibility = 'visible';
    document.querySelector('.info').style.visibility = 'visible';
    document.querySelector('.div-btn').style.visibility = 'visible';
    document.querySelector('#main').style.background= 'rgba(0,0,150,0.2)';
});

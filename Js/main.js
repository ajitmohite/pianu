// Elements in HTML Page
var dropDown       =      document.querySelector('.drop-file');
var SliderForSpeed =         document.querySelector('.slider');
var Progress       =    document.querySelector('.progressbar');
var Reset          =          document.querySelector('.reset');
var leftAudiable   =   document.querySelector('.leftAudiable');
var rightAudiable  =  document.querySelector('.rightAudiable');
var leftVisible    =    document.querySelector('.leftVisible');
var rightVisible   =   document.querySelector('.rightVisible');
var Lycint         =         document.querySelector('.lycint');
var currentLine    =    document.querySelector('.currentLine');
var pianoImage     =     document.querySelector('.pianoImage');
var SwitchBox      =      document.querySelector('.switchBox');

// Function for switch button
// And jQuery code
$(function() {
    $('#lAu').click(function() {$('#lAu').toggleClass('switched');});
    $('#rAu').click(function() {$('#rAu').toggleClass('switched');});
    $('#lVi').click(function() {$('#lVi').toggleClass('switched');});
    $('#rVi').click(function() {$('#rVi').toggleClass('switched');});

    $('.box-stick').click(function() {
        $('.box-stick').toggleClass('opened');
        $('.menuBox').toggleClass('menuOp');
    });
});
//--------------------------History States--------------------------

location.hash = 'home';

$('.back').click(function(){
	
	window.history.back();

});

//--------------------------Main Page Animation--------------------------

function Logo () {
	
	$(".cls-1").css('fill', '#97c63d');
	$(".cls-2").css('fill', '#33abc6');
	$(".cls-3").css('fill', '#f4e430');
	$(".cls-4").css('fill', '#c7343f');
	
	$(".cls-1").stop().animate({

		width: '106.35px'

	}, 300, "swing");
	$(".cls-2").stop().animate({

		height: '106.35px'

	}, 300, "swing");
	$(".cls-3").stop().animate({

		height: '106.35px'

	}, 300, "swing");
	$(".cls-4").stop().animate({

		width: '106.35px'

	}, 300, "swing");
}

//$('#menu').addClass('animated bounceInRight');
$('#title').addClass('animated bounceInLeft');

$('#intro-text').addClass('animated fadeIn');

$('#divider').addClass('animated rubberBand');

$('.tile').addClass('animated bounceInUp');



setTimeout(function() {

	$('#menu').removeClass('animated bounceInRight');
	$('#title').removeClass('animated bounceInLeft');
	
	$('#intro-text').removeClass('animated fadeIn');

	$('#divider').removeClass('animated rubberBand');
	
	$('.tile').removeClass('animated bounceInUp');
	
	$("#title").stop().animate({

		width: "60%",
		height: "80px"

	}, 300, "swing", function() {
				
		typeWriter(' _hello', 0);
			
	});

}, 1000);

//--------------------------Title Animation--------------------------

function typeWriter(text, i) {

	if (i < (text.length)) {

		document.querySelector("h1").innerHTML = text.substring(0, i+1);

		setTimeout(function() {

			typeWriter(text, i + 1)

		}, 20);
	}
}

//--------------------------Tile Animation--------------------------

var tileEnable = true;

function TileAnimateOut(event) {
	
	if (tileEnable == true) {
	
		var target = $(event.target);
		var elId = target.attr('id');
		var color;

		if( target.is(".tile") ) {

			$("#" + elId + "-back").stop().animate({

				width: '100%',
				height: '100%'

			}, 200, "swing");

			if(target.is("#tile-1")) {
				color = "#97c734";
				$('#profile-icon').css('color', color);
				typeWriter('about_me', 0);
			}

			else if(target.is("#tile-2")) {
				color = "#34abc7";
				$('#contact-icon').css('color', color);
				typeWriter('contact_me', 0);
			}

			else if(target.is("#tile-3")) {
				color = "#c7343f";
				$('#projects-icon').css('color', color);
				typeWriter('my_projects', 0);
			}

			else if(target.is("#tile-4")) {
				color = "#f4e532";
				$('#skills-icon').css('color', color);
				typeWriter('my_skills', 0);
			}

			$("#title").stop().animate({

				borderLeftColor: color

			}, 300, "swing");


		}
	}
}

function TileAnimateIn(event) {
	
	if (tileEnable == true) {
	
		var target = $(event.target);
		var elId = target.attr('id');

		if( target.is(".tile") ) {

			$("#" + elId + "-back").stop().animate({

				width: '0',
				height: '0'

			}, 150, "swing");

		}

		$("#title").stop().animate({

			borderLeftColor: "#c76734"

		}, 300, "swing");

		$('#profile-icon').css('color', '#191919');
		$('#contact-icon').css('color', '#191919');
		$('#projects-icon').css('color', '#191919');
		$('#skills-icon').css('color', '#191919');

		typeWriter(' _hello', 0);

	}
}

function TileAnimIn() {
		
		$(".tile-back").stop().animate({

			width: '0',
			height: '0'

		}, 150, "swing");

		$('#profile-icon').css('color', '#191919');
		$('#contact-icon').css('color', '#191919');
		$('#projects-icon').css('color', '#191919');
		$('#skills-icon').css('color', '#191919');
}

setTimeout(function(){
	
	$(".tile").mouseover(TileAnimateOut);
	$(".tile").mouseout(TileAnimateIn);
	
}, 1500);


$("#high-1").click(function(){
	location.hash = 'about';
});

$("#high-2").click(function(){
	location.hash = 'skills';
});

$("#high-3").click(function(){
	location.hash = 'projects';
});

//--------------------------Home OnClick--------------------------

$(".home-icon").click(function(){
	location.hash = 'home';
});

function HomeScreen () {
	
	$(".cls-1").css('fill', '#191919');
	$(".cls-2").css('fill', '#191919');
	$(".cls-3").css('fill', '#191919');
	$(".cls-4").css('fill', '#191919');
//	$("body").css('overflow-y', 'hidden');
	$(".cls-1").stop().animate({

		width: '0px'

	}, 1000, "swing");
	
	$(".cls-2").stop().animate({

		height: '0'

	}, 300, "swing");
	$(".cls-3").stop().animate({

		height: '0'

	}, 300, "swing");
	$(".cls-4").stop().animate({

		width: '0'

	}, 300, "swing");
	
	TileAnimIn();
	
	tileEnable = true;
	
	$('#menu').css('display', 'none');
	$('.contact-home').css('display', 'none');
	$('.skills-home').css('display', 'none');
	$('.projects-home').css('display', 'none');
	$('.about-home').css('display', 'none');
	$('.main-home').css('display', 'block');
	
	$(".title-text").stop().animate({

		fontSize: "3.8em"

	}, 300, "swing");
	
	$("#title").stop().animate({

		width: "60%",
		height: "80px",
		marginTop: "10px"

	}, 300, "swing", function(){
		
		typeWriter(' _hello', 0);
		
	});
	
	$("#title-icon").stop().animate({

		right: "100%",
		opacity: "0",
		fontSize: "0"

	}, 300, "swing", function(){
		
		ClearAnims();
		
	});
	
	$('body').stop().animate({
		backgroundColor: "#c7c7c7"
	}, 600, "swing");
	
	$('#intro-text').removeClass('animated fadeOut');

	$('#divider').removeClass('animated fadeOutDown');

	$('.tile').removeClass('animated bounceOutDown');
	
//	$('#menu').removeClass('animated bounceInRight');	
	
	$('#intro-text').addClass('animated fadeIn');

	$('#divider').addClass('animated rubberBand');
	
	$('.tile').addClass('animated bounceInUp');

	setTimeout(function() {
	
		$('.tile').removeClass('animated bounceOutDown');
	

	}, 750);
	
	$(".skill-point").remove();
	
}

//--------------------------About Me OnClick--------------------------

$("#tile-1").click(function(){
	
	location.hash = 'about';

});

$(".pre-about").click(function(){
	
	location.hash = 'about';
	$(".skill-point").remove();
	$('.contact-home').addClass('animated fadeOut');

});

function AboutScreen () {
	Logo();
	tileEnable = false;
	
//	$('#menu').css('display', 'block');
	
	
	$(".title-text").stop().animate({

		fontSize: "1.8em"

	}, 300, "swing");
	
	$("#title").stop().animate({

		width: "100%",
		height: "40px",
		marginTop: "0",
		borderLeftColor: "#97c734"

	}, 300, "swing", function(){
		typeWriter('about_me', 0);
	});
	
	$('body').stop().animate({
		backgroundColor: "#464245"
	}, 600, "swing");
	
	$("#title-icon").stop().animate({

		right: "2%",
		opacity: "1",
		fontSize: "1.5em"

	}, 300, "swing");
	
//	$('#menu').addClass('animated bounceInRight');

	$('#intro-text').addClass('animated fadeOut');

	$('#divider').addClass('animated fadeOutDown');

	$('.tile').addClass('animated bounceOutDown');
	
	$('#title-icon').addClass('fa fa-user');
	
	setTimeout(function() {
	
		$('.about-home').css('display', 'block');
		$('.main-home').css('display', 'none');
		
		$('.contact-home').removeClass('animated fadeOut');
		
		$('.contact-home').css('display', 'none');
		$('.skills-home').css('display', 'none');
		$('.projects-home').css('display', 'none');
		
		LangSkill();
		
	}, 750);
	
}


var langs = 0;
var langs1 = 5;
var langs2 = 0;

langs = eval("langs" + 1);

function LangSkill() {
	
	
	for(var k = 0; k < 2; k++) {
		
		for(var l = 0; l < (langs); l++){
				
			$("#speak-" + (k + 1)).append("<i class='fa fa-circle animated bounceIn skill-point full'></i>");
		}  
		for(var l = 0; l < (5 - langs); l++){
			$("#speak-" + (k + 1)).append("<i class='fa fa-circle animated bounceIn skill-point empty'></i>");
		}
		langs = eval("langs" + (k + 1));
	}
	
}


//--------------------------Contact Me OnClick--------------------------

$("#tile-2").click(function(){
	
	location.hash = 'contact';

});

$(".pre-contact").click(function(){
	
	location.hash = 'contact';
	$('.projects-home').addClass('animated fadeOut');

});

$(".next-contact").click(function(){
	
	location.hash = 'contact';
	$('.about-home').addClass('animated fadeOut');

});

function ContactScreen () {
	Logo();
	tileEnable = false;
	
	$(".title-text").stop().animate({

		fontSize: "1.8em"

	}, 300, "swing");
	
	$("#title").stop().animate({

		width: "100%",
		height: "40px",
		marginTop: "0",
		borderLeftColor: "#34abc7"

	}, 300, "swing", function(){

		typeWriter('contact_me', 0);
	
	});
	
	$('body').stop().animate({
		backgroundColor: "#464245"
	}, 600, "swing");
	
	$("#title-icon").stop().animate({

		right: "2%",
		opacity: "1",
		fontSize: "1.5em"

	}, 300, "swing");
	
//	$('#menu').addClass('animated bounceInRight');

	$('#intro-text').addClass('animated fadeOut');

	$('#divider').addClass('animated fadeOutDown');

	$('.tile').addClass('animated bounceOutDown');
	
	$('#title-icon').addClass('fa fa-phone');
	
	setTimeout(function() {
	
		$('.contact-home').css('display', 'block');
		$('.main-home').css('display', 'none');
		
		$('.about-home').removeClass('animated fadeOut');
		$('.projects-home').removeClass('animated fadeOut');
		
		$('.about-home').css('display', 'none');
		$('.skills-home').css('display', 'none');
		$('.projects-home').css('display', 'none');
	
	}, 750);
	
}

//--------------------------MyProjects OnClick--------------------------

$(".logo").click(function(){
	
	location.hash = 'home';

});

$("#tile-3").click(function(){
	
	location.hash = 'projects';

});

$(".pre-projects").click(function(){
	
	location.hash = 'projects';
	$('.skills-home').addClass('animated fadeOut');

});

$(".next-projects").click(function(){
	
	location.hash = 'projects';
	$('.contact-home').addClass('animated fadeOut');

});

function ProjectsScreen () {
	Logo();
//	$("body").css('overflow-y', 'hidden');
	
	$('#f-projects').css('display', 'block');
	
	$('.case-study').css('display', 'none');
	$('.case-study').removeClass('animated fadeIn');
	
	$('.project-number').removeClass('animated zoomOut');
	$('.project-number').addClass('animated zoomIn');
	
	$(".project-number").css('height', '230px');
	
	$('.project-number').css('display', 'block');

	$(".project-number").css('width', '47%');
	
	$(".project-number").css('margin-top', '0');
	
	$(".project-number").css('position', 'relative');

	tileEnable = false;	
	
	$(".title-text").stop().animate({

		fontSize: "1.8em"

	}, 300, "swing");
	
	$("#title").stop().animate({

		width: "100%",
		height: "40px",
		marginTop: "0",
		borderLeftColor: "#c7343f"		

	}, 300, "swing", function(){

		typeWriter('my_projects', 0);
		
	});
	
	$('body').stop().animate({
		backgroundColor: "#464245"
	}, 600, "swing");
	
	$("#title-icon").stop().animate({

		right: "2%",
		opacity: "1",
		fontSize: "1.5em"

	}, 300, "swing");
	
//	$('#menu').addClass('animated bounceInRight');

	$('#intro-text').addClass('animated fadeOut');

	$('#divider').addClass('animated fadeOutDown');

	$('.tile').addClass('animated bounceOutDown');
	
	$('#title-icon').addClass('fa fa-code');
	
	setTimeout(function() {
	
		$('.projects-home').css('display', 'block');
		$('.main-home').css('display', 'none');
		
		$('.contact-home').removeClass('animated fadeOut');
		$('.skills-home').removeClass('animated fadeOut');
		
		$('.about-home').css('display', 'none');
		$('.contact-home').css('display', 'none');
		$('.skills-home').css('display', 'none');
	
	}, 750);
	
}

//--------------------------Skills OnClick--------------------------

$("#tile-4").click(function(){
	
	location.hash = 'skills';

});

$(".next-skills").click(function(){
	
	location.hash = 'skills';
	$(".skill-point").remove();
	$('.projects-home').addClass('animated fadeOut');

});


function SkillsScreen () {
	Logo();
	tileEnable = false;
	
//	$('#menu').css('display', 'block');
	
	$(".title-text").stop().animate({

		fontSize: "1.8em"

	}, 300, "swing");
	
	$("#title").stop().animate({

		width: "100%",
		height: "40px",
		marginTop: "0",
		borderLeftColor: "#f4e532"

	}, 300, "swing", function(){

		typeWriter('my_skills', 0);
		
	});
	
	$('body').stop().animate({
		backgroundColor: "#464245"
	}, 600, "swing");
	
	$("#title-icon").stop().animate({

		right: "2%",
		opacity: "1",
		fontSize: "1.5em"

	}, 300, "swing");
	
//	$('#menu').addClass('animated bounceInRight');

	$('#intro-text').addClass('animated fadeOut');

	$('#divider').addClass('animated fadeOutDown');

	$('.tile').addClass('animated bounceOutDown');
	
	$('#title-icon').addClass('fa fa-cog');
	
	setTimeout(function() {
	
		$('.skills-home').css('display', 'block');
		$('.main-home').css('display', 'none');
		
		$('.projects-home').removeClass('animated fadeOut');
		
		$('.contact-home').css('display', 'none');
		$('.projects-home').css('display', 'none');
		$('.about-home').css('display', 'none');
		
		FillSkills();
	
	}, 750);
	
}

var skill = 0;
var skill1 = 4;
var skill2 = 3;
var skill3 = 4;
var skill4 = 4;
var skill5 = 3;
var skill6 = 3;
var skill7 = 4;
var skill8 = 4;
var skill9 = 3;
var skill10 = 3;
var skill11 = 3;
var skill12  = 4;
var skill13 = 4;
var skill14 = 4;
var skill15 = 4;
var skill16 = 4;
var skill17 = 4;
var skill18 = 4;
var skill19 = 5;
var skill20 = 4;
var skill21 = 5;

skill = eval("skill" + 1);

function FillSkills() {
	
	
	for(var i = 0; i < 21; i++) {
		
		for(var j = 0; j < (skill); j++){
				$("#lang-" + (i + 1)).append("<i class='fa fa-circle skill-point full'></i>");
		}  
		for(var j = 0; j < (5 - skill); j++){
				$("#lang-" + (i + 1)).append("<i class='fa fa-circle skill-point empty'></i>");
		}
		skill = eval("skill" + (i + 1));
	}
	
	setTimeout( function () {
	
	$('.game').css('display', 'none');
	$('.video').css('display', 'none');
	
	},50);
	
}

//--------------------------Clear Animations--------------------------

function ClearAnims() {
	$('#title-icon').removeClass('fa fa-user');
	$('#title-icon').removeClass('fa fa-phone');
	$('#title-icon').removeClass('fa fa-code');
	$('#title-icon').removeClass('fa fa-cog');
}

//--------------------------Back Button--------------------------


window.onhashchange = function() { 
	
	if (location.hash == "#home") {
		HomeScreen ();
	}
	
	if (location.hash == "#about") {
		AboutScreen ();
	}
	
	if (location.hash == "#contact") {
		ContactScreen ();
	}
	
	if (location.hash == "#projects") {
		ProjectsScreen ();
	}
	
	if (location.hash == "#skills") {
		SkillsScreen ();
	}
	
	if (location.hash == "#projects/tbd") {
		CaseStudy1 ();
	}
	
	if (location.hash == "#projects/abstract") {
		CaseStudy2 ();
	}
	
	if (location.hash == "#projects/portfolio") {
		CaseStudy3 ();
	}
	
	if (location.hash == "#projects/showreel") {
		CaseStudy4 ();
	}
}

//--------------------------Projects Anim--------------------------

function TileAnimateDown(event) {
	
	var target = $(event.target);
	var elId = target.attr('id');

	if( target.is(".proj-number") ) {

		$("#" + elId + "-back").stop().animate({

			top: '0'

		}, 150, "swing");

	}
}

function TileAnimUp(event) {
	
	var target = $(event.target);
	var elId = target.attr('id');

	if( target.is(".proj-number") ) {

		$("#" + elId + "-back").stop().animate({

			top: '-100%'

		}, 150, "swing");

	}
}

	
$(".project-number").mouseover(TileAnimateDown);
$(".project-number").mouseout(TileAnimUp);


//--------------------------Projects Animations--------------------------

$('#project-number-1').click(function(){
	
	location.hash = 'projects/tbd';

});
	
function CaseStudy1 () {	

	$("body").css('overflow-y', 'auto');
	
	$('.project-number').removeClass('animated zoomIn');
	
	$('#project-number-2').addClass('animated zoomOut');
	$('#project-number-3').addClass('animated zoomOut');
	$('#project-number-4').addClass('animated zoomOut');
	
	$('#f-projects').css('display', 'none');
	
	$("#project-number-2").stop().animate({

		height: '0'

	}, 300, "swing");
	
	$("#project-number-3").stop().animate({

		height: '0'

	}, 300, "swing");
	
	$("#project-number-4").stop().animate({

		height: '0'

	}, 300, "swing");
	
	
	$("#project-number-1").css('top', '0');
	$("#project-number-1").css('left', '0');
	$("#project-number-1").css('position', 'absolute');
	
	$("#project-number-1").stop().animate({

		width: '98%',
		height: '1px',
		marginTop: '-10px'

	}, 450, "swing", function(){

		typeWriter('case_study: The Big Deal', 0);
		$('.case-1').css('display', 'block');
		$('.case-1').addClass('animated fadeIn');
		
		$('#project-number-2').css('display', 'none');
		$('#project-number-3').css('display', 'none');
		$('#project-number-4').css('display', 'none');
		
	});
	
}

$('#project-number-2').click(function(){
	
	location.hash = 'projects/abstract';

});

function CaseStudy2 () {
	
	$("body").css('overflow-y', 'auto');
	
	$('.project-number').removeClass('animated zoomIn');
	
	$('#project-number-1').addClass('animated zoomOut');
	$('#project-number-3').addClass('animated zoomOut');
	$('#project-number-4').addClass('animated zoomOut');
	
	$('#f-projects').css('display', 'none');
	
	$("#project-number-1").stop().animate({

		height: '0'

	}, 300, "swing");
	
	$("#project-number-3").stop().animate({

		height: '0'

	}, 300, "swing");
	
	$("#project-number-4").stop().animate({

		height: '0'

	}, 300, "swing");
	
	
	$("#project-number-2").css('top', '0');
	$("#project-number-2").css('left', '0');
	$("#project-number-2").css('position', 'absolute');
	
	$("#project-number-2").stop().animate({

		width: '98%',
		height: '1px',
		marginTop: '-10px'

	}, 450, "swing", function(){

		typeWriter('case_study: Abstract Hunt', 0);
		$('.case-2').css('display', 'block');
		$('.case-2').addClass('animated fadeIn');
		
		$('#project-number-1').css('display', 'none');
		$('#project-number-3').css('display', 'none');
		$('#project-number-4').css('display', 'none');
		
	});
	
}

$('#project-number-3').click(function(){
	
	location.hash = 'projects/portfolio';
	
});

function CaseStudy3 () {
	
	$("body").css('overflow-y', 'auto');
	
	$('.project-number').removeClass('animated zoomIn');
	
	$('#project-number-2').addClass('animated zoomOut');
	$('#project-number-1').addClass('animated zoomOut');
	$('#project-number-4').addClass('animated zoomOut');
	
	$('#f-projects').css('display', 'none');
	
	$("#project-number-2").stop().animate({

		height: '0'

	}, 300, "swing");
	
	$("#project-number-1").stop().animate({

		height: '0'

	}, 300, "swing");
	
	$("#project-number-4").stop().animate({

		height: '0'

	}, 300, "swing");
	
	
	$("#project-number-3").css('top', '0');
	$("#project-number-3").css('left', '0');
	$("#project-number-3").css('position', 'absolute');
	
	$("#project-number-3").stop().animate({

		width: '98%',
		height: '1px',
		marginTop: '-10px'

	}, 450, "swing", function(){

		typeWriter('case_study: Portfolio', 0);
		$('.case-3').css('display', 'block');
		$('.case-3').addClass('animated fadeIn');
		
		$('#project-number-2').css('display', 'none');
		$('#project-number-1').css('display', 'none');
		$('#project-number-4').css('display', 'none');
		
	});
	
}

$('#project-number-4').click(function(){
	
	location.hash = 'projects/showreel';
	
});

function CaseStudy4 () {
	
	$("body").css('overflow-y', 'auto');
	
	$('.project-number').removeClass('animated zoomIn');
	
	$('#project-number-2').addClass('animated zoomOut');
	$('#project-number-3').addClass('animated zoomOut');
	$('#project-number-1').addClass('animated zoomOut');
	
	$('#f-projects').css('display', 'none');
	
	$("#project-number-2").stop().animate({

		height: '0'

	}, 300, "swing");
	
	$("#project-number-3").stop().animate({

		height: '0'

	}, 300, "swing");
	
	$("#project-number-1").stop().animate({

		height: '0'

	}, 300, "swing");
	
	
	$("#project-number-4").css('top', '0');
	$("#project-number-4").css('left', '0');
	$("#project-number-4").css('position', 'absolute');
	
	$("#project-number-4").stop().animate({

		width: '98%',
		height: '1px',
		marginTop: '-10px'

	}, 450, "swing", function(){

		typeWriter('case_study: Showreel', 0);
		$('.case-4').css('display', 'block');
		$('.case-4').addClass('animated fadeIn');
		
		$('#project-number-2').css('display', 'none');
		$('#project-number-3').css('display', 'none');
		$('#project-number-1').css('display', 'none');
		
	});
	
}

//--------------------------Carousel--------------------------

var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if(figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if(figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML; 
            }

            if(linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            } 

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if(childNodes[i].nodeType !== 1) { 
                continue; 
            }

            if(childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, clickedGallery );
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');  
            if(pair.length < 2) {
                continue;
            }           
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect(); 

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

// execute above function
initPhotoSwipeFromDOM('.my-gallery');




















//$(document).ready(function () {
//	TileAnimation ('.tile');
//})
//
//function TileAnimation (element) {
//	
//	
//	$(element).mouseover(function(){
//		
//		
//		$(this).children(element + "-back").stop().animate({
//
//			width: '100%',
//			height: '100%'
//		
//		}, 150, "swing");
//       
//    	if (this.is("#tile-1")) {
//			alert('hello');
//		}
//		
//	});
//	
//	$(element).mouseout(function(){
//		
//		
//		$(this).children(element + "-back").stop().animate({
//
//			width: '0',
//			height: '0'
//		
//		}, 200, "swing");
//       
//    
//		
//	});
//
//}

//--------------------------Back Button--------------------------

history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
}); 

window.userInteractionTimeout = null;
window.userInteractionInHTMLArea = false;
window.onBrowserHistoryButtonClicked = null; // This will be your event handler for browser navigation buttons clicked

$(document).ready(function () {
    $(document).mousedown(function () {
        clearTimeout(window.userInteractionTimeout);
        window.userInteractionInHTMLArea = true;
        window.userInteractionTimeout = setTimeout(function () {
            window.userInteractionInHTMLArea = false;
        }, 500);
    });

$(document).keydown(function () {
        clearTimeout(window.userInteractionTimeout);
        window.userInteractionInHTMLArea = true;
        window.userInteractionTimeout = setTimeout(function () {
            window.userInteractionInHTMLArea = false;
        }, 500);
    });

    if (window.history && window.history.pushState) {
        $(window).on('popstate', function () {
            if (!window.userInteractionInHTMLArea) {
                // alert('Browser Back or Forward button was pressed.');
				console.log('do me');
                 }
    if(window.onBrowserHistoryButtonClicked ){
    window.onBrowserHistoryButtonClicked ();
            }
        });
    }
});




//blockMenu.onclick = function() {
//	
//	if (menuToggle == false) {
//	
//		menuHover = false;
//
//		var pos = 0;
//		var overPos = -100;
//		var fon = 0;
//
//		var id = setInterval(Block, 5);
//		var fd = setInterval(Cross, 5);
//		MenuOverlay();
//
//		function Block() {
//
//			if (pos == 15) {
//				clearInterval(id);
//
//				block5.style.display = 'block';
//				block1.style.display = 'none';
//				block2.style.display = 'none';
//				block3.style.display = 'none';
//				block4.style.display = 'none';
//
//			} 
//
//			else {
//
//				pos++;
//
//				block1.style.top = pos + 'px';
//				block1.style.left = pos + 'px';
//
//				block2.style.top = pos + 'px';
//				block2.style.right = pos + 'px';
//
//				block3.style.bottom = pos + 'px';
//				block3.style.left = pos + 'px';
//
//				block4.style.bottom = pos + 'px';
//				block4.style.right = pos + 'px';
//			}
//		}
//
//		function Cross() {
//
//			if (fon >= 3) {
//				clearInterval(fd);			
//			} 
//
//			else {
//
//				fon = fon + 0.1;
//
//				block5.style.fontSize = fon + 'em';
//
//			}
//		}
//		
//		function MenuOverlay() {
//			
//			$('#menu-overlay').animate({
//				
//				top: '0'
//						
//			}, "500", "swing");
//			
//		}
//		
//		menuToggle = true;
//	}
//	
//	else {
//		
//		menuHover = true;
//
//		var pos = 15;
//		var fon = 3;
//		var overPos = 0;
//
//		var id = setInterval(Block, 5);
//		var fd = setInterval(Cross, 5);
//		MenuOverlay();
//
//		function Block() {
//
//			if (pos == 5) {
//				
//				clearInterval(id);
//				
//				setTimeout(function(){
//					block1.style.display = 'block';
//					block2.style.display = 'block';
//					block3.style.display = 'block';
//					block4.style.display = 'block';
//					block5.style.display = 'none';					 
//				}, 50);
//				
//
//			} 
//
//			else {
//
//				pos = pos - 0.5;
//				
//				block1.style.top = pos + 'px';
//				block1.style.left = pos + 'px';
//
//				block2.style.top = pos + 'px';
//				block2.style.right = pos + 'px';
//
//				block3.style.bottom = pos + 'px';
//				block3.style.left = pos + 'px';
//
//				block4.style.bottom = pos + 'px';
//				block4.style.right = pos + 'px';
//			}
//		}
//
//		function Cross() {
//
//			if (fon <= 0) {
//				clearInterval(fd);			
//			} 
//
//			else {
//
//				fon = fon - 0.05;
//
//				block5.style.fontSize = fon + 'em';
//
//			}
//		}
//		
//		function MenuOverlay() {
//			
//			$('#menu-overlay').animate({
//				
//				top: '-100%'
//				
//			}, "500", "swing");
//			
//		}
//		
//		menuToggle = false;
//	}
//	
//};











//		skillType++;
//		for (let i=0; i<10; i++) {
//			console.log('ran' + skillType);
//			setTimeout( function timer(){
//				$("#lang-" + skillType).append("<i class='fa fa-circle animated bounceIn skill-point'></i>")
//			}, i*100 );
//			if (i == 9 && skillType <2) {
//				console.log('i ran');
//				FillSkills();
//			}
//		}
//		
//		console.log(skillType);


<!--
						<div class="xp-block">
							<div class="year xp"><p>2016<i class="fa fa-dot-circle-o" aria-hidden="true"></i></p></div>
							<div class="description xp">
								<p>Game Developer/Editor</p>
								<p class="mini-title">Various</p>
								<p class="description-text">I have participated in various game jams and a 48 hour film festival. I worked as a 3D modeller and game scripter during the game jams and I worked on post-production and digital prop design for the film 
								festival.</p>
							
							</div>
						</div>
						
						<div class="xp-block">
							<div class="year xp"><p>2015<i class="fa fa-dot-circle-o" aria-hidden="true"></i></p></div>
							<div class="description xp">
								<p>Game Developer</p>
								<p class="mini-title">Game Nutter(6 months)</p>
								<p class="description-text">I worked with a team of interns on a small mobile game(Android and iOS). I worked as a Game Designer, this includes scripting, modelling, animating and Unity General management.</p>
							
							</div>
						</div>
-->
									
									<!--
						<div class="xp-block">
							<div class="year xp"><p>2016 - till now<i class="fa fa-dot-circle-o" aria-hidden="true"></i></p></div>
							<div class="description xp">
								<p>Virtual Reality & Technology Lead</p>
								<p class="mini-title">Electric South (Big World Cinema)</p>
								<p class="description-text">Currently researching, testing and coming up with workflows using Virtual Reality Technology. This 
								includes 360 degree camera technology as well as game engine based virtual reality.</p>
							
							</div>
						</div>
-->
									
									
															<div class="xp-block">
							<div class="year xp"><p>2014 - 2015<i class="fa fa-dot-circle-o" aria-hidden="true"></i></p></div>
							<div class="description xp">
								<p class="qualification">BSc Computer Science</p>
								<p class="place-title">University of Cape Town</p>
								<p class="location-text">Cape Town, South Africa</p>
							
							</div>
						</div>
						
						<div class="xp-block">
							<div class="year xp"><p>2011<i class="fa fa-dot-circle-o" aria-hidden="true"></i></p></div>
							<div class="description xp">
								<p class="qualification">Cambridge A - Level (High School)</p>
								<p class="place-title">Christian Brothers College</p>
								<p class="location-text">Bulawayo, Zimbabwe</p>
							
							</div>
						</div>
								
								
								
								
								
								
								
								
								
								
								
								
								
								//--------------------------Slide out menu--------------------------

var block1 = document.getElementById('block-1');
var block2 = document.getElementById('block-2');
var block3 = document.getElementById('block-3');
var block4 = document.getElementById('block-4');
var block5 = document.getElementById('block-5');

var blockMenu = document.getElementById('menu');

var menuHover = true;
var menuToggle = false;

function AnimateOut() {

	if (menuHover == true) {

		var pos = 5;
		var id = setInterval(Block, 5);

		function Block() {

			if (pos == 0) {
				clearInterval(id);
			} 

			else {

				pos--;

				block1.style.top = pos + 'px';
				block1.style.left = pos + 'px';

				block2.style.top = pos + 'px';
				block2.style.right = pos + 'px';

				block3.style.bottom = pos + 'px';
				block3.style.left = pos + 'px';

				block4.style.bottom = pos + 'px';
				block4.style.right = pos + 'px';
			}
		}

	}
}

function AnimateIn() {

	if (menuHover == true) {

		var pos = 0;
		var id = setInterval(Block, 5);

		function Block() {

			if (pos == 5) {
				clearInterval(id);
			} 

			else {

				pos++;

				block1.style.top = pos + 'px';
				block1.style.left = pos + 'px';

				block2.style.top = pos + 'px';
				block2.style.right = pos + 'px';

				block3.style.bottom = pos + 'px';
				block3.style.left = pos + 'px';

				block4.style.bottom = pos + 'px';
				block4.style.right = pos + 'px';
			}
		}

	}
}

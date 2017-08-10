$(document).ready(function(){
//карусель
	$('.carousel-one').owlCarousel({
		loop:true,
		margin: 50,
		animateOut: 'rotateOutDownLeft',
		animateIn: 'flipInX',
		items:1,
		stagePadding:30,
		smartSpeed:450,
		nav:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,		 
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
//карусель
	$('.carousel-two').owlCarousel({
		loop:true,
		margin: 30,
		items:3,
		stagePadding:30,
		smartSpeed:450,
		nav:true,
		dots:true,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:false,		 
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
//карусель
	$('.carousel-three').owlCarousel({
		loop:true,
		margin:30,
		animateOut: 'rotateOutDownLeft',
		animateIn: 'flipInX',
		items:1,
		stagePadding:30,
		smartSpeed:450,
		nav:true,
		autoplay:false,
		autoplayTimeout:5000,
		autoplayHoverPause:false,		 
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});

//Обработка нажатия на кнопку "Вниз"
	$("#down").click(function(){
//Необходимо прокрутить в конец страницы
	var curPos=$(document).scrollTop();
	var height=$("header").height();
	var scrollTime=(height-curPos)/0.73;
	$("body,html").animate({"scrollTop":height},scrollTime);
	});


//скролл на секции при нажатии на меня
	$('.nav-menu a').click(function(event){
        event.preventDefault();
        targetSection = $(this).attr('href');
        topSpeed = $(targetSection).offset().top;//узнаем кардинаты каждого блока
        $('html, body').animate({scrollTop:topSpeed},1000);
    })


//галерея
	//раздаем id и href для их взаимопонимая
	$(".portfolio-item").each(function(e){

		var th = $(this);

		th.attr("href", "#portfolio-img-"+e)
			.find(".portfolio-popup")
				.attr("id", "portfolio-img-"+e);

	});
	//включаем magnificPopup и его эффекты
	$(".portfolio-item").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});


//делаем одинаковой высоты блоки 
	$(".item-img>img").equalHeights();

}); 

//maps
	var marker_url = '../img/marker.png';
	var map;
  		function initMap() {
  			map = new google.maps.Map(document.getElementById('map'), {
  				center: {lat: 40.708116, lng: -73.95707},
  				zoom: 13,
  				zoomControl: false,
  				mapTypeControl: false,
			    mapTypeControlOptions: {
			      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			      mapTypeIds: ['roadmap', 'terrain']
			    },
			    streetViewControl: false,
  				styles: [
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": "2.00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#9c9c9c"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "all",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ff0000"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.icon",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "weight": "3.02"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#eeeeee"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#7b7b7b"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fff019"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "gamma": "1.81"
            },
            {
                "weight": "1.61"
            },
            {
                "saturation": "8"
            },
            {
                "lightness": "36"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#070707"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    }
]
  			});
  			var marker = new google.maps.Marker({
  					position: {lat: 40.708116, lng: -73.95707},
  					map: map,
  					visible: true,
  					icon: marker_url
  			});
  		}

//	<script src="images.json"></script>
//	var jsonURL="/home/rahulalishetty/assign/html-css/rahulalishetty.github.io/images.json";
//	JSON.parse(jsonURL, function(json){
//		var images="";
//		$.each(json.images, function() {
//			images+='<div class="main-div-element"><img src="'+ this.path +'"/> <div> '+ this.text+ '</div></div>';
//		});
//		$('.main-div').append(images);
//	});
//$(document).ready(function() {
//    init();
    $.getJSON('../js/images.json', function(data) {
          var images;
          $.each(data.images, function(i,f) {
                 images+='<div class="main-div-element"><img src="'+ f.path +'"/> <div> '+ f.text+ '</div></div>';
          });
          $('.main-div').append(images);
    });
//});

//function loadJSON(callback) {
//    console.log("in loadJson");
//    var xobj = new XMLHttpRequest();
//        xobj.overrideMimeType("application/json");
//    xobj.open('GET', '../js/images.json', true);
//    xobj.onreadystatechange = function () {
//          if (xobj.readyState == 4 && xobj.status == "200") {
//            callback(xobj.responseText);
//          }
//    };
//    xobj.send(null);
// }
//
// function init() {
//    console.log("in init");
//  loadJSON(function(response) {
//     var json = JSON.parse(response);
//     $.each(json.images, function() {
//     	images+='<div class="main-div-element"><img src="'+ this.path +'"/> <div> '+ this.text+ '</div></div>';
//     });
//     $('.main-div').append(images);
//  });
// }
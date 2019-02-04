var images ;

if (localStorage.getItem('imagesJson') == null) {
	$.ajax({
	    async: false,
	    url: "../js/images.json",
	    success: function(data) {
	        images=data.images;
	    }
	});
}else{
	images = JSON.parse(localStorage.getItem('imagesJson'));
}


storeUpdatedImages();

function storeUpdatedImages(){
	localStorage.setItem('imagesJson',JSON.stringify(images));
}

displayImages();

function displayImages(){
    removeChildren();
	var allImages="";
	var mainDiv=document.getElementById("images");
	var children=document.createElement("div");
	images.forEach(function (image){
		allImages += '<div class="main-div-element"><img src="'
		+ image.url +'"/> <div>'+
		image.info+ '</br> '+
		image.uploadedDate+'</div></div>';
	});
	children.innerHTML = allImages;
	console.log(children);
	mainDiv.appendChild(children);
}

function removeChildren(){
	var mainDiv=document.getElementById("images");
	while(mainDiv.firstChild){
		mainDiv.removeChild(mainDiv.firstChild);
	}
}

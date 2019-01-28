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

console.log(images);
function removeChildren(){
	var mainDiv=document.getElementById("images");
	while(mainDiv.firstChild){
		mainDiv.removeChild(mainDiv.firstChild);
	}
}

function displayImages(){
	removeChildren();
	var allImages="";
	var mainDiv=document.getElementById("images");
	var children=document.createElement("div");
	images.forEach(function (image){
		allImages += '<div class="main-div-element"><img src="'
		+ image.url +'"/> <div>'+
		image.info+ '</br> '+
		image.uploadedDate+'<button class="settings"'+
		' id="settings" onclick="openSettings('+image.id+')">'+
		'<img src="../pics/settings.png"/></button></div></div>';
	});
	children.innerHTML = allImages;
	console.log(children);
	mainDiv.appendChild(children);
}



function submitAddForm() {
	    var url = $('#addUrl').val();
	    var name = $('#addName').val();
	    var info = $('#addInfo').val();
	    var uploadedDate = $('#addDate').val();
	    console.log(url+" "+uploadedDate);
	    $(".error").remove();
	    $(".valid").remove();

	    var pattern = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/; 

	    if(!pattern.test(url)) {
	      $('#addSubmit').after('<span class="error">invalid url</span>');
	      console.log("invalid");
	    }else if(uploadedDate == undefined){
	      $('#addSubmit').after('<span class="error">uploaded date is undefined</span>');
	    }else{
	      addNewImage(url,name,info,uploadedDate);
	      console.log("updated array:", images);
	      $('#addSubmit').after('<span class="valid">image added</span>');
	    }
}


function submitEditForm(id) {
	    var url = $('#editUrl').val();
	    var name = $('#editName').val();
	    var info = $('#editInfo').val();
	    var uploadedDate = $('#editDate').val();
	    console.log("in submitedit id:", id, url+" "+uploadedDate);
	    $(".error").remove();
	    $(".valid").remove();

	    var pattern = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/; 

	    if(!pattern.test(url)) {
	      $('#editSubmit').after('<span class="error">invalid url</span>');
	      console.log("invalid");
	    }else if(uploadedDate == undefined){
	      $('#editSubmit').after('<span class="error">uploaded date is undefined</span>');
	    }else{
	    	updateImage(id, url, name, info, uploadedDate);
	      $('#editSubmit').after('<span class="valid">changes updated</span>');
	    }
}


function addDefaultValues(id){
	images.forEach(function (image){
		if(image.id==id){
			document.getElementById("editUrl").defaultValue= image.url;
			document.getElementById("editName").defaultValue= image.name;
			document.getElementById("editInfo").defaultValue= image.info;
			document.getElementById("editDate").defaultValue= image.uploadedDate;
		}
	});
}

function addDefaultDate(dateId){
		var today = new Date();
	    var dd = ("0" + (today.getDate())).slice(-2);
	    var mm = ("0" + (today.getMonth()+1)).slice(-2);
	    var yyyy = today.getFullYear();
	    today = yyyy + '-' + mm + '-' + dd ;
	    document.getElementById(dateId).setAttribute("value", today);
	    document.getElementById(dateId).setAttribute("max", today);
}

function addNewImage(url, name, info, uploadedDate){
	var newImage = { 
		id: images.length+1 , 
		name: name, 
		url: url,
		info: info, 
		uploadedDate:uploadedDate
	}
	images.push(newImage); 
	storeUpdatedImages();
	displayImages();
}

function updateImage(id, url, name, info, uploadedDate){
	console.log("in update:", id, url, name)
	images.forEach(function (image){
		if(image.id==id){
			image.url=url;
			image.name=name;
			image.info=info;
			image.uploadedDate=uploadedDate;
		}
	});
	storeUpdatedImages();
	displayImages();
}

function removeImage(id){
	var index=-1;
	images.forEach(function(image){
		index++;
		if(image.id == id){
			images.splice(index,1);
			return;
		}
	});
	storeUpdatedImages();
	displayImages();
}
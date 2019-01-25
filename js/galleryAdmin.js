document.addEventListener('DOMContentLoaded', init, false);
function init(){
	console.log("onload");
	var addPopUp= document.getElementById("addForm");

	var closeButton= document.getElementsByClassName('close')[0];

	var addButton = document.getElementById("add-button") ;

	addButton.onclick= function() {
		console.log("clicked add");
	    document.getElementById("addForm").style.display = "block";
	    addDefaultDate("addDate");
	}

	closeButton.onclick=function() {
	    document.getElementById("addForm").style.display = "none";
	}

	window.onclick = function(event) {
		if(event.target == addPopUp)
			document.getElementById("addForm").style.display = "none";
	}
}


function openSettings(id){
	document.getElementById("settingsForm").style.display = "block";
	addDefaultValues(id);
	var settingsPopUp= document.getElementById("settingsForm");

	var closeButton= document.getElementsByClassName('close')[1];

	var removeButton = document.getElementById("removeButton");

	closeButton.onclick=function() {
	    document.getElementById("settingsForm").style.display = "none";
	}

	window.onclick = function(event) {
		if(event.target == settingsPopUp)
			document.getElementById("settingsForm").style.display = "none";
	}

	removeButton.onclick=function() {
	    removeImage(id);
	}

	$('#edit-form').submit(function () {
		 submitEditForm(id);
		 return false;
	});

}

function openForm(event, tabId) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabId).style.display = "block";
  event.currentTarget.className += " active";
}
function showDescription(descript) {
	$("#description").html("Description: " + descript);
}

function hideDescription() {
	$("#description").html("");
}

function validate() {
	var s = $("#phone").val();
	var phoneError = "Phone number is not valid or not in a valid format.";
	if(isNaN(s)) {
		alert(phoneError);
		return false;
	}
	var num = parseInt(s);
	if(num < 1000000000 || num > 9999999999) {
		alert(phoneError);
		return false;
	}

	var d = new Date($("#datetxt").val());
	if(d >= new Date()) {
		alert("Date of Birth is not valid. Date has to be before today.");
		return false;
	}
}

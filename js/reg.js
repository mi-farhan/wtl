function checkAdrs(e){
	var element=e.target;
	if(element.value.length=50){
		alert('Addresss is too short');
		element.value="";
		return false;
	}
	return true;
}
function checkRollNo(e){
	var element=e.target;
	if(/[^a-zA-z0-9]/.test(element.value)){
		alert("inavlid RollNO ! Only numbers from 0-9 characters from a-z and A-Z are allowed");
		element.value="";
		return false;
	}
	if(!/[a-zA-z]/.test(element.value)){
		alert("rollno Must Contain characters");
		element.value="";
		return false;
	}

	if(!/[0-9]/.test(element.value)){
		alert("rollno Must Contain Nummbers from 0-9");
		element.value="";
		return false;
	}

	if(element.value.length<6 || element.value.length>8){
		alert("Length is too short");
		element.value="";
		return false;
	}
	return true;


}

function checkName(e){
	var element=e.target;
	if(/[^a-zA-Z]/.test(element.value)){
		alert("Name is Invalid! Only characters from a-z and A-Z are allowed");
		element.value="";
		return false;
	}
	if(element.value.length<3){
		alert("Name is too short");
		element.value="";
		return false;
	}
	return true;
}

function checkMail(e){
	var element=e.target;
	if(/[^@_.a-zA-Z0-9]/.test(element.value)){
		alert("Email should contain @ and _ special charachters and Nummbers from 0-9 and charachters from a-zA-z");
		element.value="";
		return false;
	}
	if(!/[@]/.test(element.value)){
		alert("Email Must Contain @");
		element.value="";
		return false;
	}

	if(!/[.]/.test(element.value)){
		alert("email Must contain . symbol ");
		element.value="";
		return false;
	}
	if(element.value.length>50){
		alert("Length is too Long");
		element.value="";
		return false;
	}
	if(!/[0-9A-Za-z]/.test(element.value)){
		alert("Email must contain A-Z or a-z and 0-9");
		element.value="";
		return false;
	}
	if(!/[0-9]/.test(element.value)){
		alert("Email must contain numbers 0-9");
		element.value="";
		return false;
	}
	return true;


}

var roll_no=document.getElementById('rollno');
var sname=document.getElementById('sname');
var address=document.getElementById('address');
var email=document.getElementById('email');
roll_no.addEventListener('blur',checkRollNo,false);
sname.addEventListener('blur',checkName,false);
address.addEventListener('blur',checkAdrs,false);
email.addEventListener('blur',checkMail,false);
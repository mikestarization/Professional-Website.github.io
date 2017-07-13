//https://www.tutorialspoint.com/javascript/javascript_form_validations.htm

function validateInfo(){

	if(document.ContactForm.FirstName.value=="") {
			alert("Please input your first name");
			document.ContactForm.FirstName.value.focus();
			return false;
	}
	if(!isNaN(document.ContactForm.FirstName.value)) {
			alert("Please do not input numbers in your first name");
			document.ContactForm.FirstName.value.focus();
			return false;
	}
	if(document.ContactForm.LastName.value=="") {
			alert("Please input your last name");
			document.ContactForm.LastName.value.focus();
			return false;
	}
	if(!isNaN(document.ContactForm.LastName.value)) {
			alert("Please do not input numbers in your last name");
			document.ContactForm.LastName.value.focus();
			return false;
	}
	if(document.ContactForm.EmailAddress.value=="") {
			alert("Please input your email");
			document.ContactForm.EmailAddress.value.focus();
			return false;
	}
	if(document.ContactForm.Browser.value=="") {
			alert("Please input your browser");
			document.ContactForm.Browser.value.focus();
			return false;
	}
	if(document.ContactForm.CommentArea.value=="") {
			alert("Please input a comment");
			document.ContactForm.CommentArea.value.focus();
			return false;
	}
	
	switch(document.ContactForm.Browser.value){
		case'Internet Explorer':
		break;
		case'Firefox':
		break;
		case'Chrome':
		break;
		case'Safari':
		break;
		case'Other':
		break;
		default:
		alert("Please input a valid Browser");
			document.ContactForm.Browser.value.focus();
			return false;
	}
}
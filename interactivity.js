//needs to include: Properties, Methods, functions, rollovers, clocks, calendars, client-side calculations, forms validation, mouse movement followers, animations?
//https://www.tutorialspoint.com/javascript/javascript_form_validations.htm
//var email = document.getElementById('Email_Address');//https://www.codeproject.com/Tips/492632/Email-Validation-in-JavaScript
//var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;//All Special characters
var emailSign = /@/;

function validateInfo(){

	/**console.log('Hey');
	console.log(document.ContactForm.EmailAddress.value);**/
	if(document.ContactForm.FirstName.value=="") {
			alert("Please input your first name");
			document.ContactForm.FirstName.value.focus();
			//return false;
	}
	if(document.ContactForm.LastName.value=="") {
			alert("Please input your last name");
			document.ContactForm.LastName.value.focus();
			//return false;
	}
	if(document.ContactForm.EmailAddress.value=="") {
			alert("Please input your email");
			document.ContactForm.EmailAddress.value.focus();
			//return false;
	}
	if(document.ContactForm.Browser.value=="") {
			alert("Please input your browser");
			document.ContactForm.Browser.value.focus();
			//return false;
	}
	if(document.ContactForm.CommentArea.value=="") {
			alert("Please input a comment");
			document.ContactForm.CommentArea.value.focus();
			//return false;
	}
	switch(document.ContactForm.Browser.value){
		case'Internet Explorer':
		break;
		case'Firefox'
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
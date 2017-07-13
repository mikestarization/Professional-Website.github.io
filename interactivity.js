//Source: https://www.tutorialspoint.com/javascript/javascript_form_validations.htm

function validateInfo(){//This function validates the form created in the HTML index

	if(document.ContactForm.FirstName.value=="") {//This if statement checks if the FirstName textbox is blank, and alerts the user that they have not filled in the required information
			alert("Please input your first name");//This alert creates a popup, preventing the user from using the website until they read and accept the message
			document.ContactForm.FirstName.value.focus();//The .focus() function indicates where the user should input text next
			return false;//This prevents the page from posting the information to the URL
	}
	if(!isNaN(document.ContactForm.FirstName.value)) {
			alert("Please do not input numbers in your first name");
			document.ContactForm.FirstName.value.focus();
			return false;
	}
	if(document.ContactForm.LastName.value=="") {//This if statement checks if the LastName textbox is blank, and alerts the user that they have not filled in the required information
			alert("Please input your last name");
			document.ContactForm.LastName.value.focus();
			return false;
	}
	if(!isNaN(document.ContactForm.LastName.value)) {
			alert("Please do not input numbers in your last name");
			document.ContactForm.LastName.value.focus();
			return false;
	}
	if(document.ContactForm.EmailAddress.value=="") {//This if statement checks if the EmailAddress and alerts the user that they have not filled in the required informationtextbox is blank, and alerts the user that they have not filled in the required information
			alert("Please input your email");
			document.ContactForm.EmailAddress.value.focus();
			return false;
	}
	if(document.ContactForm.Browser.value=="") {//This if statement checks if the Browser dropdown has not been selected, and alerts the user that they have not filled in the required information
			alert("Please input your browser");
			document.ContactForm.Browser.value.focus();
			return false;
	}
	if(document.ContactForm.CommentArea.value=="") {//This if statement checks if the Comment textbox is blank, and alerts the user that they have not filled in the required information
			alert("Please input a comment");
			document.ContactForm.CommentArea.value.focus();
			return false;
	}
	
	switch(document.ContactForm.Browser.value){//This switch statement checks if the user has selected a valid answer Browser from the dropdown selection 
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
		default://default is essentially the 'else' statement, and outputs an alert if the user inputs their own answer
		alert("Please input a valid Browser from the drop down list");
			document.ContactForm.Browser.value.focus();
			return false;
	}
}

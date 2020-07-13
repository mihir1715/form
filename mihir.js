function validation()
{
    var first_name=document.getElementById("firstName").value;
    var last_name=document.getElementById("lastName").value;
    var father_name=document.getElementById("fatherName").value;
    var mother_name=document.getElementById("motherName").value;
    var phone_no=document.getElementById("phoneNo").value;
    var email=document.getElementById("emailId").value;
    var dob=document.getElementById("date").value;
    var designation=document.getElementById("Designation").value;
    var resume=document.getElementById("resume").value;
    var eml = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var file= form.file.value;
    var reg = /(.*?)\.(pdf|docx|txt)$/;
    // Validation for first name fields for empty
    if(first_name=="" || first_name==null)
    {
        document.getElementById("ln").innerHTML="";
        document.getElementById("fan").innerHTML="";
        document.getElementById("mn").innerHTML="";
        document.getElementById("phn").innerHTML="";
        document.getElementById("dob").innerHTML="";
        document.getElementById("em").innerHTML="";
        document.getElementById("des").innerHTML="";
        document.getElementById("res").innerHTML="";
        document.getElementById("fn").innerHTML="*(FIrst name is required)";
        document.getElementById("firstName").focus();
        return false;  
    }
    // Validation for last name fields for empty
    else if(last_name=="" || last_name==null)
    {
        document.getElementById("fn").innerHTML="";
        document.getElementById("fan").innerHTML="";
        document.getElementById("mn").innerHTML="";
        document.getElementById("phn").innerHTML="";
        document.getElementById("dob").innerHTML="";
        document.getElementById("em").innerHTML="";
        document.getElementById("des").innerHTML="";
        document.getElementById("res").innerHTML="";
        document.getElementById("ln").innerHTML="*(Last name is required)";
        document.getElementById("lastName").focus();
        return false;
    }
    // Validation for father name fields for empty
    else if(father_name=="" || father_name==null)
    {
        document.getElementById("fn").innerHTML="";
        document.getElementById("ln").innerHTML="";
        document.getElementById("mn").innerHTML="";
        document.getElementById("phn").innerHTML="";
        document.getElementById("dob").innerHTML="";
        document.getElementById("em").innerHTML="";
        document.getElementById("des").innerHTML="";
        document.getElementById("res").innerHTML="";
        document.getElementById("fan").innerHTML="*(Father name is required)";
        document.getElementById("fatherName").focus();
        return false; 
    }
    // Validation for mother name fields for empty
    else if(mother_name=="" || mother_name==null)
    {
        document.getElementById("fn").innerHTML="";
        document.getElementById("ln").innerHTML="";
        document.getElementById("fan").innerHTML="";
        document.getElementById("phn").innerHTML="";
        document.getElementById("dob").innerHTML="";
        document.getElementById("em").innerHTML="";
        document.getElementById("des").innerHTML="";
        document.getElementById("res").innerHTML="";
        document.getElementById("mn").innerHTML="*(Mother name is required)";
        document.getElementById("motherName").focus();
        return false; 
    }
    // Validation for phone_no fields for empty
    else if(phone_no.length!=10)
    {
        document.getElementById("fn").innerHTML="";
        document.getElementById("ln").innerHTML="";
        document.getElementById("fan").innerHTML="";
        document.getElementById("mn").innerHTML="";
        document.getElementById("dob").innerHTML="";
        document.getElementById("em").innerHTML="";
        document.getElementById("des").innerHTML="";
        document.getElementById("res").innerHTML="";
        document.getElementById("phn").innerHTML="*(Phone no. should be 10)";
        document.getElementById("phoneNo").focus();
        return false; 
    }
    // Validation for email fields for empty
    else if (eml.test(email) == false) 
    {
        document.getElementById("fn").innerHTML="";
        document.getElementById("ln").innerHTML="";
        document.getElementById("fan").innerHTML="";
        document.getElementById("mn").innerHTML="";
        document.getElementById("dob").innerHTML="";
        document.getElementById("phn").innerHTML="";
        document.getElementById("des").innerHTML="";
        document.getElementById("res").innerHTML="";
        document.getElementById("em").innerHTML="*(Invalid Email Address)";
        document.getElementById("emailId").focus();
        return false; 
    }
    // Validation for date_of_birth fields for empty
    else if(dob=="" || dob=="null")
    {
        document.getElementById("fn").innerHTML="";
        document.getElementById("ln").innerHTML="";
        document.getElementById("fan").innerHTML="";
        document.getElementById("mn").innerHTML="";
        document.getElementById("em").innerHTML="";
        document.getElementById("phn").innerHTML="";
        document.getElementById("des").innerHTML="";
        document.getElementById("res").innerHTML="";
        document.getElementById("dob").innerHTML="*(Select date of birth)";
        document.getElementById("date").focus();
        return false;  
    }
    // Validation for designation fields for empty
    else if(designation=="" || designation=="null")
    {
        document.getElementById("fn").innerHTML="";
        document.getElementById("ln").innerHTML="";
        document.getElementById("fan").innerHTML="";
        document.getElementById("mn").innerHTML="";
        document.getElementById("em").innerHTML="";
        document.getElementById("phn").innerHTML="";
        document.getElementById("dob").innerHTML="";
        document.getElementById("res").innerHTML="";
        document.getElementById("des").innerHTML="*(Choose your designation)";
        document.getElementById("Designation").focus();
        return false;  
    }
    // Validation for resume fields for empty
    else if(!file.match(reg))
    {
        document.getElementById("fn").innerHTML="";
        document.getElementById("ln").innerHTML="";
        document.getElementById("fan").innerHTML="";
        document.getElementById("mn").innerHTML="";
        document.getElementById("em").innerHTML="";
        document.getElementById("phn").innerHTML="";
        document.getElementById("dob").innerHTML="";
        document.getElementById("des").innerHTML="";
        document.getElementById("res").innerHTML="*(please select proper file format)";
        document.getElementById("resume").focus();
        return false;
    }
	else
	{
		document.getElementById("fn").innerHTML="";
        document.getElementById("ln").innerHTML="";
        document.getElementById("fan").innerHTML="";
        document.getElementById("mn").innerHTML="";
        document.getElementById("em").innerHTML="";
        document.getElementById("phn").innerHTML="";
        document.getElementById("dob").innerHTML="";
        document.getElementById("des").innerHTML="";
        document.getElementById("res").innerHTML="";
	}
    //Code to print output
    var Res="First name="+first_name+" last name="+last_name+" father name="+father_name+" Mother name="+mother_name+
    " phone no="+phone_no+" email="+email+" date="+dob+" designation="+designation+ " and your resume file name is"+resume;
    document.getElementById("print").innerHTML=Res;
    return false;
}
// Code for Reset
function reset1()
{
    document.getElementById("print").innerHTML="";
    document.getElementById("firstName").focus();
}
// Code for Input type only alphabet
function check()
{
    return (event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123);
}
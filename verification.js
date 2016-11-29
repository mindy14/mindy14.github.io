function check(form)
{
	if(form.userid.value == "srmmedical" && form.pswrd.value == "admin")
	{
		window.open('https://form.jotform.me/63132911161445')
	}
	else
	{
		alert("The Username and Password you entered do not match.")
	}
}

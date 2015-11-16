$.index.open();

var hostUrl = "http://localhost:80/post_auth.php";

// function doClick(e){
    // alert($.tfUsern.value);
// };

var loginReq = Ti.Network.createHTTPClient(
{
	onload: function()
	{
		alert('onload function');
	    var json = this.responseText;
	    var response = JSON.parse(json);
	    if (response.logged == true)
	    {
	        alert("Welcome " + response.name + ". Your email is: " + response.email);
	    }
	},
	onerror: function(e) {
		// this function is called when an error occurs, including a timeout
		alert(response.message);
   }, 
	timeout: 5000
});
 
function loginSubmit(e)
{
    if ($.tfUsern.value != '' && $.tfPassw.value != '')
    {
        loginReq.open("POST", hostUrl);
        var params = {
            username: $.tfUsern.value,
            password: Ti.Utils.md5HexDigest($.tfPassw.value)
        };
        alert('about to send params' + params.username + params.password);
        loginReq.send(params);
        alert('after loginReq.send');
    }
    else
    {
        alert("Username/Password are required");
    }
};



$.index.open();

// function doClick(e){
    // alert($.tfUsern.value);
// };


var loginReq = Titanium.Network.createHTTPClient();
 
function submit(e)
{
    if ($.tfUsern.value != '' && $.tfPassw.value != '')
    {
        loginReq.open("POST","http://localhost/post_auth.php");
        var params = {
            username: $.tfUsern.value,
            password: Ti.Utils.md5HexDigest($.tfPassw.value)
        };
        loginReq.send(params);
    }
    else
    {
        alert("Username/Password are required");
    }
};

loginReq.onload = function()
{
    var json = this.responseText;
    var response = JSON.parse(json);
    if (response.logged == true)
    {
        alert("Welcome " + response.name + ". Your email is: " + response.email);
    }
    else
    {
        alert(response.message);
    }
};
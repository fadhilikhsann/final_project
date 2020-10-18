function setCookie(value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = value + '"};' + expires + ';path=/';
    //alert(value + '"};' + expires + ';path=/');
}

function getCookie(cname) {
    var name = "data" + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            var txt = c.substring(name.length, c.length);
            var obj = JSON.parse(txt);
            if(cname==="id_plp"){
                return obj.id_plp;
            }else if(cname==="nama_plp"){
                return obj.nama_plp;
            }
            else if(cname==="email_plp"){
                return obj.email_plp;
            }
            else if(cname==="telp_plp"){
                return obj.telp_plp;
            }
            else if(cname==="confirm"){
                return obj.confirm;
            }
            else if(cname==="status"){
                return obj.status;
            }
        }
    }
    return "";
}
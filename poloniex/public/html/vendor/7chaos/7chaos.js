// Escolha ambiente des / hmlg / prod
// Informe URL inicial da app (environment_inic)

//var environment = "apk";  // apk -> prod (projeto em apk chamando www.7chaos.com)
//var environment = "des";  // des -> des (projeto em localhost:9090 chamando localhost:7070)
//var environment = "prod"; // prod -> prod (projeto em www.7chaos.com chamando www.7chaos.com)
var environment = "hmlg"; // des -> prod (projeto em localhost chamando www.7chaos.com)

var environment_inic = window.location.href;
environment_inic = environment_inic.replace("android_asset","androidAsset");
var idx = environment_inic.indexOf("#");
if (idx > 0) {
	environment_inic = environment_inic.substring(0, idx);
}

// somente utilizado se "des" ou "hmlg": Retorno do oauth2
//var environment_inic = "http://localhost:9090/crypto/html/index.html";
//if (environment == "apk") {
//	environment_inic = "http://localhost/index.html";
//}
// xdomain nao para apk's
//if (window.location.href.indexOf("file://") != 0) {
//	if (environment == "des") {
//		var str = "<" + "script " + "src='http://localhost:7070/7chaos/html/vendor/xdomain/xdomain.js' slave='http://localhost:7070/7chaos/html/prossy.html'><" + "/script>";
//		document.write(str);
//	}
//	if (environment == "hmlg") {
//		var str = "<" + "script " + "src='http://www.7chaos.com/html/vendor/xdomain/xdomain.js' slave='http://www.7chaos.com/html/prossy.html'><" + "/script>";
//		document.write(str);
//	}
//}

// login oauth2 recebe user como parametro da pagina de oauth
if (window.location.href.indexOf(environment_inic) == 0) {
	var path = window.location.href;
	var ind1 = path.indexOf("?userLogin=");
	if (ind1 > 0) {
		var user = path.substring(ind1 + 11, path.length);
		user = decodeURIComponent(user);
		localStorage.setItem("user", user);
		environment_inic = environment_inic.substring(0, ind1);
		window.location.href = environment_inic;
	}
}

var ajax = http = function (method, path, data, onsuccess, onfailed, oncomplete) {
  var xhttp;
  
  method = method.toUpperCase();
	
  if (window.XMLHttpRequest) {
     xhttp = new XMLHttpRequest();
  } else {
    // code for old IE browsers
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhttp.onreadystatechange = function () {

    if (this.readyState == 4) {

      if (this.status == 200) {
        typeof onsuccess === 'function' && onsuccess(this.responseText);
      } else {
        typeof onfailed === 'function' && onfailed(this.responseText);
      }

      typeof oncomplete === 'function' && oncomplete(this.responseText);

    }
  }
	
  xhttp.open(method, path, true);
  xhttp.setRequestHeader("Content-type","application/json");

  if (['GET', 'DELETE'].indexOf(method) > -1) {
    xhttp.send();
  } else {
    if (typeof data === 'object') {
      xhttp.send(JSON.stringify(data) || '');  
    } else {
      xhttp.send(data || '');
    }
  }

}
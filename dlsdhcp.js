function generatestring(inputText){
		 var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
		 var ip = inputText.value;
		 var teil1 = "option vendor-encapsulated-options 01:07:53:69:65:6D:65:6E:73:03:1A:73:64:6C:70:3A:2F:2F:";
		 var teil3 = ":3A:31:38:34:34:33;";
		 		 
		 if(inputText.value.match(ipformat))
		 {
			document.getElementById('dlsip').focus();
		 	var arr = [];
			for (var i = 0; i < ip.length; i++) {
              arr[i] = (ip.charCodeAt(i).toString(16)).slice(-4);
              }
			ip=arr.toString();
		
			for (i = 0; i < ip.length; i++) {
				ip = ip.replace(",",":");
				}
			 document.getElementById("output1").innerHTML = "<h4>Der String für den DHCPD Linux-Scope lautet:</h4><br>" + teil1+ip+teil3;
			 document.getElementById("output2").innerHTML = 
			 "<br><h4>Der String für den DHCPD Linux-Class lautet: </h4><br>class \"OptiIpPhone\" { <br>option vendor-encapsulated-options<br>" 
			 +teil1+ip+teil3+
			 '<br>match if substring (option vendor-class-identifier, 0, 11) = "OptiIpPhone";<br>}'
			 return true;
		 }
		 else
		 {
			 alert("You have entered an invalid IP address!");
			 document.getElementById('dlsip').focus();
			 return false;
		 }		

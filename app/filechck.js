var filepth = 'http://localhost:8080/Monroney/uploadFiles/Shipping1.csv';
function FileCheck() {
	    var http = jQuery.ajax({
	        type:"HEAD", //Not get
	        url: filepth,
	        async: false,
	        error:function(){
  	         alert("Shipping1.csv File is Missing please Upload");
  	        }   
	});
}

	
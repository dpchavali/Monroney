$(document).ready(function(evt) {
      
    $('#upload').click(function(evt) {
    	evt.preventDefault();
    	if (document.getElementById("file").value != "")
    		{
		        $.ajax({
		        	  url: "ExcelFileUpload",
		        	  data: new FormData($('#uploadform')[0]),
		        	  cache: false,
		              contentType: false,
		              processData: false,
		              type: 'POST',
		        	  success: function(){
		        	      alert("File Uploaded Successfully");
		        	  },
		        	  error:function(){
		        	      alert("File Upload Falied");
		        	  }   
		        	}); 
    		}
    	else{
    		alert("Please Select File To Upload");
    	}

    });
    
   $('#tranaddc').click(function(evt) {
    	evt.preventDefault();
        $.ajax({
        	  url: "FileFTP",
        	  data:{ button1: "addc"},
        	  type: 'POST',
        	  success: function(){
        	      alert("ADDC File FTP Successfull");
        	  },
        	  error:function(){
        	      alert("ADDC File FTP Falied");
        	  }   
        	}); 
    });
    
    $('#tranbldc').click(function(evt) {
    	evt.preventDefault();
        $.ajax({
        	  url: "FileFTP",
              type: 'post',
        	  data:{ button1: "bldc"},
        	  success: function(){
        	      alert("BLDC File FTP Successfull");
        	  },
        	  error:function(){
        	      alert("BLDC File FTP Falied");
        	  }   
        	}); 
    });
    
    $('#trandcdc').click(function(evt) {
    	evt.preventDefault();
        $.ajax({
        	  url: "FileFTP",
              type: 'post',
        	  data:{ button1: "dcdc"},
        	  success: function(){
        	      alert("DCDC File FTP Successfull");
        	  },
        	  error:function(){
        	      alert("DCDC File FTP Falied");
        	  }   
        	}); 
    });
    
    $('#tranhpdc').click(function(evt) {
    	evt.preventDefault();
        $.ajax({
        	  url: "FileFTP",
              type: 'post',
        	  data:{ button1: "hpdc"},
        	  success: function(){
        	      alert("HPDC File FTP Successfull");
        	  },
        	  error:function(){
        	      alert("HPDC File FTP Falied");
        	  }   
        	}); 
    });
    
    $('#tranoddc').click(function(evt) {
    	evt.preventDefault();
        $.ajax({
        	  url: "FileFTP",
              type: 'post',
        	  data:{ button1: "oddc"},
        	  success: function(){
        	      alert("ODDC File FTP Successfull");
        	  },
        	  error:function(){
        	      alert("ODDC File FTP Falied");
        	  }   
        	}); 
    });

});



function checkfile(sender) {
    var validExts = new Array(".CSV", ".csv");
    var fileExt = sender.value;
    fileExt = fileExt.substring(fileExt.lastIndexOf('.'));
    if (sender.value !== "")
    {
    if (validExts.indexOf(fileExt) < 0)
     {
      alert("Invalid file selected, valid files are of " +
               validExts.toString() + " types.");
               sender.value=""
      return false;
     }
     else 
      return true;
}
}
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
    
    $('#transmit').click(function(evt) {
    	evt.preventDefault();
        $.ajax({
        	  url: "FileFTP",
        	  data: new FormData($('#ftpform')[0]),
        	  cache: false,
              contentType: false,
              processData: false,
              type: 'POST',
        	  success: function(){
        	      alert("File FTP Successfull");
        	  },
        	  error:function(){
        	      alert("File FTP Falied");
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
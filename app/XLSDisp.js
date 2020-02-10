var currdata1;	
var currowdat;
var currowdesc;
var currowbrnd;
var currowdesc2;
var currowfont;
var currowspcl;
var currowfrmt;
var currowsris;
var cboxarry = [];
//var data1 = $("data1");


var selectionActive = function(instance, x1, y1, x2, y2, origin) {
    var cellName1 = jexcel.getColumnNameFromId([x1, y1]);
    var cellName2 = jexcel.getColumnNameFromId([x2, y2]);
  //  $('#log').append('The selection from ' + cellName1 + ' to ' + cellName2 + '<br>');
      currdata1 = document.getElementById('table').jexcel.getValueFromCoords(x1, y1);
      currowdat = document.getElementById('table').jexcel.getRowData(y1);
      var z = y1+1;
      currowdesc = document.getElementById('table').jexcel.getValue('I'+z);
      currowdesc2 = document.getElementById('table').jexcel.getValue('L'+z);
      currowbrnd = document.getElementById('table').jexcel.getValue('F'+z);
      currowfont = document.getElementById('table').jexcel.getValue('H'+z);
      currowspcl = document.getElementById('table').jexcel.getValue('K'+z);
      currowfrmt = document.getElementById('table').jexcel.getValue('G'+z);
      currowsris = document.getElementById('table').jexcel.getValue('A'+z);
  //  $('#log').append('The selection from ' + y1 + '<br>'); 
}


var changed = function(instance, cell, x, y, value, oldValue) {
	  var cellName = jexcel.getColumnNameFromId([x,y]);
//    var curdesc = document.getElementById('table').jexcel.getValueFromCoords(x, y);
      var datalen = value.length;
      if (datalen > 25){
    	  alert("Description1 Cannot Be Greater Than 25 Chars");
    	  document.getElementById('table').jexcel.setValue(cellName, oldValue);
      }
 //   alert(document.getElementById('table').jexcel.getStyle(x+y));
 //   $('#log').append('Cell ' + cellName + ' Value changed from ' + currdata1 + ' to: ' + value + '<br>');
      if(value != true && value != false)
    	  {
		      var head2 = document.getElementById('table').jexcel.getHeaders();
		      var data2 = document.getElementById('table').jexcel.getData();
		      var uri2 = $.csv.fromArrays(head2);
		      uri2 = uri2.replace(/(\r\n|\n|\r|")/gm,"");
		      uri2 = uri2 +"\n" + $.csv.fromArrays(data2);
		      $('#data1').text("");
		      $('#data1').text(uri2);
		      mySpreadsheet.setStyle(cellName, 'background-color', 'orange');
    	  }
      
      if(value == true){
    	  cboxarry.push(cellName);
          mySpreadsheet.setStyle(cellName, 'background-color', 'orange');
          console.log(cboxarry);
      }
      if(value == false){
    	  const index = cboxarry.indexOf(cellName);
    	  if (index > -1) {
    		  cboxarry.splice(index, 1);
    	  }
 //         mySpreadsheet.setStyle(cellName, 'background-color', 'green');
	      console.log(cboxarry);
	      }
    }

var mySpreadsheet = jexcel(document.getElementById('table'), {
	csv:'/Monroney/uploadFiles/Shipping1.csv',
	csvFileName:'Shipping1',
    csvHeaders:true,
    tableOverflow:true,
    search:true,
    pagination:250,
    /*paginationOptions:[25,50,75,100],*/
    minDimensions:[12,40],
    allowInsertRow:true,
    allowInsertColumn:false,
    allowDeleteRow:false,
    allowDeleteColumn:false,
    allowRenameColumn:false,
    about:false,
    includeHeadersOnDownload:true,
    tableHeight:'570px',
    /* fullscreen:true,
    lazyLoading:true, */
    columns: [
        { type:'text', width:50,readOnly:true,},
        { type:'text', width:50,readOnly:true,},
        { type:'text', width:100,readOnly:true,},
        { type:'text', width:50,readOnly:true,},
        { type:'text', width:50,readOnly:true,},
        { type:'text', width:50,readOnly:true,},
        { type:'text', width:80,readOnly:true,},
        { type:'text', width:50},
        { type:'text', width:300},
        { type:'text', width:80,readOnly:true,},
        { type:'text', width:50,readOnly:true,},
        { type:'text', width:300},
        { type:'checkbox', title:'Create PDF', width:100},
      ],
          
        onchange: changed,
        onselection: selectionActive,
               
     /*   style: {
            A1:'background-color: orange;',
            B2:'background-color: orange;',
        },*/
        updateTable:function(instance, cell, col, row, val, label, cellName) {
        	// Odd row colours
            if (row % 2) {
            	if (cell.style.backgroundColor != 'orange' && cell.style.backgroundColor != 'green' ){
                cell.style.backgroundColor = '#edf3ff';
            	}
             }
        	
        	if (col < 7 || col > 9){
        		cell.style.color = '#000000';
        	}
        } 
           
});


document.getElementById('download').onclick = function () {
    mySpreadsheet.download();
}

  
$('#preview').on('click', function (){
	
	if (currowdat == undefined)
		{
		alert('Please select a row for Preview');
		}
	else
		{
		// $('#log').append('Current Row Data ' + currowdat + '<br>');
		 url = 'http://localhost:8080/Monroney/Image.html?currowdesc=' + encodeURIComponent(currowdesc) + 
		                                                 '&currowbrnd='+ encodeURIComponent(currowbrnd) +
		                                                 '&currowdesc2='+ encodeURIComponent(currowdesc2) +
		                                                 '&currowfont='+ encodeURIComponent(currowfont) +
		                                                 '&currowspcl='+ encodeURIComponent(currowspcl) +
		                                                 '&currowfrmt='+ encodeURIComponent(currowfrmt) +
		                                                 '&currowsris='+ encodeURIComponent(currowsris);
		 //document.location.href = url;
		 window.open(url, '_blank');
		}
});

$(document).ready(function(evt) {
     
    $('#save').click(function(evt) {
    	evt.preventDefault();
    	if($('#data1').val().length > 1)
    		{
		        $.ajax({
		        	  url: "SaveCSV",
		        	  type: "post",
		        	  data: { data11: $('#data1').val()},        	  
		        	  success: function(){
		        	      mySpreadsheet.refresh();
		        	      alert("Save Successfull");
		        	      $('#data1').text("");
		        	  },
		        	  error:function(){
		        	      alert("there is error while Saving");
		        	  }   
		        	}); 
    		}
    	else
    		{
    		alert("Nothing Changed To Save");
    		}
    });
});


var imgsrc = [];
var doc = new jsPDF('l','pt','B3');

document.getElementById('bulkpdf').onclick = function () {
	
	cboxarry.forEach(function cnvscreation(value, index, array){
		createcanvs(value);
		var crow = 'F' + value.substring(1,value.length);
		var brnd = document.getElementById('table').jexcel.getValue(crow);
      
		if ( brnd == 'A08'){
			imgsrc.push('images/JEEPB.jpg');
         }
		
        if ( brnd == 'A11'){
        	imgsrc.push('images/CHRYSLERB.jpg');
        }
		
        if ( brnd == 'A14'){
        	imgsrc.push('images/RAMB.jpg');
        }
        
        if ( brnd == 'A15'){
        	imgsrc.push('images/DODGEB.jpg');
        }
        
        if ( brnd == 'A16'){
        	imgsrc.push('images/FIATB.jpg');
        }
        
        if ( brnd == 'A18'){
        	imgsrc.push('images/ALFAB.jpg');
         }
	});

	cboxarry.forEach(function imgadd(value, index, array){
		var img = new Image();
		img.src = imgsrc[index];
        img.onload = function() {
         	var canvs = document.getElementById(value);
         	var ctx = canvs.getContext('2d');
           	ctx.translate(100, 100);
            ctx.drawImage(img, -100, -110, 1700, 1100);
            addpdf(value, index);
         }
       
	});
    
	setTimeout(savepdf,2000);
	
}

function createcanvs(value)
{
	var canvas = document.createElement('canvas');
	var body = document.getElementsByTagName("body")[0];
	canvas.id     = value;
	canvas.width  = 1700;
	canvas.height = 1100;
	canvas.style.zIndex   = 8;
	canvas.style.position = "absolute";
	canvas.style.border   = "1px solid";
	canvas.style.left  = '10px';
	canvas.style.top = '1000px';
	canvas.style.display="none";
	body.appendChild(canvas);
}

    
function addpdf(value, index){
	var imgData = document.getElementById(value).toDataURL("image/jpeg", 1.0);
	if (index > 0){ doc.addPage();}
    doc.addImage(imgData, 'JPEG', 0, 0);
    doc.text(currowdesc, 180, 90);
 //   alert(currowdesc);
}

function savepdf(){
	  doc.save('Bulk-file.pdf');
//	  var arrlen = cboxarry.length;
//	  for(var i = 0; i < arrlen; i++ ){
	  cboxarry.forEach(function imgadd(value, index, array){
		//		 const pos = cboxarry.indexOf(value);
		//		 alert(value + " " + pos);
		//         var a = cboxarry.length;
		//         a = a - 1;
				 mySpreadsheet.setStyle(value, 'background-color', 'green');
//				 mySpreadsheet.setValue(cboxarry[a], 0);
  //               console.log(cboxarry);
			 });
//	  }
}


var currdata1;	
var currowdat;
var currowdesc;
var currowbrnd;
var currowdesc2;
var currowfont;
var currowspcl;
var currowfrmt;
var currowsris;
var currowsale;
var currowmrkt;
var currowbmdl;
var currowsequ;
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
      currowsale = document.getElementById('table').jexcel.getValue('E'+z);
      currowmrkt = document.getElementById('table').jexcel.getValue('B'+z);
      currowbmdl = document.getElementById('table').jexcel.getValue('C'+z);
      currowsequ = document.getElementById('table').jexcel.getValue('D'+z);
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
//          console.log(cboxarry);
      }
      if(value == false){
    	  const index = cboxarry.indexOf(cellName);
    	  if (index > -1) {
    		  cboxarry.splice(index, 1);
    	  }
 //         mySpreadsheet.setStyle(cellName, 'background-color', 'green');
//	      console.log(cboxarry);
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
		 url = '/Monroney/Image.html?currowdesc=' + encodeURIComponent(currowdesc) + 
		                                                 '&currowbrnd='+ encodeURIComponent(currowbrnd) +
		                                                 '&currowdesc2='+ encodeURIComponent(currowdesc2) +
		                                                 '&currowfont='+ encodeURIComponent(currowfont) +
		                                                 '&currowspcl='+ encodeURIComponent(currowspcl) +
		                                                 '&currowfrmt='+ encodeURIComponent(currowfrmt) +
		                                                 '&currowsris='+ encodeURIComponent(currowsris) +
		                                                 '&currowsale='+ encodeURIComponent(currowsale) +
		                                                 '&currowmrkt='+ encodeURIComponent(currowmrkt) +
		                                                 '&currowbmdl='+ encodeURIComponent(currowbmdl) +
		                                                 '&currowsequ='+ encodeURIComponent(currowsequ);
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
var collator = new Intl.Collator(undefined, {numeric: false, sensitivity: 'base'});

document.getElementById('bulkpdf').onclick = function () {
    document.getElementById("loader").style.display = "initial";
	doc.setProperties({
		  title: 'Monroney Report',
		  author: 'Durgaprasad Chavali',
		  creator: 'FCA Shipping Application'
		  });
	if(cboxarry.length > 0){
			cboxarry.sort(collator.compare).forEach(function cnvscreation(value, index, array){
				createcanvs(value);
				var crow = 'F' + value.substring(1,value.length);
				var brnd = document.getElementById('table').jexcel.getValue(crow);
		      
				if ( brnd == 'A08'){
					imgsrc.push('images/JEEPB.jpeg');
		         }
				
		        if ( brnd == 'A11'){
		        	imgsrc.push('images/CHRYSLERB.jpeg');
		        }
				
		        if ( brnd == 'A14'){
		        	imgsrc.push('images/RAMB.jpeg');
		        }
		        
		        if ( brnd == 'A15'){
		        	imgsrc.push('images/DODGEB.jpeg');
		        }
		        
		        if ( brnd == 'A16'){
		        	imgsrc.push('images/FIATB.jpeg');
		        }
		        
		        if ( brnd == 'A18'){
		        	imgsrc.push('images/ALFAB.jpeg');
		         }
			});
			cboxarry.sort(collator.compare).forEach(function imgadd(value, index, array){
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
	}
	else
	{
		alert('Please Select a Row');
		}
	
//	setTimeout(savepdf,2000);
	
}

var a = 1000;
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
	canvas.style.top = a + 'px';
	canvas.style.display="none";
	body.appendChild(canvas);
	a = a + 1000;
}

    
function addpdf(value, index){
	var imgData = document.getElementById(value).toDataURL("image/jpeg", 1.0);
	var crow    = 'F' + value.substring(1,value.length);
	var cdesc1  = 'I' + value.substring(1,value.length);
	var cdesc2  = 'L' + value.substring(1,value.length);
	var seri    = 'A' + value.substring(1,value.length);
	var fnt     = 'H' + value.substring(1,value.length);
	var sls     = 'E' + value.substring(1,value.length);
	var seris = document.getElementById('table').jexcel.getValue(seri);
	var brnd  = document.getElementById('table').jexcel.getValue(crow);
	var desc1 = document.getElementById('table').jexcel.getValue(cdesc1);
	var desc2 = document.getElementById('table').jexcel.getValue(cdesc2);
	var font  = document.getElementById('table').jexcel.getValue(fnt);
	var slscd = document.getElementById('table').jexcel.getValue(sls);
	var desc, serisn;
	var thpt, thpl, tmpt, tmpl, tspl, tspt;
	if (index == 0){ doc.addPage();}
	if (index > 0){ doc.addPage();}
	doc.addImage(imgData, 'JPEG', 0, 0);
    doc.text('page ' + doc.getNumberOfPages(),650,990);

    if (desc2 > ' '){
    	desc = desc1 + ' ' + desc2;
    	if (brnd == 'A11') {desc = desc1 + '\n' + desc2;}
    }
    else {
    	desc = desc1;
    }
    
    if(seris == 'H'){
    	serisn = '2017';
    }
    if(seris == 'J'){
    	serisn = '2018';
    }
    if(seris == 'K'){
    	serisn = '2019';
    }
    if(seris == 'L'){
    	serisn = '2020';
    }
    if(seris == 'M'){
    	serisn = '2021';
    }
    if(seris == 'N'){
    	serisn = '2022';
    }
    if(seris == 'P'){
    	serisn = '2023';
    }
    if(seris == 'R'){
    	serisn = '2024';
    }
    if(seris == 'S'){
    	serisn = '2025';
    }
    if(seris == 'T'){
    	serisn = '2026';
    }
    if(seris == 'V'){
    	serisn = '2027';
    }
    if(seris == 'W'){
    	serisn = '2028';
    }
    if(seris == 'X'){
    	serisn = '2029';
    }
    if(seris == 'Y'){
    	serisn = '2030';
    }
    if(seris == '1'){
    	serisn = '2031';
    }
    if(seris == '2'){
    	serisn = '2032';
    }
    if(seris == '3'){
    	serisn = '2033';
    }
    if(seris == '4'){
    	serisn = '2034';
    }
    if(seris == '5'){
    	serisn = '2035';
    }
    if(seris == '6'){
    	serisn = '2036';
    }
    if(seris == '7'){
    	serisn = '2037';
    }
    if(seris == '8'){
    	serisn = '2038';
    }
    if(seris == '9'){
    	serisn = '2039';
    }
    
    if (brnd == 'A08'){
    	thpl = 170;
    	thpt = 75;
    	tmpl = 170;
    	tmpt = 40;
    	tspl = 34;
    	tspt = 490;
    	doc.setFont('helvetica');
	    doc.setFontStyle('bold');
	    doc.setFontSize(font.substring(1,3));
	    doc.text(desc, thpl, thpt);
	    doc.setFontSize(22);
	    doc.text(serisn + ' Model Year', tmpl, tmpt);
	    doc.setFontSize(11);
	    if (slscd > ' '){
	    doc.text(slscd,tspl,tspt);
	    doc.setFillColor(255,255,0);
	    doc.rect(314, 127, 45, 25, 'F');
	    doc.setFontSize(20);
	    tspl = 317;
    	tspt = 145;
    	doc.text(slscd,tspl,tspt);
	    }
    }
    
    if (brnd == 'A11'){
    	thpl = 335;
    	thpt = 70;
    	tmpl = 315;
    	tmpt = 55;
    	tspl = 330;
    	tspt = 355;
    	doc.setFont('helvetica');
	    doc.setFontStyle('bold');
	    doc.setFontSize(font.substring(1,3));
	    doc.text(desc, thpl, thpt);
	    doc.setFontSize(18);
	    doc.text(serisn.substring(0,1), tmpl, tmpt);
	    doc.text(serisn.substring(1,2), tmpl, tmpt+15);
	    doc.text(serisn.substring(2,3), tmpl, tmpt+30);
	    doc.text(serisn.substring(3,4), tmpl, tmpt+45);
	    doc.setFontSize(10);
	    if (slscd > ' '){
		    doc.text(slscd,tspl,tspt);
		    doc.setFillColor(255,255,0);
		    doc.rect(314, 127, 45, 25, 'F');
		    doc.setFontSize(20);
		    tspl = 317;
	    	tspt = 145;
		    doc.text(slscd,tspl,tspt);
		    }
    }
    
    if (brnd == 'A14'){
    	thpl = 130;
    	thpt = 70;
    	tmpl = 130;
    	tmpt = 45;
    	tspl = 30;
    	tspt = 668;
    	doc.setFont('helvetica');
	    doc.setFontStyle('bold');
	    doc.setFontSize(font.substring(1,3));
	    doc.text(desc, thpl, thpt);
	    doc.text(serisn + ' Model Year', tmpl, tmpt);
	    doc.setFontSize(8);
	    if (slscd > ' '){
		    doc.text(slscd,tspl,tspt);
		    doc.setFillColor(255,255,0);
		    doc.rect(314, 127, 45, 25, 'F');
		    doc.setFontSize(20);
		    tspl = 317;
	    	tspt = 145;
	    	doc.text(slscd,tspl,tspt);
		    }
    }
    
    if (brnd == 'A15'){
    	thpl = 85;
    	thpt = 95;
    	tmpl = 65;
    	tmpt = 48;
    	tspl = 330;
    	tspt = 259;
    	doc.setFont('helvetica');
	    doc.setFontStyle('Bold');
	    doc.setFontSize(font.substring(1,3));
	    desc = decodeURI(desc);
	    doc.text(desc, thpl, thpt);
	    doc.setFontSize(18);
	    doc.text(serisn.substring(0,1), tmpl, tmpt);
	    doc.text(serisn.substring(1,2), tmpl, tmpt+15);
	    doc.text(serisn.substring(2,3), tmpl, tmpt+30);
	    doc.text(serisn.substring(3,4), tmpl, tmpt+45);
	    doc.setFontSize(9);
	    if (slscd > ' '){
		    doc.text(slscd,tspl,tspt);
		    doc.setFillColor(255,255,0);
		    doc.rect(314, 127, 45, 25, 'F');
		    doc.setFontSize(20);
		    tspl = 317;
	    	tspt = 145;
	    	doc.text(slscd,tspl,tspt);
		    }
    }
    
    if (brnd == 'A16'){
    	thpl = 155;
    	thpt = 70;
    	tmpl = 155;
    	tmpt = 105;
    	tspl = 330;
    	tspt = 398;
    	doc.setFont('helvetica');
	    doc.setFontStyle('bold');
	    doc.setFontSize(font.substring(1,3));
	    doc.text(desc, thpl, thpt);
	    doc.setFontSize(20);
 	    doc.text(serisn + ' Model Year', tmpl, tmpt);
	    doc.setFontSize(9);
	    if (slscd > ' '){
		    doc.text(slscd,tspl,tspt);
		    doc.setFillColor(255,255,0);
		    doc.rect(314, 127, 45, 25, 'F');
		    doc.setFontSize(20);
		    tspl = 317;
	    	tspt = 145;
	    	doc.text(slscd,tspl,tspt);
		    }
    }
    
    if (brnd == 'A18'){
    	thpl = 155;
    	thpt = 70;
    	tmpl = 155;
    	tmpt = 105;
    	tspl = 330;
    	tspt = 272;
    	doc.setFont('helvetica');
	    doc.setFontStyle('bold');
	    doc.setFontSize(font.substring(1,3));
	    doc.text(desc, thpl, thpt);
	    doc.setFontSize(20);
	    doc.text(serisn + ' Model Year', tmpl, tmpt);
	    doc.setFontSize(9);
	    if (slscd > ' '){
		    doc.text(slscd,tspl,tspt);
		    doc.setFillColor(255,255,0);
		    doc.rect(314, 127, 45, 25, 'F');
		    doc.setFontSize(20);
		    tspl = 317;
	    	tspt = 145;
	    	doc.text(slscd,tspl,tspt);
		    }
    }
    console.log('added ' + value);
    $("#" + value + "").remove();
    if (doc.getNumberOfPages() > cboxarry.length){
    	document.getElementById("loader").style.display = "none";
        document.getElementById("table").style.display = "block";
        savepdf();
//  	alert(doc.getNumberOfPages() + ' ' + cboxarry.length);
    	}
}

function savepdf(){
	  doc.save('Bulk-file.pdf');
	  cboxarry.forEach(function imgadd(value, index, array){
	   	 mySpreadsheet.setStyle(value, 'background-color', 'green');
	  });
	  var arrlen = cboxarry.length;
	  var imglen = imgsrc.length;
	  for(var i = 0; i < arrlen; i++ ){
			 mySpreadsheet.setValue(cboxarry[0], 0);
		  }
	  imgsrc.splice(0, imglen); 
	  doc = new jsPDF('l','pt','B3');
}


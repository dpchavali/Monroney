	  var brnd, desc, desc2, font, spcl, frmt, seris, sale, fdesc, mrkt, bmdl, sequ;
	  function startup() {
            	  var url = document.location.href,params, data = {}, tmp;
            	  params = url.split('?')[1].split('&');
              for (var i = 0, l = params.length; i < l; i++) {
            	   var j = i + 1;
            	   tmp = params[i].split('=');
                   data[tmp[0]] = tmp[1];
              }
              brnd = data.currowbrnd;
              desc = decodeURI(data.currowdesc);
              desc2 = decodeURI(data.currowdesc2);
              font = data.currowfont;
              spcl = data.currowspcl;
              frmt = data.currowfrmt;
              seris = data.currowsris;
              sale = data.currowsale;
              mrkt = data.currowmrkt;
              bmdl = data.currowbmdl;
              sequ = data.currowsequ;
              var th = document.getElementById('head');
              var tm = document.getElementById('mody');
              var tmd = document.getElementById('txtmodl');
              var tsd = document.getElementById('txtsls');
              var ts = document.getElementById('sales');
              if(seris == 'H'){
            	  tm.innerHTML = '2017';
              }
              if(seris == 'J'){
            	  tm.innerHTML = '2018';
              }
              if(seris == 'K'){
            	  tm.innerHTML = '2019';
              }
              if(seris == 'L'){
            	  tm.innerHTML = '2020';
              }
              if(seris == 'M'){
            	  tm.innerHTML = '2021';
              }
              if(seris == 'N'){
            	  tm.innerHTML = '2022';
              }
              if(seris == 'P'){
            	  tm.innerHTML = '2023';
              }
              if(seris == 'R'){
            	  tm.innerHTML = '2024';
              }
              if(seris == 'S'){
            	  tm.innerHTML = '2025';
              }
              if(seris == 'T'){
            	  tm.innerHTML = '2026';
              }
              if(seris == 'V'){
            	  tm.innerHTML = '2027';
              }
              if(seris == 'W'){
            	  tm.innerHTML = '2028';
              }
              if(seris == 'X'){
            	  tm.innerHTML = '2029';
              }
              if(seris == 'Y'){
            	  tm.innerHTML = '2030';
              }
              if(seris == '1'){
            	  tm.innerHTML = '2031';
              }
              if(seris == '2'){
            	  tm.innerHTML = '2032';
              }
              if(seris == '3'){
            	  tm.innerHTML = '2033';
              }
              if(seris == '4'){
            	  tm.innerHTML = '2034';
              }
              if(seris == '5'){
            	  tm.innerHTML = '2035';
              }
              if(seris == '6'){
            	  tm.innerHTML = '2036';
              }
              if(seris == '7'){
            	  tm.innerHTML = '2037';
              }
              if(seris == '8'){
            	  tm.innerHTML = '2038';
              }
              if(seris == '9'){
            	  tm.innerHTML = '2039';
              }
              
              if(spcl == '90A'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,19);
            	  desc2 = fdesc.substring(19,47);
              }
              
              if(spcl == '90B'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,23);
            	  desc2 = fdesc.substring(24,46);
              }
              
              if(spcl == '90C'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,15);
            	  desc2 = fdesc.substring(16,45);
              }
              
              if(spcl == '90D'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,13);
            	  desc2 = fdesc.substring(14,45);
              }
              
              if(spcl == '90E'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,26);
            	  desc2 = fdesc.substring(27,45);
              }
              
              if(spcl == '90F'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,25);
            	  desc2 = fdesc.substring(26,45);
              }
              
              if(spcl == '90G'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,28);
            	  desc2 = fdesc.substring(29,45);
              }
              
              if(spcl == '90H'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,32);
            	  desc2 = fdesc.substring(32,45);
              }
              
              if(spcl == '90I'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,25);
            	  desc2 = fdesc.substring(25,46);
              }
              
              if(spcl == '90K'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,22);
            	  desc2 = fdesc.substring(23,43);
              }
              
              if(spcl == '90L'){
            	  fdesc = desc+desc2;
            	  desc  = fdesc.substring(0,23);
            	  desc2 = fdesc.substring(24,43);
              }
              
              if (frmt == '2'){
            	  th.innerHTML = unescape(decodeURI(desc + '\n' + desc2));
              }
              else {
            	  th.innerHTML = unescape(desc);
              }
              th.style["font-size"] = "29px";
                var td = document.getElementById('txtdiv');
                var canvas = document.getElementById('canvas');
                var ctx = canvas.getContext('2d');
                var img = new Image();
                var imgsrc;
                if ( brnd == 'A08'){
                	imgsrc = 'images/JEEPB.jpeg';
                	td.style.left = '230px';
                	td.style.top = '120px';
                	th.style.width = '55%';
                	th.style["line-height"] = "15px";
                	th.style["font-family"] = "Arial Black";
                	th.style["font-size"] = font.substring(1,3) +"px";
                	tmd.style.left = '230px';
                	tmd.style.right = '0px';
                	tmd.style.top = '95px';
                	tm.style.width = '19%';
                	tm.style["line-height"] = "10px";
                	tm.style["font-family"] = "Arial Black";
                	tm.style["font-size"] = "22px";
                 	tm.innerHTML =  tm.innerHTML + " Model Year";
                	tsd.style.left = '428px';
                	tsd.style.top = '225px';
                	ts.style['line-height'] = '10px';
                	ts.style.width = '23%';
                	ts.style['font-size'] = '20px';
               	  //  ts.style['text-align'] = 'bottom';
                	ts.style['min-height'] = '20px';
                	ts.style['background-color'] = 'yellow';
                	    if (sale > ' '){
                	    ts.innerHTML = sale;
                	    }
                	    else{
               	        ts.style['display']='none';
                	    } 
                 }
                
                if ( brnd == 'A11'){
                	imgsrc = 'images/CHRYSLERB.jpeg';
                	td.style.left = '470px';
                	td.style.top = '111px';
                	th.style.width = '43%';
                	th.style["font-family"] = "Arial Black";
                	th.style["font-size"] = font.substring(1,3) +"px";
                	tmd.style.left = '425px';
                	tmd.style.top = '111px';
                	tm.style.width = '10%';
                 	tm.style.height = '80px';
                	tm.style["line-height"] = "17px";
                	tm.style["writing-mode"] = "vertical-rl";
                	tm.style["text-orientation"] = "upright";
                	tm.style["font-size"] = "21px";
   /*            	    tsd.style.left = '441px';
               	    tsd.style.top = '512px';
               	    ts.style['line-height'] = '0px';
               	    ts.style.width = '22%';
               	    ts.style['font-size'] = '12px';
               	    ts.style['text-align'] = 'right';
               	    ts.style['min-height'] = '15px'; */
                	tsd.style.left = '428px';
                	tsd.style.top = '225px';
                	ts.style['line-height'] = '10px';
                	ts.style.width = '20%';
                	ts.style['font-size'] = '20px';
                	ts.style['min-height'] = '20px';
                	ts.style['background-color'] = 'yellow';
               	    if (sale > ' '){
               	    ts.innerHTML = sale;
               	    }
               	    else{
               	    ts.style['display']='none';
               	    }
                }
                
                if ( brnd == 'A14'){
                	imgsrc = 'images/RAMB.jpeg';
                	td.style.left = '174px';
                	td.style.top = '125px';
                	th.style.width = '56%';
                	th.style["line-height"] = "20px";
                	th.style["font-family"] = "Arial Black";
                	th.style["font-size"] = font.substring(1,3) +"px";
                	tmd.style.left = '174px';
                	tmd.style.top = '105px';
                	tmd.style.right = '0px';
                	tm.style.width = '18%';
                	tm.style["line-height"] = "10px";
                	tm.style["font-family"] = "Arial Black";
          //      	tm.style["font-size"] = font.substring(1,3) +"px";
	             	tm.innerHTML =  tm.innerHTML + " Model Year";
	    /*         	tsd.style.left = '43px';
                	tsd.style.top = '928px';
                	ts.style['line-height'] = '0px';
                	ts.style.width = '22%';
                	ts.style['font-size'] = '11px';
               	    ts.style['text-align'] = 'right';
                	ts.style['min-height'] = '11px';*/
	            	tsd.style.left = '428px';
                	tsd.style.top = '220px';
                	ts.style['line-height'] = '8px';
                	ts.style.width = '23%';
                	ts.style['font-size'] = '20px';
                	ts.style['background-color'] = 'red';
                	    if (sale > ' '){
                	    ts.innerHTML = sale;
                	    }
                	    else{
               	        ts.style['display']='none';
                	    }
                }
                
                if ( brnd == 'A15'){
                	imgsrc = 'images/DODGEB.jpeg';
                	td.style.left = '130px';
                	td.style.top = '125px';
                	th.style.width = '50%';
                	th.style["line-height"] = "30px";
                	th.style["font-family"] = "Arial Black";
                	th.style["font-size"] = font.substring(1,3) +"px";
                	tmd.style.left = '95px';
                	tmd.style.top = '111px';
                	tm.style.width = '10%';
                	tm.style.height = '80px';
                	tm.style["line-height"] = "17px";
                	tm.style["writing-mode"] = "vertical-rl";
                	tm.style["text-orientation"] = "upright";
                	tm.style["font-size"] = "21px";
       /*         	tsd.style.left = '441px';
               	    tsd.style.top = '385px';
               	    ts.style['line-height'] = '0px';
               	    ts.style.width = '22%';
               	    ts.style['font-size'] = '11px';
               	    ts.style['text-align'] = 'right';
               	    ts.style['min-height'] = '15px'; */
                	tsd.style.left = '428px';
                	tsd.style.top = '225px';
                	ts.style['line-height'] = '10px';
                	ts.style.width = '22%';
                	ts.style['font-size'] = '20px';
                	ts.style['background-color'] = 'yellow';
               	    if (sale > ' '){
               	    ts.innerHTML = sale;
               	    }
               	    else{
               	    ts.style['display']='none';
               	    }
                }
                
                if ( brnd == 'A16'){
                	imgsrc = 'images/FIATB.jpeg';
                   	td.style.left = '200px';
                	td.style.top = '119px';
                	th.style["font-family"] = "Arial Black";
                	th.style["font-size"] = font.substring(1,3) +"px";
                	th.style.width = '56%';
                	th.style["line-height"] = "15px";
                	tmd.style.right = '0px';
                	tmd.style.left = '200px';
                	tmd.style.top = '165px';
                	tm.style.width = '18%';
                	tm.style["line-height"] = "10px";
               	    tm.innerHTML =  tm.innerHTML + " Model Year";
      /*       	    tsd.style.left = '441px';
               	    tsd.style.top = '571px';
               	    ts.style['line-height'] = '0px';
               	    ts.style.width = '22%';
               	    ts.style['font-size'] = '12px';
               	    ts.style['text-align'] = 'right';
               	    ts.style['min-height'] = '15px'; */
	               	tsd.style.left = '428px';
	             	tsd.style.top = '225px';
	             	ts.style['line-height'] = '10px';
	             	ts.style.width = '22%';
	             	ts.style['font-size'] = '20px';
	             	ts.style['background-color'] = 'yellow';
               	    if (sale > ' '){
               	    ts.innerHTML = sale;
               	    }
               	    else{
               	    ts.style['display']='none';
               	    }
                }
                
                if ( brnd == 'A18'){
                	imgsrc = 'images/ALFAB.jpeg';
                	td.style.left = '200px';
                	td.style.top = '121px';
                	th.style.width = '49%';
                	th.style["line-height"] = "15px";
                	th.style["font-family"] = "'Jura', sans-serif";
                	th.style["font-weight"] = "700";
                	th.style["font-size"] = font.substring(1,3) +"px";
                	tmd.style.right = '0px';
                	tmd.style.left = '200px';
                	tmd.style.top = '165px';
                	tm.style.width = '18%';
                	tm.style["line-height"] = "10px";
                	tm.style["font-family"] = "'Jura', sans-serif";
                	tm.style["font-weight"] = "700";
               	    tm.innerHTML =  tm.innerHTML + " Model Year";
          /*    	    tsd.style.left = '441px';
               	    tsd.style.top = '404px';
               	    ts.style['line-height'] = '0px';
               	    ts.style.width = '22%';
               	    ts.style['font-size'] = '11px';
               	    ts.style['text-align'] = 'right';
               	    ts.style['min-height'] = '15px'; */
               	    tsd.style.left = '428px';
	             	tsd.style.top = '225px';
	             	ts.style['line-height'] = '10px';
	             	ts.style.width = '22%';
	             	ts.style['font-size'] = '20px';
	             	ts.style['background-color'] = 'yellow';
               	    if (sale > ' '){
               	    ts.innerHTML = sale;
               	    }
               	    else{
               	    ts.style['display']='none';
               	    }
                }
                
                 img.src = imgsrc;
                 img.onload = function() {
                	ctx.translate(100, 100);
                    ctx.drawImage(img, -100, -110, 1700, 1100);
            	    history.replaceState({}, null, "Monroney/Image.html");
                }
            }

	    //history.replaceState({}, null, "Monroney/Image.html");
    	var doc = new jsPDF('l','pt','B3');
    	$('#pdf').click(function() {
    		    var imgData = document.getElementById('canvas').toDataURL("image/jpeg", 1.0);
    		    var thpt, thpl, tmpt, tmpl, tspt, tspl;
    		    doc.addImage(imgData, 'JPEG', 0, 0);
    		    console.log(doc.getFontList());
    		    if (brnd == 'A08'){
    		    	thpl = 170;
    		    	thpt = 75;
    		    	tmpl = 170;
    		    	tmpt = 45;
    		    	tspl = 34;
    		    	tspt = 490;
    		    	doc.setFont('Helvetica');
        		    doc.setFontStyle("BoldOblique");
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(22);
        		    doc.text(document.getElementById('mody').value, tmpl, tmpt);
        		    doc.setFontSize(11);
        		    doc.text(document.getElementById('sales').value,tspl,tspt);
        		    doc.setFillColor(255,255,0);
        		    doc.rect(314, 127, 45, 25, 'F');
        		    doc.setFontSize(20);
        		    tspl = 317;
    		    	tspt = 145;
    		    	doc.text(document.getElementById('sales').value,tspl,tspt);
    		    }
    		    
    		    if (brnd == 'A11'){
    		    	thpl = 335;
    		    	thpt = 70;
    		    	tmpl = 315;
    		    	tmpt = 55;
    		    	tspl = 330;
    		    	tspt = 355;
    		    	doc.setFont('helvetica');
        		    doc.setFontStyle('Bold');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(18);
        		    doc.text(document.getElementById('mody').value.substring(0,1), tmpl, tmpt);
        		    doc.text(document.getElementById('mody').value.substring(1,2), tmpl, tmpt+15);
        		    doc.text(document.getElementById('mody').value.substring(2,3), tmpl, tmpt+30);
        		    doc.text(document.getElementById('mody').value.substring(3,4), tmpl, tmpt+45);
        		    doc.setFontSize(10);
        		    doc.text(document.getElementById('sales').value,tspl,tspt);
        		    doc.setFillColor(255,255,0);
        		    doc.rect(314, 127, 45, 25, 'F');
        		    doc.setFontSize(20);
        		    tspl = 317;
    		    	tspt = 145;
    		    	doc.text(document.getElementById('sales').value,tspl,tspt);
    		    }
    		    
    		    if (brnd == 'A14'){
    		    	thpl = 130;
    		    	thpt = 70;
    		    	tmpl = 130;
    		    	tmpt = 45;
    		    	tspl = 30;
    		    	tspt = 668;
    		    	doc.setFont('Helvetica');
        		    doc.setFontStyle('BoldOblique');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.text(document.getElementById('mody').value, tmpl, tmpt);
        		    doc.setFontSize(8);
        		    doc.text(document.getElementById('sales').value,tspl,tspt);
        		    doc.setFillColor(255,255,0);
        		    doc.rect(314, 127, 45, 25, 'F');
        		    doc.setFontSize(20);
        		    tspl = 317;
    		    	tspt = 145;
    		    	doc.text(document.getElementById('sales').value,tspl,tspt);
    		    }
    		    
    		    if (brnd == 'A15'){
    		    	thpl = 85;
    		    	thpt = 75;
    		    	tmpl = 68;
    		    	tmpt = 58;
    		    	tspl = 330;
    		    	tspt = 259;
    		    	doc.setFont('helvetica');
        		    doc.setFontStyle('Bold');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(18);
        		    doc.text(document.getElementById('mody').value.substring(0,1), tmpl, tmpt);
        		    doc.text(document.getElementById('mody').value.substring(1,2), tmpl, tmpt+15);
        		    doc.text(document.getElementById('mody').value.substring(2,3), tmpl, tmpt+30);
        		    doc.text(document.getElementById('mody').value.substring(3,4), tmpl, tmpt+45);
        		    doc.setFontSize(9);
        		    doc.text(document.getElementById('sales').value,tspl,tspt);
        		    doc.setFillColor(255,255,0);
        		    doc.rect(314, 127, 45, 25, 'F');
        		    doc.setFontSize(20);
        		    tspl = 317;
    		    	tspt = 145;
    		    	doc.text(document.getElementById('sales').value,tspl,tspt);
    		    }
    		    
    		    if (brnd == 'A16'){
    		    	thpl = 155;
    		    	thpt = 70;
    		    	tmpl = 155;
    		    	tmpt = 105;
    		    	tspl = 330;
    		    	tspt = 398;
    		    	doc.setFont('helvetica');
        		    doc.setFontStyle('Bold');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(20);
        		    doc.text(document.getElementById('mody').value, tmpl, tmpt);
        		    doc.setFontSize(9);
        		    doc.text(document.getElementById('sales').value,tspl,tspt);
        		    doc.setFillColor(255,255,0);
        		    doc.rect(314, 127, 45, 25, 'F');
        		    doc.setFontSize(20);
        		    tspl = 317;
    		    	tspt = 145;
    		    	doc.text(document.getElementById('sales').value,tspl,tspt);
    		    }
    		    
    		    if (brnd == 'A18'){
    		    	thpl = 155;
    		    	thpt = 55;
    		    	tmpl = 155;
    		    	tmpt = 98;
    		    	tspl = 330;
    		    	tspt = 272;
    		    	doc.setFont('helvetica');
        		    doc.setFontStyle('Bold');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(20);
        		    doc.text(document.getElementById('mody').value, tmpl, tmpt);
        		    doc.setFontSize(9);
        		    doc.text(document.getElementById('sales').value,tspl,tspt);
        		    doc.setFillColor(255,255,0);
        		    doc.rect(314, 127, 45, 25, 'F');
        		    doc.setFontSize(20);
        		    tspl = 317;
    		    	tspt = 145;
    		    	doc.text(document.getElementById('sales').value,tspl,tspt);
    		    }
    		    
    		var fn = seris + ' ' + mrkt + ' ' + bmdl + ' ' + sequ + '.pdf';    
    	    doc.save(fn);
    	});
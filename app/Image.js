	  var brnd, desc, desc2, font, spcl, frmt, seris;
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
              var th = document.getElementById('head');
              var tm = document.getElementById('mody');
              var tmd = document.getElementById('txtmodl');
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
              
              if (frmt == '2'){
	              th.innerHTML = decodeURI(desc + ' ' + desc2);
	              if (brnd == 'A11') {
	            	  th.innerHTML = decodeURI(desc + '\n' + desc2);
	              }
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
                	td.style.top = '140px';
                	th.style.width = '47%';
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

                }
                
                if ( brnd == 'A14'){
                	imgsrc = 'images/RAMB.jpeg';
                	td.style.left = '174px';
                	td.style.top = '139px';
                	th.style.width = '56%';
                	th.style["line-height"] = "15px";
                	th.style["font-family"] = "Arial Black";
                	th.style["font-size"] = font.substring(1,3) +"px";
                	tmd.style.left = '174px';
                	tmd.style.top = '105px';
                	tmd.style.right = '0px';
                	tm.style.width = '18%';
                	tm.style["line-height"] = "10px";
                	tm.style["font-family"] = "Arial Black";
                	tm.style["font-size"] = font.substring(1,3) +"px";
	             	tm.innerHTML =  tm.innerHTML + " Model Year";
                }
                
                if ( brnd == 'A15'){
                	imgsrc = 'images/DODGEB.jpeg';
                	td.style.left = '130px';
                	td.style.top = '140px';
                	th.style.width = '50%';
                	th.style["line-height"] = "15px";
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

                }
                
                if ( brnd == 'A16'){
                	imgsrc = 'images/FIATB.jpeg';
                   	td.style.left = '200px';
                	td.style.top = '119px';
                	th.style["font-family"] = "Arial Black";
                	th.style["font-size"] = font.substring(1,3) +"px";
                	th.style.width = '48%';
                	th.style["line-height"] = "15px";
                	tmd.style.right = '0px';
                	tmd.style.left = '200px';
                	tmd.style.top = '165px';
                	tm.style.width = '18%';
                	tm.style["line-height"] = "10px";
               	    tm.innerHTML =  tm.innerHTML + " Model Year";
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
                }
                
                 img.src = imgsrc;
                 img.onload = function() {
                	ctx.translate(100, 100);
                    ctx.drawImage(img, -100, -110, 1700, 1100);
                }
            }

	    //history.replaceState({}, null, "Monroney/Image.html");
    	var doc = new jsPDF('l','pt','B3');
    	$('#pdf').click(function() {
    		    var imgData = document.getElementById('canvas').toDataURL("image/jpeg", 1.0);
    		    var thpt, thpl, tmpt, tmpl;
    		    doc.addImage(imgData, 'JPEG', 0, 0);
    		    console.log(doc.getFontList());
    		    if (brnd == 'A08'){
    		    	thpl = 170;
    		    	thpt = 90;
    		    	tmpl = 170;
    		    	tmpt = 45;
    		    	doc.setFont('helvetica');
        		    doc.setFontStyle('Bold');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(22);
        		    doc.text(document.getElementById('mody').value, tmpl, tmpt);
    		    }
    		    
    		    if (brnd == 'A11'){
    		    	thpl = 335;
    		    	thpt = 70;
    		    	tmpl = 315;
    		    	tmpt = 55;
    		    	doc.setFont('helvetica');
        		    doc.setFontStyle('Bold');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(18);
        		    doc.text(document.getElementById('mody').value.substring(0,1), tmpl, tmpt);
        		    doc.text(document.getElementById('mody').value.substring(1,2), tmpl, tmpt+15);
        		    doc.text(document.getElementById('mody').value.substring(2,3), tmpl, tmpt+30);
        		    doc.text(document.getElementById('mody').value.substring(3,4), tmpl, tmpt+45);
    		    }
    		    
    		    if (brnd == 'A14'){
    		    	thpl = 130;
    		    	thpt = 90;
    		    	tmpl = 130;
    		    	tmpt = 60;
    		    	doc.setFont('Helvetica');
        		    doc.setFontStyle('BoldOblique');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.text(document.getElementById('mody').value, tmpl, tmpt);
    		    }
    		    
    		    if (brnd == 'A15'){
    		    	thpl = 85;
    		    	thpt = 95;
    		    	tmpl = 68;
    		    	tmpt = 58;
    		    	doc.setFont('helvetica');
        		    doc.setFontStyle('Bold');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(18);
        		    doc.text(document.getElementById('mody').value.substring(0,1), tmpl, tmpt);
        		    doc.text(document.getElementById('mody').value.substring(1,2), tmpl, tmpt+15);
        		    doc.text(document.getElementById('mody').value.substring(2,3), tmpl, tmpt+30);
        		    doc.text(document.getElementById('mody').value.substring(3,4), tmpl, tmpt+45);
    		    }
    		    
    		    if (brnd == 'A16'){
    		    	thpl = 155;
    		    	thpt = 70;
    		    	tmpl = 155;
    		    	tmpt = 105;
    		    	doc.setFont('helvetica');
        		    doc.setFontStyle('Bold');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(20);
        		    doc.text(document.getElementById('mody').value, tmpl, tmpt);
    		    }
    		    
    		    if (brnd == 'A18'){
    		    	thpl = 155;
    		    	thpt = 70;
    		    	tmpl = 155;
    		    	tmpt = 105;
    		    	doc.setFont('helvetica');
        		    doc.setFontStyle('Bold');
        		    doc.setFontSize(font.substring(1,3));
        		    doc.text(document.getElementById('head').value, thpl, thpt);
        		    doc.setFontSize(20);
        		    doc.text(document.getElementById('mody').value, tmpl, tmpt);
    		    }
    		    
    		    
    	    doc.save('sample-file.pdf');
    	});
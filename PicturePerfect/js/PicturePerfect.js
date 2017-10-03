$(document).on("ready", function(){
	//App Functionality
	var body = $$("body")[0];
	var MENU_ITEMS =$$(".film_frame");
	var CURRENT_CONTENT = 0;
	var RESUME, WEBINDEX;
	var SHUTTER = new Audio("css/camera-shutter-click-01.mp3");
	var LOAD_TOTAL = 0;
	var LOAD_CTR = 0;
	var LOAD_TEXT = "0%";

	var loadModule = new LoadModule();
	loadModule.start();
	
	//Menu Funcs
	(function(){
		MENU_ITEMS.each('onClick', function() { 
				SHUTTER.load();
				if( CURRENT_CONTENT ) CURRENT_CONTENT.setStyle("display","none");
				CURRENT_CONTENT = $( this.get("target") );
				CURRENT_CONTENT.setStyle("display","block");
				$("MEGAFLASH").setStyle("opacity",1);
				new Fx.Morph('MEGAFLASH').start({ opacity:0 });
				
				body.setStyle("background-image", this.BG_SRC_FULL );
				SHUTTER.play();
			});
		})();

		//Initialize Master Load
		(function(){
			$(document).on("startApp",function(){
					loadModule.stop();
					setTimeout(function(){
						$("PRELOADER").setStyle("display","none");
						$("PRELOADER_TEXT").setStyle("display","none");
						$("REAL_CONTENT").setStyle("display","block");
						
						$$(".film_frame")[0].fire("click");
						populateInfo();
					},1500); // give 1500 for the last animation
			});
		})();

		//Initialize Preloader
			(function(){
				var bsSrcPrefix;
				var width = window.innerWidth

				// Specifiy which image size to load
				// in order to scale the app speed with
				// the screen size
				if( window.innerWidthwidth >= 2000 ){
					bsSrcPrefix = "css/img/full/";
				} else if( width >= 1280 ){
					bsSrcPrefix = "css/img/1280/";
				} else{
					bsSrcPrefix = "css/img/720/";
				}
				
				var loader = new PxLoader();
				
				var filmAry = $$(".film_frame");
				for( var i =0; i < filmAry.length; i++ ){
					var self_temp = filmAry[i];
					var new_url = bsSrcPrefix + self_temp.get("src");
					self_temp.BG_SRC_FULL = "url(" + new_url + ")";
					self_temp.setStyle("background-image", self_temp.BG_SRC_FULL );
					loader.addImage( new_url );
				}
				
				loader.addProgressListener(function(e) { 
					LOAD_CTR++;
					var loadText = parseInt(LOAD_CTR /  filmAry.length *100) + "%";
					loadModule.text = loadText;
				})
				
				loader.addCompletionListener(function(e) { 
					$(document).fire("startApp");

				});
				
				loader.start(); 
			})();
		
			/** Load Data */
			function populateInfo(){
					var RESUME = __resumeData__v1
					/* Load ABOUT Section */
					var ABOUT_DIV = $("ABOUT")
					
					var pElem = new Element("p");
					pElem.set("style","font-size:70%; color:lime;font-weight:bold;");
					pElem.html( "STATUS: "  + RESUME.statusText );
					ABOUT_DIV.html(pElem);
					
					var temp = new Element("div");
					temp.html( RESUME.about.description );
					ABOUT_DIV.append( temp );
					
					var temp = new Element("p");
					var msg = "You can contact me @ <b>";
					temp.html( msg + RESUME.contact.mobile[0] + "</b>");
					ABOUT_DIV.append( temp );
					
					var temp = new Element("p");
					var msg = "Or email me at <b>";
					temp.html( msg + RESUME.contact.email[0] + "</b>" );
					ABOUT_DIV.append( temp );
					
					/** Load Skills **/
					var SKILLS_DIV = $("SKILLS");
					var skills = RESUME.skill.all;
					
					SKILLS_DIV.clean();
					for( var i=0; i<skills.length; i++){
						var skill = skills[i];
						var temp = new Element("span");

						temp.set("class","smaller");
						temp.html( skill.level + " in " + skill.title );
						SKILLS_DIV.append(temp);
					}
				
					
					/** Load Other Samples **/
					var OTHERS_DIV = $("OTHERS");
					var PROJECTS_DIV = $("PROJECTS");
					var samples = RESUME.sample.all;
					
					OTHERS_DIV.clean();
					OTHERS_DIV.html( "<p style='font-size:0.5em'>Click on them!</p><br/>" );
					for(var i=0; i < samples.length; i++){
						var sample = samples[i];
						var temp = new Element("a");
						    temp.html( sample.title );
						    temp.set("href",  sample.href );
						    temp.set("target","_blank");
						    temp.set("title",sample.description);
						
						switch( sample.type ){
							case "website": 
								temp.set("class","smaller");
								PROJECTS_DIV.append(temp);
								break;
							default:
								OTHERS_DIV.append(temp);
						}
					}

					$("RESUME").set("href","../" + RESUME.cv)
					$("RESUME2").set("href","../" + RESUME.cv)

			};
			
});


function LoadModule(){
	this.elem 	= $("PRELOADER_TEXT");
	this.text 	= '0%'
	this.start 	= function(){
		var self = this
		this.interval = setInterval(function(){
			self.elem.setStyle("right","0");
			self.elem.text( self.text );
			new Fx.Morph(self.elem,{duration:1500}).start({ right: "8em" });
		},1750)
	}

	this.stop = function(){
		clearInterval(this.interval)
	}
}
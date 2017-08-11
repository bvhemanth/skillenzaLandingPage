

/*global*/
var height=window.innerHeight;
/*end pf gobal*/

function initialize()
{	
	$('.chatBg').css('height',height+'px');
	var profileData=[];
	profileData.push({title:"Prove your skills by solving challenges and get access to exclusive opportunities", button:"Explore Chanllenges"});
	profileData.push({title:"Network and learn from people who have the same skills as you have", button:"Explore People"});
	profileData.push({title:"Follow communities to be aware about what are people discussing about and the latest challenges going live", button:"Explore Communities"});
	profileData.push({title:"Complete your profile to be more discoverable on skillenza and build your learning based network", button:"See my profile"});
	
	var cards=document.getElementById('cards');
	for(var i=0;i<profileData.length;i++)
	{
		console.log();
		var div=document.createElement('div');
		$(div).addClass('row eachCard mb20');

			var row=document.createElement('div');
			$(row).addClass('row cardTitle mb20');
			$(row).html("&#34;"+profileData[i].title+"&#34;");

			var row2=document.createElement('div');
			$(row2).addClass('row');
			
			var left=document.createElement('div');
			$(left).addClass('col-md-5 col-lg-5 col-sm-5 mb10');	
				var button=document.createElement('button');
				$(button).addClass('btn btnBlue');

				$(button).html(profileData[i].button);
			
			$(left).append(button);	

		$(row2).append(left);
		
		$(div).append(row);
		$(div).append(row2);

		$(cards).append(div);
	}	

}

window.onload=initialize()
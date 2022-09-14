

//
const giffyList = document.getElementById('giffys'); 		
const giffyForm = document.getElementById('giffy-form'); 		
const giffyButton = document.getElementById('giffy-button'); 		
var giffyTag = document.getElementById('giffy-tag'); 		


////////////////  listen for submit
giffyForm.addEventListener('submit', function(e){
e.preventDefault()
let tag= giffyTag.value;
giffyGen(tag);
});


function giffyGen(query){
/////////////////  values for url params, make e-z wordz
const apiKey= 'vzEl5CaRrCqsxr4VrNW4LKitmkTfXLl1';
var offset= Math.floor(Math.random()*4500);   //api returns 50 gifs (max). this adjusts index to make results appear random
var path= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&offset=${offset}`;


////////////////  callback
fetch(path).then(function(resp){
	return resp.json()
}).then(function(json){
	console.log(json.data[0].images);             //test 
	var insertable = '';

	json.data.slice(0,20).forEach(function(obj){				//2nd param in slice controls # of results returned


var giffyURL= obj.images.downsized_medium.url;
	 insertable += `<img src="${giffyURL}">`;

		console.log(obj.images.downsized_medium.url)     //test
	})

	giffyList.innerHTML = insertable;
}).catch(function(err) {
	console.log(err.message)
})
}
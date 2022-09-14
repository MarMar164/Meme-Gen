/////////////////  values for url params, make e-z wordz
const apiKey= 'vzEl5CaRrCqsxr4VrNW4LKitmkTfXLl1';
var tag= 'cats';
var offset= Math.floor(Math.random()*4500);   //api returns 50 gifs (max). this adjusts index to make results appear random
var path= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${tag}&offset=${offset}`;
const giffyList = document.getElementById('giffys'); 		
       



////////////////  callback
fetch(path).then(function(resp){
	return resp.json()
}).then(function(json){
	console.log(json.data[0].images);             //test 
	let insertable = '';

	json.data.slice(0,20).forEach(function(obj){				//2nd param in slice controls # of results returned


let giffyURL= obj.images.downsized_medium.url;
	 insertable += `<img src="${giffyURL}">`;

		console.log(obj.images.downsized_medium.url)     //test
	})

	giffyList.innerHTML = insertable;
}).catch(function(err) {
	console.log(err.message)
})
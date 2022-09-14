/////////////////  values for url params
const apiKey= 'vzEl5CaRrCqsxr4VrNW4LKitmkTfXLl1';
var tag= 'cats';
var offset= Math.floor(Math.random()*4500);   //api returns 50 gifs (max). this adjusts index to make results appear random
var path= `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${tag}&offset=${offset}`;
       
////////////////  make e-z wordz



////////////////  callback
fetch(path).then(function(resp){
	return resp.json()
}).then(function(json){
	console.log(json.data[0].images);
	json.data.forEach(function(obj){
		console.log(obj.images.looping.mp4)
	})
}).catch(function(err) {
	console.log(err.message)
})
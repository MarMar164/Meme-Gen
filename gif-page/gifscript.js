

//
const giffyList = document.getElementById('giffys');
const giffyForm = document.getElementById('giffy-form');
const giffyButton = document.getElementById('giffy-button');
const giffyTag = document.getElementById('giffy-tag');



////////////////  listen for submit
giffyForm.addEventListener('submit', function (e) {
	e.preventDefault()
	let tag = giffyTag.value;
	giffyGen(tag);
});

giffyList.addEventListener('click', function (e) {
	let tag = giffyTag.value;
	// console.log(e.target.src)
	// giffyPop(tag, e.target.src);	
	test(tag, e.target)
	console.log("search test", giffyTag.value);  //test

})


function giffyGen(query) {

	/////////////////  values for url params, make e-z wordz
	const apiKey = 'vzEl5CaRrCqsxr4VrNW4LKitmkTfXLl1';
	var offset = Math.floor(Math.random() * 4500);   //api returns 50 gifs (max). this adjusts index to make results appear random
	var path = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&offset=${offset}`;


	////////////////  callback
	fetch(path).then(function (resp) {
		return resp.json()
	}).then(function (json) {

		var insertable = '';

		json.data.slice(0, 20).forEach(function (obj) {				//2nd param in slice controls # of results returned


			var giffyURL = obj.images.downsized_medium.url;
			insertable += `<img src="${giffyURL}">`;

			console.log(obj.images.downsized_medium.url)     //test
		})

		giffyList.innerHTML = insertable;


	}).catch(function (err) {
		console.log(err.message)
	})
}

///////////////////////////// repeat function for individual img elements


function test(query, element) {
	console.log(element)
	// let srcReplace = element.src
	console.log(srcReplace)
console.log(query)
	const apiKey = 'vzEl5CaRrCqsxr4VrNW4LKitmkTfXLl1';
	// var offset = Math.floor(Math.random() * 4500);   //api returns 50 gifs (max). this adjusts index to make results appear random
	var path = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`;


	////////////////  callback
	fetch(path).then(function (resp) {
		return resp.json()
	}).then(function (json) {
		console.log('test for new url', json.data.images.downsized_medium.url);           //test 
		element.src = json.data.images.downsized_medium.url
		console.log(element)

	}).catch(function (err) {
		console.log(err.message)
	})

	
}


function giffyPop(query, element) {
	console.log(element);
	/////////////////  values for url params, make e-z wordz
	const apiKey = 'vzEl5CaRrCqsxr4VrNW4LKitmkTfXLl1';
	var offset = Math.floor(Math.random() * 4500);   //api returns 50 gifs (max). this adjusts index to make results appear random
	var path = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${query}`;


	////////////////  callback
	fetch(path).then(function (resp) {
		return resp.json()
	}).then(function (json) {
		console.log('test for new url', json.data.images.downsized_medium.url);           //test 
		const newGif = document.createElement('img');
		newGif.after(element);
		console.log('test for element to append to:', element)
		newGif.setAttribute('src', json.data.images.downsized_medium.url);
		console.log('test for element being appended', newGif);

	}).catch(function (err) {
		console.log(err.message)
	})
}

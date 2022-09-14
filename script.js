const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b8b174b96msh600362b3da6d775p1cf2cbjsn8a0026c19487',
		'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
	}
};





fetch('https://ronreiter-meme-generator.p.rapidapi.com/images', options)
	.then(response => response.json())
	.then(memes => {
		console.log(memes)
		let list = document.querySelector("#list")
		
		for (let i = 0; i < 25; i++) {
			
			let li = document.createElement("li")
		li.textContent = memes[i]
		list.appendChild(li)
		}
        list.addEventListener("click",function(response){





        }
		
	})
	.catch(err => console.error(err));


	
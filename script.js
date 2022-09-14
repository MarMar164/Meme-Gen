const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '2b8b174b96msh600362b3da6d775p1cf2cbjsn8a0026c19487',
          'X-RapidAPI-Host': 'ronreiter-meme-generator.p.rapidapi.com'
    }
 };

  let imgsrc;
  let objectURL;

  let imageLookEl = document.querySelector("#image-look")

 fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme?top=Top%20Text&bottom=Bottom%20Text&meme=Condescending-Wonka&font_size=50&font=Impact', options)
  .then(response => response.blob())
   .then(imageBlob => {
        imgsrc = imageBlob;
        const objectURL = URL.createObjectURL(imageBlob)
       console.log(objectURL)

        // image = document.querySelector("#image-look")
      //  image.src = objectURL


       imageLookEl.src = objectURL
      //  document.body.appendChild(image)


  })

 .catch(err => console.error(err));
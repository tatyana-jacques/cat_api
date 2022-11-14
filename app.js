const image = document.getElementById ("kitten")
const btn = document.getElementById("btn")

async function getCat() {
    try {
      const cat = await fetch("https://api.thecatapi.com/v1/images/search")
      const json = await cat.json()
      console.log("I think I saw a kitten!", json)
      const [{url}] = json
      image.src = url
    } 
    catch (erro) {
      console.log("I didn't see a kitten!", erro)
      
    } 
    finally {
      console.log("No more kittens!")
    }
  }
  getCat()

btn.addEventListener ("click", getCat)



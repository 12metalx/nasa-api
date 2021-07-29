
import React from 'react'
import {useState,useRef} from 'react'
const App = () => {
  const [media, setMedia] = useState("{}")
  const searchImage = useRef(document.createElement("input"))
  const search = async (e) => {
    e.preventDefault()
		const urlBase = "https://images-api.nasa.gov/search?q="
      const url = urlBase + searchImage.current.value
      const response = await fetch(url)
      const json = await response.json()
      const items = json.collection.items
      setMedia(items)
      console.log(items);
     
        
        
	};


  return (
    <form onSubmit={search} >
      <input type='text' ref={searchImage}/><button>Enviar</button>
    </form>
  )
}

export default App

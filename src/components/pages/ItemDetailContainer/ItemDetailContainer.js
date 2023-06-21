import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import CardUser from '../../CardUser/CardUser'

const ItemDetailContainer = () => {
  const [char, setChar] = useState([])

let { id } = useParams()

console.log(char)

  useEffect(() =>{
    fetch(`/productos.json/${id}`)
    .then((response) =>{
      if (!response.ok){
        throw new Error("Error");
      }
      return response.json()
    })
    .then((json) => setChar(json.resultado))
    .catch((error) => {
      console.log(error)
    })
  }, [id])

  return (
    <div>
        {
          char.id ? <CardUser char={char}/> : null 
        }
    </div>
  )
}

export default ItemDetailContainer
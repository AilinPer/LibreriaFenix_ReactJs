import React, {useState, useEffect} from 'react'
import "./ItemListContainer.css"
import productos from '../productos.json'

const ItemListContainer = () => {
    const [chars, setChars] = useState([])

    useEffect(() =>{
        fetch({productos})
        .then((Response) => Response.json())
        .then((json) => console.log(json.resultado))
    })


    return (
        <div>
            <h1>LIBROS</h1>
        </div>
    )
}

export default ItemListContainer
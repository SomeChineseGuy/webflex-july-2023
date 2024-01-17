import axios from "axios"
import { useEffect, useState } from "react"


// Export default is ALL front end (client side)
export default function Data(props) {

  useEffect(() => {
    axios.get('/api/data')
    .then(({data}) => {
      console.log(data)
    })
  },[])

  const handleClick = () => {
    console.log('clicked!');
  }

  return (
    <div>
      <h1 className="text-lg">Data Page!</h1>
      <img src={props.message} alt="" />
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
}

// async and await
//Backend (server side)
export  const getServerSideProps = async () => {
  const {data} = await axios("https://dog.ceo/api/breeds/image/random")
  console.log(data)
  return {
    props: {
      message: data.message
    }
  }
}


/*
app.get('/api/data', (req, res) => {
  res.send({message: "Hello!"})
})

*/
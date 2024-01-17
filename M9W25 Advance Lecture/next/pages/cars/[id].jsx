import { useRouter, useParams } from 'next/navigation'

export default function CarsSub () {
  const router = useRouter()
  const params = useParams();
  console.log(router);
  console.log(params);
  const handleClick = () => {
    router.replace('/')
  }
  return (
    <div>
      <h1>This is the many cars page! You are on the {params && params.id}</h1>
      <a href="#" onClick={handleClick}>Home</a>
    </div>
  )
}

// app.get('/:id', (req, res) => {
//   req.params.id
// })
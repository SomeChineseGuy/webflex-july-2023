
export default function handler(req, res) {
  console.log(req.method);

  res.status(200).json({ question: 'How are you?', info: {
    name:"Alvin", num: 100000
  }})

  
}



/*
app.post
app.get
app.delete
app.put
*/
import express from "express";
import bodyParser from "body-parser";

const app = express()
const port = 3000



app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.render("index.ejs")
  })

  app.get('/about', (req, res) => {
    res.render("about.ejs")
  })

  
  app.get('/contact', (req, res) => {
    res.render("contact.ejs")
  })

  app.get('/story', (req, res) => {
    res.render("story.ejs")
  })

  app.post("/submit", (req, res) => {
    var name = req.body.name;
    var text = req.body.text;
    
    
    
    res.render("index.ejs", {
      name: name,
      text: text,
      })
    
    
  });


  app.delete('/clearContent', (req, res) => {
    
    (res.status(200).send());
    
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
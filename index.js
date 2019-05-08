const  express = require("express");
var https = require('https');
var fs = require('fs');

const app = express();
const port = 8000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname+"/views");
app.use(express.static(__dirname));
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/HappyIndex");
const EmployeeSchema = new mongoose.Schema({
  name: String,
  mood_type: String,
  currentDate: Date,
  message: String
});
const MoodSchema = new mongoose.Schema({
  mood_type: String,
  mood_id: String
});


const Employee = mongoose.model("Employee", EmployeeSchema);
const MoodType = mongoose.model("MoodType", MoodSchema);

const options = {
  cert: fs.readFileSync(__dirname+'/certificate.crt'),
  key: fs.readFileSync(__dirname+'/privateKey.key')
};

app.get("/", (req, res) => {
    MoodType.find({},function(err, moodtypes) {
        res.render("index",{moodtypes:moodtypes});
    })
  
});

app.post("/addHappyIndex", (req, res) => {
  var employee = req.body;
  employee.currentDate = new Date();
  var myData = new Employee(employee);
  myData
    .save()
    .then(item => {
     res.redirect("/")
    })
    .catch(err => {
      res.status(400).send("Unable to save to database");
    });
});
var server = https.createServer(options,app);

server.listen(port, function(){
    console.log(`server running at https://IP_ADDRESS:${port}/`)
});



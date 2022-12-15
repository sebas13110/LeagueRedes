
const express = require('express');
const app = express();
const port = 3080;
const misrutas = require("./routes/rutas");
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static(process.cwd()+"/Finala/dist/final/"));
//const v1 = express.Router();
app.use('/', misrutas)
//app.use('/',misrutas)
app.use(cors());

/*app.get("getIne/:CVE_AGEE",function(req,res){
    var variable = req.params.CVE_AGEE;
    res.send(variable)
});*/

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

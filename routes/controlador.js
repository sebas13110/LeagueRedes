const axios = require('axios');
const { json } = require('body-parser');
//const { param } = require('./rutas');

const estado = "02";
const bodyParser = require('body-parser');



const getDatos = async (req, res) => {
    const params = {
        api_key: '8tk8t3c6moN3PdJKiFsRU18dtjmfz7jWq3vdJGuj',
        date: req.query.date,
    }

    const url = 'https://api.nasa.gov/planetary/apod/';
    axios.get(url, { params })
        .then(response => {
            //console.log(response);
            const jsonRes = {
                resultado: JSON.parse(JSON.stringify(response.data))
            };
            res.json(jsonRes)
        })
        .catch(function (error) {
            res.status(400).json({
                message: 'fecha mala'
            })
            console.log(error);
        });
}



const getIne = async (req, res) => {

    const url = 'https://gaia.inegi.org.mx/wscatgeo/mgee/';
    axios.get(url)
        .then(response => {
            //console.log(response);
            const jsonRes = {
                resultado: JSON.parse(JSON.stringify(response.data))
            };
            res.json(jsonRes);
        })
        .catch(function (error) {
            console.log(error);
        });
        //console.log(req);
}
const getLeague = async (req, res) => {
    const params = {
        api_key: '8tk8t3c6moN3PdJKiFsRU18dtjmfz7jWq3vdJGuj',
        date: req.query.date,
    }
    var fs = require('fs');
    const url = 'https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json';
    
    axios.get(url)
        .then(response => {
            
            const jsonRes = {
                resultado: JSON.parse(JSON.stringify(response.data))
            };
            fs.writeFile('nfs/campeones.txt', JSON.stringify(response.data), function (err) {console.log('archivo creado');});
            res.json(jsonRes)
        })
        .catch(function (error) {
            res.status(400).json({
                message: 'fecha mala'
            })
            //console.log(error);
        });
}
const getChamp = async (req,res) => {
    const llave = 'AIzaSyA-dHiMpGoVNwfnvlAaqF0qeNT2E6H6rgk';
    const region = '%20Combos';
    const agent = req.query.q + region;
    var fs = require('fs');
    const params={
        q:req.query.q,
    }
    const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&q='+agent+'&maxResults=5&key='+llave;
    axios.get(url)
    .then((response) =>{
        //console.log(response);
        const jsonRes = {
            resultado: JSON.parse(JSON.stringify(response.data))
        }
        fs.writeFile('nfs/videoscombos.txt', JSON.stringify(response.data), function (err) {console.log('archivo creado');});
        res.json(jsonRes);
    }).catch((err) =>{
        console.log(err)
    })
}
const getAgente = async (req, res) => {
    const params = {
        api_key: '8tk8t3c6moN3PdJKiFsRU18dtjmfz7jWq3vdJGuj',
        date: req.query.date,
    }
    const key = "RGAPI-9993b427-f25d-4ff2-b84a-c692b80ea3c1"
    var Agente= "Fade"
    const url = 'https://latam.api.riotgames.com/val/content/v1/contents?locale=es-MX&api_key='+key;
    var fs = require('fs');
    
    axios.get(url)
        .then(response => {
            console.log(response)
            const jsonRes = {
                resultado: JSON.parse(JSON.stringify(response.data))
            };
            fs.writeFile('agentes.txt', JSON.stringify(response.data), function (err) {console.log('archivo creado');});
            res.json(jsonRes)
        })
        .catch(function (error) {
            res.status(400).json({
                message: 'fecha mala'
            })
            //console.log(error);
        });}
    const getCharact = async (req,res) => {
        const llave = 'AIzaSyA-dHiMpGoVNwfnvlAaqF0qeNT2E6H6rgk';
        const region = '%20Guia';
        const agent = req.query.q + region;
            var fs = require('fs');
            const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet,id&q='+agent+'&maxResults=5&key='+llave;
            const params={
                q:req.query.q,
            }
            axios.get(url)
            .then((response) =>{
                //console.log(response);
                const jsonRes = {
                    resultado: JSON.parse(JSON.stringify(response.data))
                }
                fs.writeFile('videosguia.txt', JSON.stringify(response.data), function (err) {console.log('archivo creado');});
                res.json(jsonRes);
            }).catch((err) =>{
                console.log(err)
            })
        }

module.exports = {
    getIne, getDatos, getLeague,getChamp,getAgente,getCharact
}
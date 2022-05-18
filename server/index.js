
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')
const multer = require('multer')

const db = mysql.createPool({
    host: 'localhost',
    user: 'new',
    password:'password2#',
    database: 'maofele',
    multipleStatements: true,
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req,res)=>{
    const sqlInsert = "SELECT password, username FROM users;"
    db.query(sqlInsert, (err, result)=>{
        res.send(result)
    });

})
app.get('/check/:username', (req,res)=>{
    const username = req.params.username
    const sql = "SELECT * FROM project_info WHERE username = ?; "
    db.query(sql,[username], (err, result) =>{
        res.send(result)
        console.log(result)
    });
})
app.get('/getinfo', (req, res) =>{
    const sqlGetInfo = "SELECT * FROM project_info;"
    db.query(sqlGetInfo, (err, result) =>{
        res.send(result)
    });
})
app.post('/updateA/:username', (req, res) =>{
    const workOffice = req.body.workOffice
    const dateSignature = req.body.dateSignature
    const elevatorType = req.body.elevatorType
    const endDate = req.body.endDate
    const username = req.params.username

    const sqlUpdateA = "UPDATE project_info SET workOffice= ? , dateSignature = ?, elevatorType = ?, endDate = ?, planning='0', procurement = '0', workPlan = '0', stageB = '0' WHERE username=? ;"
    db.query(sqlUpdateA,[workOffice,dateSignature,elevatorType,endDate,username], (err, result)=>{
        if (err){
            res.send({err: err})
        }
        else{
            res.send({message:"success!" })
        }
    });
});
app.post('/stageB/:username', (req,res)=>{
    const username = req.params.username
    const sql = "UPDATE project_info SET stageB = '1' WHERE username = ?;"
    db.query(sql,[username],(err, result)=>{
        if(err){
            res.send({err:err})
        }else{
            res.send({message:"save!"})
        }
    });
});
app.get('/stageB/:username', (req, res) =>{
    const username = req.params.username
    const sql = "SELECT stageB FROM project_info WHERE username = ?; "
    db.query(sql,[username],(err, result) =>{
        if(err){
            res.send({err: err})
        }else{
            res.send(result) 
            
        }
        
    });
});
app.get('/planning/:username', (req, res) =>{
    const username = req.params.username
    const sql = "SELECT planning FROM project_info WHERE username = ?; "
    db.query(sql,[username],(err, result) =>{
        if(err){
            res.send({err: err})
        }else{
            res.send(result) 
           
        }
        
    });
});
app.post('/planning/:username',(req, res) =>{
    const username = req.params.username
    const sql =  "UPDATE project_info SET planning = '1' WHERE username = ?;"
    db.query(sql,[username], (err, result) =>{
        if(err){
            res.send({err: err})
        }else{
            res.send(result) 
        }

    });
});
app.post('/procurement/:username',(req, res) =>{
    const username = req.params.username
    const sql =  "UPDATE project_info SET procurement = '1' WHERE username = ?;"
    db.query(sql,[username], (err, result) =>{
        if(err){
            res.send({err: err})
        }else{
            res.send(result) 
        }

    });
});

app.get('/procurement/:username', (req, res) =>{
    const username = req.params.username
    const sql = "SELECT procurement FROM project_info WHERE username = ?; "
    db.query(sql,[username],(err, result) =>{
        if(err){
            res.send({err: err})
        }else{
            res.send(result) 
            
        }
        
    });
});
app.post('/addEngineer/:username',(req, res)=>{
    const engineer = req.body.engineer
    const username = req.params.username
    const sqlEngineer = "UPDATE project_info SET engineer = ? WHERE username = ?;"
    db.query(sqlEngineer ,[engineer, username], (err, result)=>{
        if(err){
            res.send({err:err})
        }
        else{
            res.send({message:"save!"})
        }
    });
});

app.post('/add',(req, res) =>{

    const username = req.body.username
    const password = req.body.password
    const phonNum = req.body.phonNum
    const contact = req.body.contact

    const sqlInsertToUsers = "INSERT INTO users (username, password, phonNum, contact ) VALUES (?,?,?,?); INSERT INTO project_info (username , projectNum) VALUES (?,?);"
    //const sql ="INSERT INTO project_info (username , projectNum) VALUES (?,?);"
    db.query(sqlInsertToUsers,[username, password, phonNum, contact,username,password], (err, result)=>{
        if (err){
            res.send({err: err})
        }
        else{
            res.send({message:"success!" })
            
            
        }
    } )
    
});

app.delete('/api/delete/:password',(req,res)=>{
    const name = req.params.password;
    console.log(`name is ${name}`)
    const sqlDelete = `DELETE FROM maofele.users WHERE password = ?;`;
    const sqlDelete2 = `DELETE FROM project_info WHERE projectNum = ?;`
    db.query(sqlDelete, name, (err,result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        } 
    });
    db.query(sqlDelete2,name,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
        
});

app.post('/login', (req, res)=>{
    const username = req.body.username
    const password = req.body.password
     
    const sqlLogin = "SELECT * FROM users WHERE username=? AND password=?"
    db.query(sqlLogin, [username, password],(err, result) =>{
        if(err){
            res.send({err: err})
        }
        if(result.length > 0 ){
            res.send(result)
            console.log(result)
        }else{
            res.send({message: "Wrong username/password combonation"});

            }
        }
    );
        
    });
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './../client/src/upload')
    
    },
    filename: (req, file, cb)=>{
        cb(null,file.originalname)
    }
});
const upload =multer({storage}).single('file')
app.post('/upload',(req,res)=>{
    upload(req, res, (err)=>{
        if(err){
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});

app.listen(3001, () =>{
    console.log('running on port 3001');
})

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
    timezone: 'utc'
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('/api/get', (req,res)=>{
    const sqlInsert = "SELECT password, username FROM users WHERE username != 'manager';"
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
app.get('/getDatee', (req, res)=>{
    const sql= "SELECT STR_TO_DATE(dateSignature) as hadar FROM project_info;"
    db.query(sql,(err, result)=>{
        console.log("datee-",result)
        res.send(result)
    })
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
app.post('/notNeed/:username',(req,res)=>{
    const username = req.params.username
    const sql = "UPDATE project_info SET notNeedEngineer = '1' WHERE username = ?;"
    db.query(sql,[username],(err,result)=>{
        if(err){
            res.send({err: err})
        }else{
            res.send(result) 
        }
    })
})
app.get('/notNeed/:username',(req,res)=>{
    const username = req.params.username
    const sql = "SELECT notNeedEngineer FROM project_info WHERE username = ?;"
    db.query(sql,[username],(err,result)=>{
        if(err){
            res.send({err: err})
        }else{
            res.send(result) 
        }
    })
})
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
    console.log(username)
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
app.post('/dateOfElectric/:username', (req,res)=>{
    const username= req.params.username
    const electric = req.body.electricCompany
    const sql = "UPDATE project_info SET electricCompany = ? WHERE username = ?;"
    db.query(sql, [electric,username], (err,result)=>{
        if (err){
            res.send({err: err})
        }
        else{
            res.send({message:"success!" }) 
        }
    })
});
app.post('/dateOfStandards/:username', (req,res)=>{
    const username = req.params.username
    const standards = req.body.standardsInstitute
    const sql = "UPDATE project_info SET standardsInstitute = ? WHERE username = ?;"
    db.query(sql, [standards, username], (err,result)=>{
        if (err){
            res.send({err: err})
        }
        else{
            res.send({message:"success!" }) 
        }
    })
})
app.post('/receivElevator/:username',(req,res)=>{
    const username = req.params.username
    const receivElevator = req.body.receivElevator
    const sql = "UPDATE project_info SET receivElevator = ? WHERE username = ?;"
    db.query(sql, [receivElevator,username], (err, result)=>{
        if (err){
            res.send({err: err})
        }
        else{
            res.send({message:"success!" }) 
        }
    })
})
app.delete('/deleteUser/:password',(req,res)=>{
    const name = req.params.password;
    console.log(`name is ${name}`)
    const sqlDelete = `DELETE FROM maofele.users WHERE password = ?;`;
    
    db.query(sqlDelete, name, (err,result) => {
        if(err){
            res.send({err: err})
        }
        else{
            console.log("delete from users" )
            res.send(result);
        } 
    });

    
        
});
app.delete('/deleteInfo/:password',(req,res)=>{
    const projectNum = req.params.password;
    const sql=  "DELETE FROM maofele.project_info WHERE projectNum = ?;"
    db.query(sql,projectNum,(err,result)=>{
        if(err){
            res.send({err: err})
        }
        else{
            console.log("delete from info" )
            res.send(result);
        }
    })
})

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
        cb(null, './../client/public')
    
    },
    filename: (req, file, cb)=>{
        cb(null,file.originalname)
    }
});
const upload =multer({storage}).single('file')
app.post('/upload/:username',(req,res)=>{
    upload(req, res, (err)=>{
        if(err){
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
    const username = req.params.username
    const sql = "UPDATE project_info SET workPlan = 1 WHERE username = ?;"
    db.query(sql ,username, (err, result)=>{
        if(err){
            res.send({err: err})
        }

    })

});

app.listen(3001, () =>{
    console.log('running on port 3001');
})
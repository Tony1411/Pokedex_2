const mysql = require('mysql');
const express = require('express');

var app = express();

var cors = require('cors');
app.use(cors());

var picturesDirectory = 'figures/';
var fs = require("fs");


app.use(express.json({limit: '50mb'}));

//Mostrar pokemones
app.get('/pokemons', function(req, res){
    // Step 0: Definir la conexion a la base de datos
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'utec',
      password: '1234567890',
      database: 'pokedex'
    });

    // Step 1: Establecer la conexion
    connection.connect();
  
    // Step 2: Mandar el query
    var myQuery = "SELECT id, nombre, altura, categoria, peso, habilidad, tipo, img FROM pokemon WHERE 1 = 1";
    var myValues = [];
  
    connection.query(myQuery, myValues, function(error, results, fields){
      // Tengo el resultado del query en `results`. Si hay algun error, llegará en `error`        
      if (error) throw error;

      // Step 3: Procesar el resultado de la base de datos
      res.send(results);

      // Step 4: Cerrar la conexion
      connection.end();
    });
  });

//Mostrar pokemones por id
app.get('/pokemons/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });
    connection.connect();

    var myQuery = "SELECT id, nombre, altura, categoria, peso, habilidad, tipo, img FROM pokemon WHERE id = ? ";
    var myValues = [req.params.id];
    connection.query(myQuery, myValues, function(error,results,fields){
        if (error) throw error;     
        res.send(results[0]);
        connection.end();
    });
});

//Registro de nuevos pokemones
app.post('/pokemons', function(req, res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });   
    connection.connect();
    var myQuery="INSERT INTO pokemon(nombre,altura,categoria,peso,habilidad,tipo,img,created_date,modified_date)"+ 
                "VALUES (?, ?, ?, ?, ? , ?, ?, NOW(), NOW());";
    var myValues = [req.body.nombre, req.body.altura, 
                    req.body.categoria, req.body.peso, 
                    req.body.habilidad, req.body.tipo,
                    req.body.img];
                    
    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;       
        res.send(results);
        connection.end();
    });
});


//Update de datos de un pokemon
app.put('/pokemons/:id', function(req, res){
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });

    connection.connect();

    var myQuery = "UPDATE pokemon SET modified_date = NOW()";
    var myValues = [];

    if (req.body.nombre){
      myQuery += " , nombre = ? ";
      myValues.push(req.body.nombre);
    }
    if (req.body.altura){
        myQuery += " , altura = ? ";
        myValues.push(req.body.altura);
    }
    if (req.body.categoria){
        myQuery += " , categoria = ? ";
        myValues.push(req.body.categoria);
    }
    if (req.body.peso){
        myQuery += " , peso = ? ";
        myValues.push(req.body.peso);
    }
    if (req.body.habilidad){
        myQuery += " , habilidad = ? ";
        myValues.push(req.body.habilidad);
    }
    if (req.body.tipo){
        myQuery += " , tipo = ? ";
        myValues.push(req.body.tipo);
    }
    if (req.body.img){
        myQuery += " , img = ? ";
        myValues.push(req.body.img);
    }

    myQuery += " WHERE id = ? "
    myValues.push(req.params.id);
  
    connection.query(myQuery, myValues, function(error, results, fields){
      if (error) throw error;
      res.send(results);
      connection.end();
    });
  });


//Eliminar un pokemon
app.delete('/pokemons/:id',function(req,res){
    var connection=mysql.createConnection({
        host: "localhost",
        user: 'utec',
        password: '1234567890',
        database: 'pokedex'
    });

    connection.connect();

    var myQuery = "DELETE FROM pokemon WHERE id = ?;";
    var myValues = [req.params.id];

    connection.query(myQuery, myValues, function(error, results, fields){
        if (error) throw error;        
        res.send(results);    
        connection.end();
    });
});

app.post('/figures', function(req, res){
    var fileName = `${new Date().getTime()}.jpeg`;
    var picture_url = `${picturesDirectory}${fileName}`;
  
    fs.writeFile(`${picture_url}`, req.body.picture, 'base64', function(error) {
      if (error) throw error;
  
      res.send({img : picture_url});
    });
  })
  
app.use('/figures', express.static('figures'))
  
app.listen(3000, function(){
    console.log("Servidor 3000 abierto!!!")
})




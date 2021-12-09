create database pokedex;
use pokedex;

CREATE TABLE pokemon(
  id int NOT NULL AUTO_INCREMENT,
  nombre varchar(50) NOT NULL,
  altura float NOT NULL,
  categoria varchar(50) NOT NULL,
  peso float NOT NULL,
  habilidad varchar(50),
  tipo varchar(50),
  img varchar(255),
  created_date datetime,
  modified_date datetime,
  PRIMARY KEY (id)   
);

INSERT INTO pokemon(id,nombre,altura,categoria,peso,habilidad,tipo,img,created_date,modified_date)
VALUES(1,'Pidgeot',1.5,'Pajaro',39.5,'Vista Lince','Volador','https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',NOW(),NOW());

INSERT INTO pokemon(id,nombre,altura,categoria,peso,habilidad,tipo,img,created_date,modified_date)
VALUES(2,'Blastoise',1.6,'Armazon',85.5,'Torrente','Agua','https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',NOW(),NOW());

INSERT INTO pokemon(id,nombre,altura,categoria,peso,habilidad,tipo,img,created_date,modified_date)
VALUES(3,'Charizard',1.7,'Llama',90.5,'Mar Llamas','Fuego','https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',NOW(),NOW());

INSERT INTO pokemon(id,nombre,altura,categoria,peso,habilidad,tipo,img,created_date,modified_date)
VALUES(4,'Venusaur',2.0,'Semilla',100.0,'Espesura','Planta','https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',NOW(),NOW());

INSERT INTO pokemon(id,nombre,altura,categoria,peso,habilidad,tipo,img,created_date,modified_date)
VALUES(5,'Pikachu',0.4,'Raton',6.0,'Electricidad Estatica','Electrico','https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',NOW(),NOW());

var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomId = faker.random.number();	
  var randomName = faker.name.findName();
  var randomContent = faker.lorem.sentence();
  var randomDate = faker.date.future();
  var randomImage = faker.image.avatar();
  return {
	id: randomId,
	nombre: randomName,
	contenido: randomContent,
	fecha: randomDate,
	imagen: randomImage
  }

}

var generarDatos = function(){
  var randomId = faker.random.number();	
  var randomName = faker.name.findName();
  var randomPhone = faker.phone.phoneNumber();
  var randomContent = faker.lorem.sentence();
  var randomDate = faker.date.future();
  var randomImage = faker.image.avatar();
  var randomAccount = faker.finance.accountName();
  return {
	id: randomId,
	nombre: randomName,
	telefono: randomPhone,
	contenido: randomContent,
	fecha: randomDate,
	imagen: randomImage,
	cuenta: randomAccount
  }
}

app.get('/', function (req, res) {
  res.send('Segundo Reto - Autor: David Nazario');
})

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/data', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarDatos)
  res.json(usuarios);
})

app.listen(3000);

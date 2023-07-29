
import generateName from "sillyname"
import superheroes from 'superheroes'

var sillyName = generateName();

var superName = superheroes.random();
console.log('My name is ' + sillyName + ', I am ' + superName + "!" );
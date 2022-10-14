//Ejemplo 1: Mensaje
let ejemplo1 = new Vue({
    el:"#ejemplo1",
    data:{
        mensaje: "Hola desde Vue",
    }
})

//Ejemplo 2: Ver cualquier mensaje
let ejemplo2 = new Vue({
    el:"#ejemplo2",
    data:{
        mensaje: ""
    }
})

//Ejemplo 3: Incluir un método y acceso a las variables
let ejemplo3 = new Vue({
    el:"#ejemplo3",
    data:{
        nombre: "Valeria",
        apellido: "Mendoza",
    }

    methods: {
        nombreCompleto: function() {
            return "Mi nombre es: "+ this.nombre + " " + this.apellido,
        }
    }
})

//Propiedad computada
let ejemplo4 = new Vue({
    el:"#ejemplo4",
    data:{
        nombre: "",
        apellido:"",
    }

    computed:{
        nombreCompleto: function(){
            return "Mi nombre completo es: "+this.nombre+" "+this.apellido,
        }
    }
})


//Ejemplo 5: Agregar contenido al html
let ejemplo5 = new Vue({
    el: "#ejemplo5",
    data:{
        contenidohtml:"<div><h2>Imagen de paisaje</div></h2>",
        Imgsrc: "img/logo.png",

    },
})

//Ejemplo 6: Acceder a elementos del DOM

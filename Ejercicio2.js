class pila {
    constructor(){
        this.items = [];
    }

    //agregar un elemento a la pila
    push(elemento) {
        this.items.push(elemento);
    }

    //eliminar un elemento de la pila
    pop(){
        if (this.items.length === 0){ // === evalua si es el mismo dato y tipo de datos
            return "La pila está vacía";
        }
        return this.items.pop();
    }

    //retorna a la cima de la pila
    peek(){
        return this.items[this.items.length -1];
    }

    //verifica si la pila está vacía
    isEmpty(){
        return this.items.length === 0;
    }

    //muestrta los elementos de la pila
    mostrar(){
        console.log(this.items);
    }
}

class PilaLimitada extends pila {
    constructor(maxSize){
        super();
        this.maxSize = maxSize;
    }

    //agregar un elemento a la pila con limite
    push(elemento){
        if (this.items.length >= this.maxSize){
            console.log("Error: la pila está llena");
        } else {
            super.push(elemento);
        }
    }
}

//Uso de la pila
let miPila = new PilaLimitada(6);
miPila.push("A");
miPila.push("B");
miPila.push("C");
miPila.push("D"); 
miPila.push("E");
miPila.push("F");
miPila.push("G"); //ERROR LA PILA ESTA LLENA
miPila.mostrar();

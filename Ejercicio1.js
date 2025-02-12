class Pila {
    constructor(){
        this.items = []; 
    }

    //Método para agregar un elemento a la pila
    push(element){
        this.items.push(element); //push nos sirve para agregar un elemento
    }

    //Método para remover y retornar el elemento superior de la pila
    pop(){
        if (this.isEmpty()){ //isEmpty nos sirve para saber si la pila está vacía
            throw new Error("La pila está vacía");
        }
        return this.items.pop();//pop nos nos sirve para remover el último elemento
    }

    //Método para ver el elemento superior de la pila sin removerlo
    peek(){ //peek nos sirve para ver el último elemento
        if (this.isEmpty()){
            throw  new Error("La pila está vacía");
        }
        return this.items[this.items.length - 1]; //-1 es para ver el elemento 
    }

    //Método para obtener el tamaño de la pila
    size(){ //size nos devuelve el tamaño de la pila
        return this.items.length;
    }

    //Método para vaciar la pila
    clear(){ //clear limpia la pila
        this.items = [];
    }

    //Método para verificar si la pila está vacía
    isEmpty() {
        return this.items.length === 0;
    }
}

function evaluarPostfija(expresion){
    const pila = new Pila(); //se crea la pila
    const elementos = expresion.split(' '); //se separan los números

    elementos.forEach(elemento => {
        if (!isNaN(elemento)){

            //si el elemento es un número se agrega a la pila
            pila.push(parseFloat(elemento)); 
        } else {
            
            //si el elemento es un operados, se sacan los dos últimos elementos
            const operador2 = pila.pop();
            const operador1 = pila.pop();
            let resultado;

            switch (elemento){
                case '+':
                    resultado = operador1 + operador2; //se realiza una suma
                    break;
                case '-':
                    resultado = operador1 - operador2; //se realiza una resta
                    break;
                case '*':
                    resultado = operador1 * operador2; //se realiza una multiplicación
                    break;
                case '/':
                    resultado = operador1 / operador2; //se realiza una división
                    break;
                default:
                    throw new Error("Operador no válido");
            }

            pila.push(resultado); //se agrega el resultado a la pila
        }
    });

    //el resultado es el único elemento que queda en la pila
    return pila.pop();
}

//Pruebas
const expresion = "4 5 + 3 *";
const resultado = evaluarPostfija(expresion);
console.log(`El resultado de la expresion postfija "${expresion}" es: ${resultado}`); //se imprime el resultado
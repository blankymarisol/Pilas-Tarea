class Pila {
    constructor(){
        this.items = []; 
    }

    //Método para agregar un elemento a la pila
    push(element){
        this.items.push(element);
    }

    //Método para remover y retornar el elemento superior de la pila
    pop(){
        if (this.isEmpty()){
            throw new Error("La pila está vacía");
        }
        return this.items.pop();
    }

    //Método para ver el elemento superior de la pila sin removerlo
    peek(){
        if (this.isEmpty()){
            throw  new Error("La pila está vacía");
        }
        return this.items[this.items.length - 1];
    }

    //Método para obtener el tamaño de la pila
    size(){
        return this.items.length;
    }

    //Método para vaciar la pila
    clear(){
        this.items = [];
    }
}

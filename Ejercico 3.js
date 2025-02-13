//clase que maneja el sistema de "deshacer" utilizando una pila
class UndoManager {
    constructor() {
        this.stack = []; //pila para almacenar 
    }

    //Método para gregar una acción a la pila
    addAction(action) {
        this.stack.push(action);
    }

    //Método para deshacer la última acción 
    undo(){
        return this.stack.pop();
    }

    //Método para obtener el historial de acciones
    geHistory(){
        return this.stack.slice(); // devuelve una copia de la pila
    }
}
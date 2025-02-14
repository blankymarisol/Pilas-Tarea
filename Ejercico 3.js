//clase que maneja el sistema de "deshacer" utilizando una pila
class UndoManager {
    constructor() {
        this.stack = []; //pila para almacenar 
    }

    //Método para agregar una acción a la pila
    addAction(action) {
        this.stack.push(action);
    }

    //Método para deshacer la última acción 
    undo(){
        return this.stack.pop();
    }

    //Método para obtener el historial de acciones
    getHistory(){
        return this.stack.slice(); // devuelve una copia de la pila
    }
}

//Simulación de un escenario de uso
const manager = new UndoManager();

manager.addAction("Escribir 'Hola'");
manager.addAction("Escribir 'Mundo'");
console.log(manager.getHistory()); 

manager.undo();
console.log(manager.getHistory()); 

manager.addAction("Escribir 'de nuevo'");
console.log(manager.getHistory()); 

manager.undo();
manager.undo();
console.log(manager.getHistory()); 
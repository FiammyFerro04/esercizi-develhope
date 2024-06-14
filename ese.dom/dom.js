
const addProduct = () => {
const input = document.getElementsByTagName("input")[0];
const inVal = input.value;
const li = document.createElement("li");
li.innerText = inVal;
const checkbox = document.createElement("input");
checkbox.type = "checkbox";
li.appendChild(checkbox);
document.getElementsByTagName("ul")[0].appendChild(li);

};



// Crea la tua To-Do List mediante i metodi visti nel video.
// Crea una funzione che ti permetterà di:
// Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
// Creare un checkbox per ogni task aggiunto.
// Chiedi all'utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

var nomeUtente = prompt("Quale è il tuo nome?");
console.log(nomeUtente);

var cognomeUtente = prompt("Quale è il tuo cognome?");
console.log(cognomeUtente);

var colorePreferito = prompt("Quale è il tuo colore preferito?");
console.log(colorePreferito);

document.getElementById("password").innerHTML = nomeUtente + cognomeUtente + colorePreferito + "21"; 
console.log(password);
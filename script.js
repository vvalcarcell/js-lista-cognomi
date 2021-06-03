var lastName = ['BIANCHI', 'NERI', 'ROSSI', 'VERDI', 'GIALLI'];

var userName = (prompt('Inserisci Cognome')).toUpperCase();
lastName.push(userName);
lastName.sort();

x = 0;
while (x < lastName.length) {
    document.getElementById('name-list').innerHTML += "<li>" + lastName[x] + "</li>";
    x++;
}

var namePosition = lastName.indexOf(userName) + 1;
document.getElementById('position').innerHTML = "Il tuo cognome si trova nella posizione n°: " + namePosition;
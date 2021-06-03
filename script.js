var lastName = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

var userName = prompt('Inserisci Cognome');
userName = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();
lastName.push(userName);
lastName.sort();

x = 0;
while (x < lastName.length) {
    document.getElementById('name-list').innerHTML += "<li>" + lastName[x] + "</li>";
    x++;
}

var namePosition = lastName.indexOf(userName) + 1;
document.getElementById('position').innerHTML = "Il tuo cognome si trova nella posizione n°: " + namePosition;
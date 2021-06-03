var lastName = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

lastName.push(prompt('Inserisci Cognome'));
lastName.sort();

x = 0;
while (x < lastName.length) {
    document.getElementById('name-list').innerHTML += "<li>" + lastName[x] + "</li>";
    x++;
}

// document.getElementById('position').innerHTML = "Il tuo cognome si trova nella posizione n°: " + ;
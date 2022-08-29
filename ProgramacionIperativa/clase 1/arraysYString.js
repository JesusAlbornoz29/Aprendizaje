
// const string = new String ('Hola Mundo');
const string = 'Hola mundo';
const emails = ['iroman@digitalhouse.com', 'loki%digitalhouse.com', 'loki@digitalhouse.com'];
const emailsValidos = [];
const emailsInValidos = [];

for (let i = 0; i < emails.length; i++) {
    
    if (emails[i].includes('@')){
            emailsValidos.push(emails[i]);
    } else {
        emailsInValidos.push(emails[i]);
    }
    
}

// .pop quita el ultimo elemento


console.log (emailsValidos);
console.log (emailsInValidos);
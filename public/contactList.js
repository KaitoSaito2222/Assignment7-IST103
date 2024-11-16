const contactList = [
    { name: 'John Doe', phone: '1234 567 890', email: 'john.doe@example.com' },
    { name: 'Jane Smith', phone: '2345 678 901', email: 'jane.smith@example.com' },
    { name: 'Bob Johnson', phone: '3456 789 012', email: 'bob.johnson@example.com' }
];

function displayContacts() {
    console.log("displayContacts:");
    contactList.forEach(contact => {
        console.log(`
            Name: ${contact.name}, 
            Phone: ${contact.phone}, 
            Email: ${contact.email}`);
    });
}

function addContact(name, phone, email) {
    contactList.push({ name, phone, email });
    console.log("\naddContact:");
    console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
}

function showFirstAndLastContact(){
    console.log("\nshowFirstAndLastContact:");
    console.log("\nFirst Contact:");
    console.log(contactList[0]);
    console.log("\nLast Contact:");
    console.log(contactList[contactList.length - 1]);
}

displayContacts();
addContact('Maisie Haley', '0913 531 3030', 'risus.Quisque@urna.ca');
console.log("\nUpdated Contact List:");
displayContacts();
showFirstAndLastContact();


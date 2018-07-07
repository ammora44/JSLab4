"use strict";

// this stores all of the contact objects
class AddressBook { 
    constructor() {
        this.contacts = [
            new Contact("Megan", "megan@grandcircus.co", "111-222-3333", "Friend"),
            new Contact("Julie", "julie@grandcircus.co", "111-222-3333", "Coworker")
        ];
    }
    add(info) {
        const newContact = new Contact(info.name, info.email, info.phone, info.relation);
        this.contacts.push(newContact);
    }
    deleteAt(index) {
        this.contacts.splice(index, 1);
    }
    display() {
        document.getElementById("contacts").innerHTML = "";
        let counter = 0;
        for (let person of this.contacts) {
            const newContactEntry = document.createElement("div");
            newContactEntry.classList.add("newCon");
            newContactEntry.innerHTML =`
            <li>Name: ${person.name}</li>
            <li>Email: ${person.email}</li>
            <li>Phone: ${person.phone}</li>
            <li>Relation: ${person.relation}</li>
            <button class="deletebtn" id="${counter}"><i class="material-icons">delete</i></button>
            `
            document.getElementById("contacts").appendChild(newContactEntry);
            counter ++;
        }
        for (let button of document.getElementsByClassName("deletebtn")) {
            button.addEventListener("click", deleteContact);
        }
    }
}

// object blueprint to be repeated for each contact
class Contact { 
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

// adding a contact
document.getElementById("add").addEventListener("click", event => {
    event.preventDefault();
    let info = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        relation: document.getElementById("relation").value
    };
    newAddressBook.add(info);
    newAddressBook.display();
    clearFields();
});


// deleting a contact
function deleteContact(event) {
    let index = event.target.parentElement.id;
    newAddressBook.deleteAt(index);
    newAddressBook.display();
}


// clear input fields
function clearFields() {
    let info = {
        name: document.getElementById("name").value = "",
        email: document.getElementById("email").value = "",
        phone: document.getElementById("phone").value = "",
    };
}

// creating the new addressbook
const newAddressBook = new AddressBook();
newAddressBook.display();



"use strict";

// this is the object blueprint to be repeated
class Contact { 
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
};

class AddressBook { 
    constructor () {
    this.contacts = [];                 // the array we are storing information in 
     } 
     add(info) {
        let newContact = new Contact(info.name, info.email, info.phone, info.relation);
        this.contacts.push(newContact);
        document.getElementById("add").addEventListener("click", );    
        let contactsNew = document.getElementById("newContacts"); //found the container
        let div = document.createElement("div"); //creates div
        let pName = document.createElement("p"); // creates p for name
        let pEmail = document.createElement("p"); // creates p for email
        let pPhone = document.createElement("p"); // creates p for phone
        document.body.appendChild(contactsNew);
     }
    deleteAt(index) {
        this.contacts.splice(index, 1);
        AddressBook.deleteAt(index);
        }

    display() {
        return this.contacts;
    }
}
    




console.log(" Jai Hind! Welcome to Address Book System");
//UC1 and UC2
class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.validateName(firstName, "First Name");
        this.validateName(lastName, "Last Name");
        this.validateAddress(address, "Address");
        this.validateAddress(city, "City");
        this.validateAddress(state, "State");
        this.validateZip(zip);
        this.validatePhoneNumber(phoneNumber);
        this.validateEmail(email);

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    validateName(name, fieldName) {
        const nameRegex = /^[A-Z][a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) throw `${fieldName} is invalid!`;
    }

    validateAddress(input, fieldName) {
        const addressRegex = /^[a-zA-Z0-9\s]{4,}$/;
        if (!addressRegex.test(input)) throw `${fieldName} is invalid!`;
    }

    validateZip(zip) {
        const zipRegex = /^[0-9]{6}$/;
        if (!zipRegex.test(zip)) throw `Zip Code is invalid!`;
    }

    validatePhoneNumber(phoneNumber) {
        const phoneRegex = /^[0-9]{2}\s[0-9]{10}$/;
        if (!phoneRegex.test(phoneNumber)) throw `Phone Number is invalid!`;
    }

    validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) throw `Email is invalid!`;
    }

    toString() {
        return `Name: ${this.firstName} ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state}, Zip: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

// Example for testing
try {
    let contact = new Contact("Amit", "Sharma", "Sector 15", "Noida", "Uttar Pradesh", "201301", "91 9876543210", "amit.sharma@gmail.com");
    console.log(contact.toString());
} catch (error) {
    console.error(error);
}

// UC2 : Ability to ensure Valid Contacts are added
// Already Implemented in UC1.

// UC3: Ability to Create Multiple Address Books and Add Contacts
class AddressBookManager {
    constructor() {
        this.addressBooks = new Map(); // Map to store multiple address books
    }

    createAddressBook(name) {
        if (this.addressBooks.has(name)) {
            console.log(`Address Book '${name}' already exists.`);
        } else {
            this.addressBooks.set(name, []);
            console.log(`Address Book '${name}' created successfully.`);
        }
    }

    addContactToAddressBook(bookName, contact) {
        if (this.addressBooks.has(bookName)) {
            let addressBook = this.addressBooks.get(bookName);
            addressBook.push(contact);
            console.log(`Contact added to Address Book '${bookName}'.`);
        } else {
            console.log(`Address Book '${bookName}' does not exist.`);
        }
    }

    viewAddressBook(bookName) {
        if (this.addressBooks.has(bookName)) {
            let addressBook = this.addressBooks.get(bookName);
            console.log(`Address Book '${bookName}' contains:`);
            addressBook.forEach(contact => console.log(contact.toString()));
        } else {
            console.log(`Address Book '${bookName}' does not exist.`);
        }
    }
}

// Example Usage
let manager = new AddressBookManager();
manager.createAddressBook("Family");
manager.createAddressBook("Work");

try {
    let contact1 = new Contact("Ayush", "Srivastava", "Indira Nagar", "Raebareli", "Uttar Pradesh", "229001", "91 9876543210", "ayush@gmail.com");
    manager.addContactToAddressBook("Family", contact1);

    let contact2 = new Contact("Rahul", "Sharma", "Home base", "Anantnag", "Jammu Kashmir", "192101", "91 9876543211", "rahul@gmail.com");
    manager.addContactToAddressBook("Work", contact2);

    manager.viewAddressBook("Family");
    manager.viewAddressBook("Work");
} catch (error) {
    console.error(error);
}

// UC4: Find Existing Contact by Name and Edit it

// Find Contact by Name
AddressBookManager.prototype.findContact = function (bookName, firstName, lastName) {
    if (this.addressBooks.has(bookName)) {
        const addressBook = this.addressBooks.get(bookName);
        return addressBook.find(contact => contact.firstName === firstName && contact.lastName === lastName);
    }
    console.log(`Address Book '${bookName}' does not exist.`);
    return null;
};

// Edit Contact
AddressBookManager.prototype.editContact = function (bookName, firstName, lastName, newContactData) {
    const contact = this.findContact(bookName, firstName, lastName);
    if (contact) {
        try {
            contact.firstName = newContactData.firstName || contact.firstName;
            contact.lastName = newContactData.lastName || contact.lastName;
            contact.address = newContactData.address || contact.address;
            contact.city = newContactData.city || contact.city;
            contact.state = newContactData.state || contact.state;
            contact.zip = newContactData.zip || contact.zip;
            contact.phoneNumber = newContactData.phoneNumber || contact.phoneNumber;
            contact.email = newContactData.email || contact.email;
            console.log(`Contact updated successfully in '${bookName}'.`);
        } catch (error) {
            console.error("Failed to update contact:", error);
        }
    } else {
        console.log("Contact not found.");
    }
};

// Example Usage
manager = new AddressBookManager();
manager.createAddressBook("Friends");

let contact1 = new Contact("Amit", "Sharma", "Sector 15", "Noida", "Uttar Pradesh", "201301", "91 9876543210", "amit.sharma@gmail.com");
manager.addContactToAddressBook("Friends", contact1);

console.log("Before Edit:");
manager.viewAddressBook("Friends");

// Edit Contact
manager.editContact("Friends", "Amit", "Sharma", {
    address: "Sector 20",
    phoneNumber: "91 9999999999"
});

console.log("After Edit:");
manager.viewAddressBook("Friends");







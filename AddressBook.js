console.log(" Jai Hind! Welcome to Address Book System");
//UC1
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

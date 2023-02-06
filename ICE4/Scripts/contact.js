class Contact {
    constructor(name, contactNumber, emailAddress)
    {
        this.Name = name;
        this.ContactNumber = contactNumber;
        this.EmailAddress = emailAddress;
    }
    get Name()
    {
        return this.m_name
    }
    set Name(name)
    {
        this.m_name = name
    }
    get contactNumber()
    {
        return this.m_contactNumber
    }
    set Name(contactNumber)
    {
        this.m_name = contactNumber
    }
    get EmailAddress()
    {
        return this.m_emailAddress
    }
    set Name(emailAddress)
    {
        this.m_name = emailAddress
    }

    //public override method

    serialize() {
        if (this.Name !== "" && this.ContactNumber !== "" && this.EmailAddress !== "")
            return `${ this.Name }, ${ this.ContactNumber }, ${ this.EmailAddress }`
        console.error("One or more properties or fields of the Contact Object are missing or invalid!")
        return null
    }
   // Deserialize Method
   deserialize(data) {
    let propertyArray = data.split(",")
    this.Name = propertyArray[0]
    this.ContactNumber = propertyArray[1]
    this.EmailAddress = propertyArray[2]
}


    toString()
    {
       return 'Full Name is ${ this.Name} \n Contact Information is ${this.ContactNumber} \n Email Address is ${this.EmailAddress}' 
    }
}
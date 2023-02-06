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

    toString()
    {
       return 'Full Name is ${ this.Name} \n Contact Information is ${this.ContactNumber} \n Email Address is ${this.EmailAddress}' 
    }
}
(function(core){
class User 
{
    //constructor
    constructor(diplayName = "", emailAddress = "", username ="", password= "")
    {
        this.DiplayName = diplayName;
        this.EmailAdress = emailAddress;
        this.Username = username;
        this.Password = password;
    }
    //missing GETTERS AND SETTERS


//override method
toString() 
{
    return `Display Name: ${this.DiplayName}\n Email Address: ${ this.EmailAdress} \n Usernanme: ${ this.Username}`
}

toJSON()
{
    
    return{
        "DiplayName": this.DiplayName,
        "EmailAddress": this.EmailAddress,
        "username": this.Username,

    }
}
fromJSON(data)
{
this.DiplayName = data.diplayName
this.EmailAdress = data.EmailAddress
this.Username = data.username
this.Password = data.Password
}


serialize() {
    if (this.DisplayName !== "" && this.EmailAddress !== "" && this.Username !== "")
        return `${ this.Name }, ${ this.EmailAddress }, ${ this.Username }`
    console.error("One or more properties or fields of the Contact Object are missing or invalid!")
    return null
}

// Deserialize Method
deserialize(data) {
    let propertyArray = data.split(",")
    this.DisplayName = propertyArray[0]
    this.EmailAddress = propertyArray[1]
    this.username = propertyArray[2]
}
}
core.User = User

})(core || (core = {}))
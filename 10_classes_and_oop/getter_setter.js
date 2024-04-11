class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email (){
        return `${this._email.toUpperCase()}`
    }

    set email (value){
        this._email = value
    }

    get password(){
        return `${Math.floor(Math.random() * 10000000000)}${this._password}rabindra`
    }

    set password(value){
        this._password = value
    }
}


const rabindra = new User("r@rabindra.com", "yugtjmfyc")
console.log(rabindra.password);
console.log(rabindra.email);
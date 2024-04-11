const User = {
    _email: 'r@rkm.com',
    _password: 'rkm',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
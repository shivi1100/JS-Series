class User{
     constructor(email, password){
        this.email = email,
        this.password = password
     }

     get email(){
        return this._email.toUpperCase()
     }

     set email(value){
        this._email = value
     }

     get password(){
    //  return this._password.toUpperCase()
     return `${this._password}hitesh`
     }

     set password(value){
       this._password = value
     }
}

const hitesh = new User("h@hitesh123.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email)
export class User {
    id_user: number;
    name: string;
    last_name: string;
    email: string;
    photo: string;
    password: string;
  
    constructor(_id_user: number,_name : string,_last_name: string,_email: string, _photo: string,_password: string) {
      this.id_user = _id_user;
      this.name = _name;
      this.last_name = _last_name;
      this.email = _email;
      this.photo = _photo;
      this.password = _password;
    }
    
  }
  
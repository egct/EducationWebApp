export class UserCompGraf {
    constructor(_id = "", id_user = "", type_user = "", name_user = "", email_user = "", nrc_user= 0, name_tutor="", password_user="", createdAt="", updatedAt="") {
      this._id = _id;
      this.id_user= id_user; 
      this.type_user= type_user;
      this.name_user= name_user;
      this.email_user= email_user;
      this.nrc_user= nrc_user;
      this.name_tutor= name_tutor;
      this.password_user = password_user;
      this.createdAt= createdAt;
      this.updatedAt= updatedAt;
  
    }
  
    _id: string;
    id_user: string; 
    type_user: string;
    name_user: string;
    email_user: string;
    nrc_user: number;
    name_tutor: string;
    password_user: string;
    createdAt: string;
    updatedAt: string;
    }

/*
  "_id": "615fe209dec4370b5ba611f6", 
  "id_user": "L00366396", 
  "type_user": "Estudiante", 
  "name_user": "Edwin cuichan", 
  "email_user": "egcuichan@espe.edu.ec", 
  " nrc_user ":" 4534 ",
  " name_tutor ":" Margarita Zambrano ",
  "password_user": "",
  " createdAt ":" 2021-10-08T06: 15: 37.313Z ",
  " updatedAt ":" 2021-10-08T17: 34: 31.727Z "
  */
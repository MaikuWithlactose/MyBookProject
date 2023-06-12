export class Books 
{
  
    public title:string = ""
    public type:string = ""
    public author:string = ""
    public price:number = 0
    public photo:string = ""
    public id_book:number = 0
    public id_user:number = 0

    constructor(title:string, type:string, author:string, price:number, photo:string, id_book:number=0, id_user:number=0)
    {
        this.title=title;
        this.type=type;
        this.author=author;
        this.price=price;
        this.photo=photo;
        this.id_book=id_book;
        this.id_user=id_user;
     }
}
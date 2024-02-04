interface person{
    firstName:string;
    lastName:string;
    greet(msg:string):void;
}

class User1 implements person{
    firstName: string;
    lastName: string;

    constructor(f:string,l:string){
        this.firstName = f;
        this.lastName=l
    }
    greet(msg: string): void {
        console.log(msg+" "+this.firstName);
        
    }
}
const user = new User1("Vaibhav","Kamble")
user.greet("how are you")
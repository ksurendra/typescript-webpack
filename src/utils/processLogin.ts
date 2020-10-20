export module App {
  export class UserLogin {
    username: string;
    password: string; 

    constructor(){
      let btn = document.getElementById("submitButton");
      btn.addEventListener("click", (e:Event) => 
        {
          e.preventDefault();
          this.processUserLogin()
        }
      ); 
    }

    processUserLogin(){
      // button click handler
      console.log("submit button clicked");
      let username: string = (<HTMLInputElement>document.getElementById("username")).value;
      let password: string = (<HTMLInputElement>document.getElementById("password")).value;
      console.log(username + password);
      this.username = username;
      this.password = password;
    }
  }

}
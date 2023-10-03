window.addEventListener("load", () => {
   class UserRegistration {
      constructor (firstName, lastName, email, password) {
         this.firstName = firstName;
         this.lastName = lastName;
         this.email = email;
         this.password = password;
      };
   
      firstNameVerification (firstName) {
         if(firstName.length < 3) { 
            alert("The name must contains at least 3 symbols");
            this.firstName = undefined;
         } else {
               return this.firstName = firstName;
            }   
      };
   
      lastNameVerification (lastName) {
         if(lastName.length < 3) {
            alert("The last name must contains at least 3 symbols");
            this.lastName = undefined;
         } else {
               return this.lastName = lastName;
            }
      };
   
      emailVerification (email) {
         if(email.length < 6 || !email.includes(".") || !email.includes("@")) { 
            alert("Email must contains at least 6 symbols and includes \".\" and \"@\"");
            this.email = undefined; 
         } else {
               return this.email = email;
            }
      };
   
      passwordVerification (password) {
        const checkingForNumber = (str) => {
            let result = false;
            for (let i = 0; i < str.length; i++) {
               if (!isNaN(+str.charAt(i))) {
                  result = true;
                  break;
               } 
            };
            return result;
         };
   
         if(password.length < 10 || !checkingForNumber(password)) {
            alert("The password must contains at least 10 symbols and includes at least 1 number");
            this.password = undefined;
         } else {
               return this.password = password;
            }
      };
   
      submitData() {
         if (Object.values(this).some((el) => el === undefined)) {
            alert ("Enter correct data to the form");
         } else {
               console.table(this);
               [...$("input")].forEach((el) => $(el).val(""));
               [...$(".input-checkbox")].forEach((el) => $(el).prop("checked", false));
               Object.keys(this).forEach((key) => this[key] = undefined);    
            };
      };
   };
   
   const newUser = new UserRegistration();
   
   $("#first-name-field").on("change", () => newUser.firstNameVerification($("#first-name-field").val()));
   
   $("#last-name-field").on("change", () => newUser.lastNameVerification($("#last-name-field").val()));
   
   $("#email-field").on("change", () => newUser.emailVerification($("#email-field").val()));
   
   $("#password-field").on("change", () => newUser.passwordVerification($("#password-field").val()));
   
   $("#registration").on("click", () => newUser.submitData());
});
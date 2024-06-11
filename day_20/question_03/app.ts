/* Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.

This is like a self-building lego set. Once you start it, it builds a user profile by itself and can tell you about the user. */

let userProfile = (() => {
    let name: string = "Saad";
    let age: number = 14;
    let gender: string = "Male";
    return {
        displayInfo: function() {
            console.log(`Name: ${name}, Age: ${age} and Gender: ${gender}`);
        }
    }
})()

userProfile.displayInfo();
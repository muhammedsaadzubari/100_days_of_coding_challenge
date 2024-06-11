/* Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.

This blueprint, called an interface, helps ensure all students have the same kind of information, making your code more organized.
 */

interface Student {
    name: string;
    age: number;
    courses: string[];
}

let student: Student = {
    name: "Saad",
    age: 14, 
    courses: ["Metaverse", "Web 3.0", "Artificial Intelligence"]
}

console.table(student);
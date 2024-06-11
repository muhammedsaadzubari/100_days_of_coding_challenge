/* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information. */
let developerSkills = {
    languages: ["TypeScript", "JavaScript"],
    frameworks: [0],
    tools: ["git", "vs code", "nodejs"],
};
let { languages, frameworks, tools } = developerSkills;
function print(message, args) {
    console.group(message);
    args.forEach((val) => console.log(val));
    console.groupEnd();
    console.log('\n');
}
print('Languages', languages);
print('Frameworks', frameworks);
print('Tools', tools);
export {};

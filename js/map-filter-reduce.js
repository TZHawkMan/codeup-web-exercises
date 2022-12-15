const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let three=[];
three = users.filter((user) =>{
if (user.languages.length >= 3){
    return user.languages;
}});
console.log(three)

//Use .map to create an array of strings where each element is a user's email address

let useremail=[];
users.map((user) => useremail.push(user.email)
);
console.log (useremail)

//Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let total=users.reduce(function(total, user){
    return total + user.yearsOfExperience
},0)
console.log(total);
let average = total/users.length
console.log (average)

//Use .reduce to get the longest email from the list of users.
let longestEmail = useremail.reduce((longest,email) => {
    if(email.length > longest.length){
        return email
    }else{
        return longest;
    }
},"")

console.log(longestEmail)

//Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let instructors = users.reduce(function(output, user,currentIndex){
    if (currentIndex === users.length -1 ){
        return `${output} ${user.name}.`
    }
    return  `${output} ${user.name}`
}," Your names list are :")

console.log (instructors)

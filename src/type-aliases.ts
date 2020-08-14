export { };

type Mojiretu = string


type Profile = {
    name: string
    age: number
}

const example:  Profile= {
    name: "eric",
    age:23,
    
} 

const example2 = {
    name: "eric",
    age:23,
    
} 

type Profile2 = typeof example2;
//紐付け

const example3: Profile2 = {
    name: "eric",
    age: 23,

} 
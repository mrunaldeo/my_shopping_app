export default function UserProfile(props){
    console.log(props);
    console.log(props.name);
    console.log(props.occupation)
     return (
        <h2>Name:{props.name}, age:{props.age}, occupation:{props.occupation}</h2>
    )
} 
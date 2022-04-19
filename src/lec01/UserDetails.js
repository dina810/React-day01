export default function UserDetails(props){
    console.log(props)
    
    return (
        <>
        <h3>Username :{props.UserData.name}</h3>
        <h3>position:{props.UserData.position} </h3>
        </>

    )
    
}
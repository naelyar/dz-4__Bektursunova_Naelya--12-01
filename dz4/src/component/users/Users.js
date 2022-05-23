function Users (props) {

    
    console.log (props.users)
    return (
        <ul>
        {props.users.map((user) =>{
            console.log(user)

    return (
            <li>
                <div>name:{user.name}</div>
                <div>age:{user.age}</div>

            </li>    
        )        
    })} 
    </ul>

    )
   
}

export default Users;
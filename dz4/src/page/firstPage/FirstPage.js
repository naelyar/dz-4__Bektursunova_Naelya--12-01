import React from "react" ;
import Users from "../../component/users/Users";

class FirstPage extends  React.Component {

    constructor (props) {
        super(props)
    }
    render() {
        return (
            <>
                <Users users={this.props.users}/>
            </>
        )

        
    }
}

export default FirstPage;
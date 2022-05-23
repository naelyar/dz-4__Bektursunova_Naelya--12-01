import React  from "react";

  class SecondPage extends React.Component{

    constructor(props) {
        super(props);
        this.state =(
            {
                name: ""
            }
        )
        this.onChangeInput = this.onChangeInput.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

    }
    onChangeInput (e) {

        this.setState({[ e.target.name]:e.target.value})

    }
    onSubmit (e) {
        e.preventDefault()
        {
            console.log (this.state)
        }

    }
      render() {
        return (
              <>

                  <form onSubmit={this.onSubmit} style={{marginLeft: " 50px"}}>
                    <input type = "text" value= {this.state.name} 
                    onChange={this.onChangeInput}
                        name="name"
                    />
                    <button type="submit">Click</button>

                  </form>
              </>
          )
          }
      
  }
  export default SecondPage;
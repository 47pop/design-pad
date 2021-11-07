import React, {Component} from "react"
import "./styles.css"
class Pad extends Component {
    // props
    // componentDidMount(){
    //     this.setState({});
    // }
    handleOnDragOver=()=>{
        this.props.handleOnDragOver(this.props.id)
        console("in Pad, dargging")
    }

    handleOnDrop=()=>{
        this.props.handleOnDrop(this.props.id)
        console.log("in Pad, dropping")
    }
    render () {
        return(
            <div className="pad"
                onDragOver={this.handleOnDragOver}
                onDrop={this.handleOnDrop}
                >{this.props.name}</div>
        )
    }
}
export default Pad
import React, {Component} from "react"
import "./styles.css"
import PadList from "../ComponentsHelpers/PadList"
import Pad from "./Pad"
class DesignBoard extends Component {
    initialState={
        pads:[],
    }
    setThePads(){
        this.setState({pads: PadList.listOfPads});
        alert(": "+this.initialState.pads.id)
    }
    // onDragOver=(e)=>{
    //     let event = e;
    //     event.stopPropagation();
    //     event.preventDefault();
    //     console.log("dragging");
    // }

    // onDrop=(e)=>{
    //     let event = e;
    //     event.stopPropagation();
    //     event.preventDefault();
    //     console.log("dropped");
        // const updatedPad=this.initialState.pads.map((pad)=>{
        //     if(pad.id){
        //         return Object.assign({}, pad,{
        //             color:"red"//pad.color
        //         })
        //     }else{
        //         return pad
        //     }
    //     })

    //     this.setState({pads:updatedPad})
    //     console.log(this.pads)
    // }
    handleDrop = (column) => {
        console.log("dropped")
        const updatedPad=this.initialState.pads.map((pad)=>{
            if(pad.id){
                return Object.assign({}, pad,{
                    color:"red"//pad.color
                })
            }else{
                return pad
            }
        })
    };
    render() {
        const singlePad=this.initialState.pads.map((pad)=>(
            <Pad
                key={"pad-"+pad.id}
                id={pad.id}
                color={pad.color}
                name={pad.name}
                // onDragOver={this.onDragOver}
                // onDrop={this.onDrop}
                // handdleOnDragOver={this.onDragOver}
                // handdleOnDrop={this.onDrop}
                // draggableId={id} 
                // index={index}
            />
        ))
        return(
            // <div id="designBoard" className="sameLineComponent">
            //     <div id="pad" className="sameLineComponent">
            //         <table id="designPadTable">
            //             <tr id="designPaTableRowOne">{singlePad}</tr>
            //             <tr id="designPaTableRowTwo">{singlePad}</tr>
            //         </table>
            //     </div>
                
            // </div>
            <div id="designBoard" className="sameLineComponent">
                <table id="designPadTable">
                    <tbody className="tableBody">
                        <tr id="designPaTableRowOne">
                            <td id="padOne" className="designPad">{this.singlePad}</td>
                            <td id="padTwo" className="designPad"
                                onDrop={() => this.handleDrop(this.props.id)} 
                                onDragOver={this.onDragOver}>{singlePad}</td>
                        </tr>
                        <tr id="designPaTableRowTwo">
                            <td id="padThree" className="designPad" 
                                onDragOver={this.onDragOver}
                                onDrop={this.onDrop}>{singlePad}</td>
                            <td id="padFour" className="designPad" 
                                onDragOver={this.onDragOver}
                                onDrop={this.onDrop}>{singlePad}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default DesignBoard
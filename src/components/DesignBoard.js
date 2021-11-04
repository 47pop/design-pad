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
    isDragging=(e)=>{
        let event = e;
        event.stopPropagation();
        event.preventDefault();
        
        console.log("in DesginBoard: ");
        const updatedPad=this.initialState.pads.map((pad)=>{
            if(pad.id){
                return Object.assign({}, pad,{
                    color:"red"//pad.color
                })
            }else{
                return pad
            }
        })
        this.setState({pads:updatedPad})
        console.log(this.pads)
    }
    isDropping=(e)=>{
        let event = e;
        event.stopPropagation();
        event.preventDefault();
        console.log("dropping");
    }
    render() {
        const singlePad=this.initialState.pads.map((pad)=>(
            <Pad
                key={"pad-"+pad.id}
                id={pad.id}
                color={pad.color}
                name={pad.name}
                handdleOnDragOver={this.onDragOver}
                handdleOnDrop={this.onDrop}
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
                    <tr id="designPaTableRowOne">
                        <td id="padOne" className="designPad" draggableId={this.initialState.pads.id}
                            isDragging={this.onDragOver}
                            isDropping={this.onDrop}>{singlePad}</td>
                        <td id="padTwo" className="designPad" 
                            isDragging={this.onDragOver}
                            isDropping={this.onDrop}>{singlePad}</td>
                    </tr>
                    <tr id="designPaTableRowTwo">
                        <td id="padThree" className="designPad" 
                            isDragging={this.onDragOver}
                            isDropping={this.onDrop}>{singlePad}</td>
                        <td id="padFour" className="designPad" 
                            isDragging={this.onDragOver}
                            isDropping={this.onDrop}>{singlePad}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default DesignBoard
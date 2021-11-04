import React, {Component} from "react"
import "./styles.css"
import PadInputColors from "../ComponentsHelpers/PadInputColors"
class PadInput extends Component {
    initialState={
        colors:[],
    }
    setTheColors(){
        this.setState({colors: PadInputColors.colors});
    }
    onDragStart=(e)=>{
        let event = e;
        event.stopPropagation();
        console.log("I am right now in PadInput.js dropping: "+this.initialState.colors.id)
        // const chosenColorPad=this.initialState.colors.map((colorPad)=>{
        //             if(this.colors.id===colorId){
        //                 return Object.assign({},colorPad,{
        //                     isChosen: true,
        //                 })
        //             }
        //         })
    }
    // onDragOver=(e)=>{
    //     let event = e;
    //     event.stopPropagation();
    //     event.preventDefault();
        
    //     console.log("onFileDrop");
    //     alert("dropped")
    // }
    // handleDrag=(colorId)=>{
    //     console.log("Dragging...")
    //     const chosenColorPad=this.initialState.colors.map((colorPad)=>{
    //         if(this.colors.id===colorId){
    //             return Object.assign({},colorPad,{
    //                 isChosen: true,
    //             })
    //         }
    //     })
    // }
    render() {
        // const padInputComponent=this.initialState.colors.map((colorPad)=>(
        //     <PadInput
        //         key={'color-'+colorPad.id}
        //         id={colorPad.id}
        //         color={colorPad.color}
        //         isChosen={colorPad.isChosen}
        //     />
        // ));
        return (
            <div id="padInputContainer" className="sameLineComponent">
                <table className="tableOfPadInput">
                    <tr id="rowOne">
                        <td class="child" id="one" 
                            // draggable onDrag={this.handleDrag}
                            draggable onDragStart={this.onDragStart}>
                                1
                        </td>
                        <td class="child" id="two" 
                            // draggable onDrag={this.handleDrag}
                            draggable onDragStart={this.onDragStart}>
                                2
                        </td>
                    </tr>
                    <tr id="rowTwo">
                        <td class="child" id="three"
                            // draggable onDrag={this.handleDrag}
                            draggable onDragStart={this.onDragStart}>
                                3
                        </td>
                        <td class="child" id="four" 
                            // draggable onDrag={this.handleDrag}
                            draggable onDragStart={this.onDragStart}>
                                4
                        </td>
                    </tr>
                    <tr id="rowThree">
                        <td class="child" id="five" 
                            // draggable onDrag={this.handleDrag}
                            draggable onDragStart={this.onDragStart}>
                            5
                        </td>
                        <td class="child" id="six" 
                            // draggable onDrag={this.handleDrag}
                            draggable onDragStart={this.onDragStart}
                            >
                            6
                        </td>
                    </tr>
                    <tr id="rowFour">
                        <td class="child" id="seven" 
                            // draggable onDrag={this.handleDrag}
                            draggable onDragStart={this.onDragStart}>
                            7
                        </td>
                        <td class="child" id="eight" 
                            // draggable onDrag={this.handleDrag}
                            draggable onDragStart={this.onDragStart}>
                            8
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default PadInput
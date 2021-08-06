import React,{Component} from 'react';

class Counter extends Component{
    state={
        count:1,
        // tags:["tag1","tag2","tag3"]

    };
    

        
      handleIncrement(){
         console.log("incremented");
      }
      render(){
        return(
            <div>
              {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}
           <button onClick={this.handleIncrement} className="btn btn-primary">Increment</button>
           {/* <ul>
               {this.state.tags.map(tag=><li key={tag}>{tag}</li>)}
           </ul> */}
            </div>
        );
    }
    // getBadgeClasses() {
    //     let classes = "btn btn-";
    //     classes = classes + (this.state.count === 0 ? "warning" : "primary");
    //     return classes;
    // }

    // formatCount(){
    //     const {count}=this.state;
    //     return count===0 ?"zero":count;
    // }
}
export default Counter;
import React, { Component } from 'react'
import List from './List'

export class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
            term:" ",
            items:[]
        };
    }
    onChange=(e)=>{
            this.setState({term:e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            term:'',
            items:[...this.state.items,this.state.term]
        })
    }
    render() {
        return (
            <div>
                <form className="App" onSubmit={this.onSubmit}>
                    <input value={this.state.term} onChange={this.onChange}/>
                    <button>Submit</button>
                </form>
                <List items={this.state.items} />   
            </div>
        );
    }
}

export default Todolist

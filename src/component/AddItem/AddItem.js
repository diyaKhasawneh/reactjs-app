import react, {Component} from 'react';
import './AddItem.css';


class AddItem extends Component{

    state = {
        name:'',
        age: ''
    }

handleChange = (e) =>{
    this.setState({
        [e.target.id]: e.target.value
    })
}
handleSubmit = (e) =>{
    e.preventDefault();
  if(e.target.name.value === ''){
       return false
   
} else{
      // console.log(this.state);
      this.props.addItem(this.state)
      this.setState({
          name:'',
          age: ''
  
      })
}
}


    render(){
return(
<div>
   <div>
<form onSubmit={this.handleSubmit}>
  <input type="text" placeholder="Enter name .." id="name" onChange={this.handleChange} value={this.state.name}/>
  <input type="number" placeholder="Enter age .." id="age" onChange={this.handleChange}value={this.state.age}/>
<input type="submit" value="Add"/>
</form>

   </div>
    
 </div>

)


    }
}

export default AddItem
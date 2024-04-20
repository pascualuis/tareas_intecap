import React, {Component} from "react";
import InputField from './InputField';
import style from '../style/StyleForm.module.css'

class  Myform extends Component{
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          apellido: '',
          edad: '',
          telefono: '',
          email: '',
        };
      }
    
      handleInputChange = (field, value) =>{
        this.setState({ [field]: value });
      };
      
      handleSubmit=(e)=> {
        e.preventDefault();
        // Logica de inicio de session
        console.log('Usuario:', this.state.username, 'Contra:', this.state.password);
      };



render(){
    return(
        <form className={style.LoginForm} onSubmit={this.handleSubmit}>
            <InputField label="Nombre:" type="text" value={this.state.username} onChange={(value) => this.handleInputChange('username', value)}/>
            <InputField label="Apellido:" type="text" value={this.state.apellido} onChange={(value) => this.handleInputChange('apellido', value)}/>
            <InputField label="Edad:" type="number" value={this.state.edad} onChange={(value) => this.handleInputChange('edad', value)}/>
            <InputField label="Telefono:" type="number" value={this.state.telefono} onChange={(value) => this.handleInputChange('telefono', value)}/>
            <InputField label="email:" type="email" value={this.state.email} onChange={(value) => this.handleInputChange('email', value)}/>
            <button type='submit'>Registrar</button>
        </form>
    );
}

};
export default Myform;
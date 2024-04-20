import React, {Component} from 'react';
import InputField from './InputField';
import style from '../style/LoginForm.module.css'

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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

  render() {
    return (
      <form className={style.LoginForm} onSubmit={this.handleSubmit}>
        <InputField
          label="Nombre de usuario"
          type="text"
          value={this.state.username}
          onChange={(value) => this.handleInputChange('username', value)}
        />
        <InputField
          label="Contraseña"
          type="password"
          value={this.state.password}
          onChange={(value) => this.handleInputChange('password', value)}
        />
        <button type='submit'>Iniciar sesión</button>

      </form>
    );
  }
}

export default LoginForm;
import { Divider } from '@mui/material';
import React from 'react'

class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellido: '',
            Email: '',
      };
      }
    
       
    
      nombreChange(nombre) {
        this.setState({nombre: nombre});
      }
      apellidoChange(apellido){
        this.setState({apellido: apellido})
      }

    
      submit = () =>{
        console.log(this.state);
      }
    
      render() {
        return (
          <form>
            <label>
              nombre:
              <input type="text" value={this.state.nombre} onChange={(event) => {this.nombreChange(event.target.value)}} />
            </label>
            <label>
              apellido:
              <input type="text" value={this.state.apellido} onChange={(event) => {this.apellidoChange(event.target.value)}} />
            </label>
            <div>
            <input type="submit" value="Submit" onClick={this.submit} />
            </div>
          </form>

        );
      }
    }
        



export default NameForm;
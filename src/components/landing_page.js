import React, { Component } from 'react';
import { graphql } from 'react-apollo';

//queries
import nullname from '../../queries/nullname';

class LandingPage extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      if (this.props.data.loading) return "Cargando";
      console.log(this.props.data);
      return "Ve la consola, si hay una coleccion vacia, carga la ruta registro";
    }
}
 
export default graphql(nullname)(LandingPage);
  
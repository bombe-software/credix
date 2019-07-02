
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { graphql } from 'react-apollo';
//import usuario_in from "./../../queries/usuario_in.navbar";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false,
      isUserSelected: false
    };
    this.logout = this.logout.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderNavEnd = this.renderNavEnd.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  handleClickUser() {
    this.setState(prevState => ({
      isUserSelected: !prevState.isUserSelected
    }));
  }

  logout() {
    /*this.props.mutate({
      refetchQueries: [{ query: usuario_in }]
    });
    */
  }

  renderNavEnd() {
      return (
        <div>
          <div className="navbar-item">
            <Link to="/login" className="navbar-item is-light" onClick={this.handleClick}>
              Iniciar sesión
            </Link>

            <Link to="/signup" className="navbar-item" onClick={this.handleClick}>
              Registro
            </Link >

          </div>
        </div>
      );
  }
  

  render() {
    return (
      //Logo de la navbar
      <div className='is-light'>
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="../../assets/img/demos_logo_21.png" alt="Demos" width="112" height="28" />
            </Link>

            <div className={this.state.isToggleOn ? 'navbar-burger burger is-active' : 'navbar-burger burger'} data-target="nav-demos-menu" onClick={this.handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="nav-demos-menu" className={this.state.isToggleOn ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start">

              <div className="navbar-item">

                <Link to="/elecciones" className="navbar-item" onClick={this.handleClick}>
                  Elecciones&nbsp;&nbsp;
                  <span className="icon has-text-info">
                    <i className="fa fa-line-chart" aria-hidden="true"></i>
                  </span>
                </Link>
                <Link to="/politicos" className="navbar-item" onClick={this.handleClick}>
                  Políticos&nbsp;&nbsp;
                  <span className="icon has-text-primary">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </span>
                </Link>
                <Link to="/nacional" className="navbar-item" onClick={this.handleClick}>
                  Nacional&nbsp;&nbsp;
                  <span className="icon has-text-success">
                    <i className="icon-demos-mexico"></i>
                  </span>
                </Link>
                <Link to="/busqueda" className="navbar-item" onClick={this.handleClick}>
                  Buscar&nbsp;&nbsp;
                  <span className="icon has-text-warning">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </span>
                </Link>
                <Link to="/denuncia" className="navbar-item" onClick={this.handleClick}>
                  Denuncia&nbsp;&nbsp;
                  <span className="icon has-text-danger">
                    <i className="fa fa-bullhorn" aria-hidden="true"></i>
                  </span>
                </Link>
              </div>

            </div>
            <div className="navbar-end">
              {this.renderNavEnd()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
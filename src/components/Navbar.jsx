import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import myimg from "./../images/Kabardaar.png";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      flag: true,
    };
  }
  languagebtn() {
    if (this.state.flag) {
      this.setState({ flag: false });
      this.props.changeLanguage("en");
    } else {
      this.setState({ flag: true });
      this.props.changeLanguage("hi");
    }
  }
  postData(e) {
    e.preventDefault();
    this.props.changeSearch(this.state.search);
    this.setState({ search: "" });
  }

  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark background rounded-3'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <img src={myimg} className='logo' width={120} alt='Kabardaar' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <NavLink
                  className='nav-link  text-light'
                  aria-current='page'
                  to='/All'
                  onClick={() => this.props.changeSearch("")}
                >
                  All
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link  text-light'
                  to='/Politics'
                  onClick={() => this.props.changeSearch("")}
                >
                  Politics
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link  text-light'
                  to='/Education'
                  onClick={() => this.props.changeSearch("")}
                >
                  Education
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link  text-light'
                  to='/Science'
                  onClick={() => this.props.changeSearch("")}
                >
                  Science
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link  text-light'
                  to='/Technology'
                  onClick={() => this.props.changeSearch("")}
                >
                  Technology
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  className='nav-link  text-light'
                  to='/Crime'
                  onClick={() => this.props.changeSearch("")}
                >
                  Crime
                </NavLink>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link  text-light dropdown-toggle'
                  href='#'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Other
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/Sports'
                      onClick={() => this.props.changeSearch("")}
                    >
                      Sports
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/Cricket'
                      onClick={() => this.props.changeSearch("")}
                    >
                      Cricket
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/Olympics'
                      onClick={() => this.props.changeSearch("")}
                    >
                      Olympics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/Entertainment'
                      onClick={() => this.props.changeSearch("")}
                    >
                      Entertainment
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/Health'
                      onClick={() => this.props.changeSearch("")}
                    >
                      Health
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/Economics'
                      onClick={() => this.props.changeSearch("")}
                    >
                      Economics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/World'
                      onClick={() => this.props.changeSearch("")}
                    >
                      World
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/India'
                      onClick={() => this.props.changeSearch("")}
                    >
                      India
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/Corporate'
                      onClick={() => this.props.changeSearch("")}
                    >
                      Corporate
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className='dropdown-item'
                      to='/IT'
                      onClick={() => this.props.changeSearch("")}
                    >
                      IT
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <div class='switch'>
                  <input
                    id='language-toggle'
                    class='check-toggle check-toggle-round-flat'
                    type='checkbox'
                    onClick={() => {
                      this.languagebtn();
                    }}
                  />
                  <label for='language-toggle'></label>
                  <span class='on'>हिन्दी</span>
                  <span class='off'>ENG</span>
                </div>
              </li>
            </ul>
            <form
              className='d-flex'
              role='search'
              onSubmit={(e) => this.postData(e)}
            >
              <input
                className='form-control me-2'
                type='search'
                name='search'
                value={this.state.search}
                onChange={(e) => this.setState({ search: e.target.value })}
                placeholder='Search'
                aria-label='Search'
              />
              <button className='btn btn-outline-light' type='submit'>
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

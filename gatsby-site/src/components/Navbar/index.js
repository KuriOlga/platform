import React from 'react';
import Link from 'gatsby-link';
import Scrollchor from 'react-scrollchor';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import "./navbar.css";


export default class ReactNavbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isMainPage: this.props.children.length > 4
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {

    return (
      <div className="sticky-nav">
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <svg width="145" height="50" viewBox="0 0 145 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="144" height="46" fill-opacity="0" transform="translate(1 2)"/>
          <path d="M26.1152 38.11V11.89L51 16.4785V34.0459L26.1152 38.11Z" fill="#0111FC"/>
          <path d="M1 48V2L47.083 10.05V40.87L1 48Z" stroke="black" stroke-width="2"/>
          <path d="M69.12 29.72C69.856 29.72 70.48 29.656 70.992 29.528C71.504 29.4 71.944 29.224 72.312 29L72.984 31.4C72.6 31.624 72.056 31.824 71.352 32C70.648 32.176 69.792 32.264 68.784 32.264C67.648 32.264 66.6 32.088 65.64 31.736C64.68 31.368 63.848 30.848 63.144 30.176C62.456 29.488 61.92 28.664 61.536 27.704C61.152 26.728 60.96 25.632 60.96 24.416C60.96 23.232 61.144 22.16 61.512 21.2C61.896 20.24 62.424 19.424 63.096 18.752C63.784 18.064 64.616 17.536 65.592 17.168C66.568 16.8 67.656 16.616 68.856 16.616C69.88 16.616 70.72 16.712 71.376 16.904C72.048 17.096 72.592 17.304 73.008 17.528L72.264 19.952C71.848 19.728 71.384 19.544 70.872 19.4C70.376 19.24 69.816 19.16 69.192 19.16C68.536 19.16 67.92 19.256 67.344 19.448C66.768 19.64 66.264 19.952 65.832 20.384C65.4 20.8 65.056 21.344 64.8 22.016C64.56 22.672 64.44 23.472 64.44 24.416C64.44 25.328 64.56 26.12 64.8 26.792C65.04 27.448 65.368 27.992 65.784 28.424C66.216 28.856 66.712 29.184 67.272 29.408C67.848 29.616 68.464 29.72 69.12 29.72ZM81.5741 16.616C82.6461 16.616 83.6381 16.792 84.5501 17.144C85.4621 17.496 86.2461 18.008 86.9021 18.68C87.5581 19.336 88.0701 20.152 88.4381 21.128C88.8221 22.104 89.0141 23.216 89.0141 24.464C89.0141 25.68 88.8221 26.768 88.4381 27.728C88.0541 28.688 87.5261 29.504 86.8541 30.176C86.1821 30.848 85.3821 31.368 84.4541 31.736C83.5421 32.088 82.5501 32.264 81.4781 32.264C80.4061 32.264 79.4141 32.096 78.5021 31.76C77.5901 31.408 76.8061 30.904 76.1501 30.248C75.4941 29.576 74.9741 28.76 74.5901 27.8C74.2221 26.824 74.0381 25.712 74.0381 24.464C74.0381 23.248 74.2301 22.16 74.6141 21.2C74.9981 20.224 75.5261 19.4 76.1981 18.728C76.8701 18.04 77.6621 17.52 78.5741 17.168C79.5021 16.8 80.5021 16.616 81.5741 16.616ZM77.5181 24.464C77.5181 25.36 77.6221 26.144 77.8301 26.816C78.0541 27.472 78.3501 28.024 78.7181 28.472C79.0861 28.904 79.5101 29.232 79.9901 29.456C80.4861 29.664 81.0141 29.768 81.5741 29.768C82.1181 29.768 82.6301 29.664 83.1101 29.456C83.6061 29.232 84.0301 28.904 84.3821 28.472C84.7341 28.024 85.0141 27.472 85.2221 26.816C85.4301 26.144 85.5341 25.36 85.5341 24.464C85.5341 23.536 85.4221 22.736 85.1981 22.064C84.9901 21.392 84.7021 20.84 84.3341 20.408C83.9661 19.96 83.5341 19.632 83.0381 19.424C82.5581 19.216 82.0381 19.112 81.4781 19.112C80.9181 19.112 80.3981 19.224 79.9181 19.448C79.4381 19.672 79.0221 20.008 78.6701 20.456C78.3181 20.888 78.0381 21.44 77.8301 22.112C77.6221 22.784 77.5181 23.568 77.5181 24.464ZM91.6326 16.88H94.9206V29.408H101.017V32H91.6326V16.88ZM106.843 26.096H110.683L109.987 24.08C109.763 23.456 109.555 22.832 109.363 22.208C109.171 21.568 108.987 20.928 108.811 20.288H108.763C108.587 20.896 108.395 21.52 108.187 22.16C107.979 22.784 107.763 23.424 107.539 24.08L106.843 26.096ZM107.131 16.88H110.539L116.131 32H112.651L111.475 28.52H106.099L104.923 32H101.491L107.131 16.88ZM118.047 16.88H123.783C124.631 16.88 125.375 17.008 126.015 17.264C126.671 17.504 127.215 17.84 127.647 18.272C128.079 18.688 128.399 19.184 128.607 19.76C128.831 20.32 128.943 20.928 128.943 21.584C128.943 22.192 128.847 22.736 128.655 23.216C128.479 23.68 128.247 24.088 127.959 24.44C127.687 24.776 127.375 25.064 127.023 25.304C126.687 25.528 126.359 25.712 126.039 25.856L129.735 32H125.967L123.063 26.432H121.311V32H118.047V16.88ZM121.311 23.912H122.607C123.471 23.912 124.175 23.736 124.719 23.384C125.279 23.032 125.559 22.448 125.559 21.632C125.559 20.912 125.335 20.36 124.887 19.976C124.455 19.576 123.815 19.376 122.967 19.376H121.311V23.912ZM131.758 32V16.88H135.046V23.24L140.254 16.88H144.334L138.694 23.48L144.814 32H140.758L136.294 25.544L135.046 26.864V32H131.758Z" fill="black"/>
          </svg>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.isMainPage ?
                <NavItem>
                  <Scrollchor to="partners" className="nav-link">
                    Partners
                  </Scrollchor>
                </NavItem>
              : <NavItem>
                  <Link to="../#partners" className="nav-link">
                    Partners
                  </Link>
                </NavItem> }
              {this.state.isMainPage ?
                <NavItem>
                  <Scrollchor to="#team" className="nav-link">
                    Team
                  </Scrollchor>
                </NavItem>
              : <NavItem>
                  <Link to="../#team" className="nav-link">
                    Team
                  </Link>
                </NavItem> }
              {this.state.isMainPage ?
                <NavItem>
                    <Scrollchor to="#projects" className="nav-link">
                      Projects
                    </Scrollchor>
                  </NavItem>
                :<UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Projects
                    </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem>
                          <Link to="/projects/phase0" className="nav-link">Phase Zero</Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="/projects/unstack" className="nav-link">Unstack</Link>
                        </DropdownItem>
                      </DropdownMenu>
                  </UncontrolledDropdown> }

                {/* <NavItem>
                <button className="signin-button">Sign in</button>
                </NavItem> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

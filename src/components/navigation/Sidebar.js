import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

const StyledSideNav = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 75px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 0em;      /* Stay at the top */
    background-color: rgb(50, 163, 230);
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
    margin-bottom: 5em;
`;

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: props.location.pathname,
            items: [
                {
                  path: '/', 
                  name: 'Home',
                  css: 'fa fa-fw fa-home',
                  key: 1 
                },
                {
                  path: '/NoticeBoard',
                  name: 'NoticeBoard',
                  css: 'fa fas fa-thumbtack	',
                  key: 3
                },
                {
                    path: '/Complaint',
                    name: 'Complaint',
                    css: 'fa fas fa-exclamation',
                    key: 3
                 },
                 {
                    path: '/Leave',
                    name: 'Leave',
                    css: 'fa fa-suitcase',
                    key: 3
                    // popover: 'Leave'
                 },
                 {
                    path: '/Register',
                    name: 'Register',
                    css: 'fa fa-fw fa-user',
                    key: 2
                  },
              ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path });
        console.log(this);
    }

    render() {
        const { items, activePath } = this.state;
        return(
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem 
                                path={item.path}
                                name={item.name}
                                css={item.css}
                                onItemClick={this.onItemClick}
                                active={item.path === activePath}
                                key={item.key}
                                popover={item.popover}
                            />
                        );
                    })
                }
            </StyledSideNav>
        );
    }
}

const RouterSideNav = withRouter(SideNav);

const StyledNavItem = styled.div`
    height: 70px;
    width: 75px; /* width must be same size as NavBar to center */
    text-align: center; /* Aligns <a> inside of NavIcon div */
    margin-bottom: 0;   /* Puts space between NavItems */
    a {
        font-size: 2.7em;
        color: ${(props) => props.active ? "white" : "black"};
        :hover {
            opacity: 0.7;
            text-decoration: none; /* Gets rid of underlining of icons */
        }  
    }
`;

class NavItem extends React.Component {
    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

    render() {
        const { active } = this.props;
        return(
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} data-toggle={'tooltip'} title={"Hooray!"} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>
        );
    }
}

const NavIcon = styled.div`

`;

export default class Sidebar extends React.Component {
    render() {
        return (
            <RouterSideNav></RouterSideNav>
        );
    }
}
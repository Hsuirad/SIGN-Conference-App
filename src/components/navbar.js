import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import {sitename} from '../resources/importantinfo.json'

// TODO: CHANGE THE SITE NAME TO THE ACTUAL SITE WHEN YOU FIND IT OUT

export default class NavBar extends Component{

    state = {
        searchVal: ''
    }

    handleSearch = () => {
        let searchTerm = this.state.searchVal;
        console.log('https://www.google.com/search?q=site:'+sitename+'+'+searchTerm.split(' ').join('+'));
        window.location.href = 'https://www.google.com/search?q=site:'+sitename+'+'+searchTerm.split(' ').join('+');
    }

    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#">Disabled</a>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" onInput = {e => this.setState({searchVal: e.target.value})} placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick = {() => this.handleSearch()}>Search</button>
                    </form>
                </div>
                </nav>
            </div>
        )
    }
}
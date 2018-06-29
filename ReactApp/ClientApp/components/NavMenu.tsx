import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className=''>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                        <Link className='navbar-brand' to={ '/' }>ReactApp</Link>
                </div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/projects' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/about' } activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/contact'} activeClassName='active'>
                                <span className='glyphicon glyphicon-th-list'></span> Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

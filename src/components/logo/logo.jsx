import React from 'react';
import './logo.css';

export default class Logo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={'logo'}>
            <a href="./" data-reactid=".0.3.2.0">Newton</a>          
            </div>
        );
    }
}
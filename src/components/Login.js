import React, {Component} from 'react'
//import { render } from '@testing-library/react'

class Registration extends Component{
    render() {
            constructor(props) {
              super(props);
              this.sayHello = this.sayHello.bind(this);
            }
            sayHello() {
                alert('Hello!');
              }
        return (
        <div>
            <h1> Class component using jsx </h1>
            {this.props.children} <p> sample</p>
            <button onClick>

            </button>
            </div>
        );
    }
    
}

export default Registration
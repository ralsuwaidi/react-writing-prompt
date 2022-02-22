import React, { Component } from 'react';
import Heading from './body/Heading';
import Cards from './body/Card';


function Container(props) {
    return (
        <div className="mx-auto max-w-7xl">
            {props.children}
        </div>
    )
}

class Body extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container >
                    <Heading title="Week" />
                    <div className='mx-auto my-6'>
                        <Cards />
                    </div>
                </Container>
            </div>
        );
    }
}

export default Body;

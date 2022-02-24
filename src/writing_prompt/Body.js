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
        this.state = {selected: ''};
        this.selectPrompt = this.selectPrompt.bind(this);
    }

    selectPrompt(index) {
        this.setState(
            {selected: index}
        )
      }



    render() {
        return (
            <div>
                <Container >
                    <Heading title="Week" />
                    <div className='mx-auto my-6'>
                        <Cards onButtonClick={this.selectPrompt} selected={this.state.selected} />
                    </div>
                </Container>
            </div>
        );
    }
}

export default Body;

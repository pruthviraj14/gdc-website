import React, { Component } from 'react';

class Developers extends Component {
    constructor() {
        super();
        this.state = {
            developers: []
        };
    }

    componentDidMount() {
        fetch('/api/developers')
            .then(res => res.json())
            .then(developers => this.setState({ developers }))
            .catch(err => console.log(err)); 
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.developers.map(developer => <li key={ developer.id }>{ developer.name }</li>)
                    }
                </ul>
            </div>
        );
    }    
}

export default Developers;
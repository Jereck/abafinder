import React, { Component } from 'react';
import TherapiesList from '../../components/TherapiesList'
import Intro from '../../components/Intro';

class Therapies extends Component {
    state = {
        therapies: [],
        therapyName: ''
    }

    // componentDidMount() {
    //     fetch(`http://www.HIPAASpace.com/api/NPI/search?q=Washington&rt=json&token=E4FE2874C5884A7680596667339941AB2CD2C60EE6A6483086FE8CFC0EF25923`)
    //         .then(response => response.json())
    //         .then(json => {
    //             for (var i = 0; i < json.NPI.length; i++) {
    //                 this.setState({
    //                     therapies: [...this.state.therapies, json.NPI[i]]
    //                 })
    //                 console.log(json.NPI[i])
    //             }
    //         })
    // }

    onTherapyInpuyChange = e => {
        this.setState({ therapyName: e.target.value });

        fetch(`http://www.HIPAASpace.com/api/NPI/search?q=${e.target.value}&rt=json&token=E4FE2874C5884A7680596667339941AB2CD2C60EE6A6483086FE8CFC0EF25923`)
            .then(response => response.json())
            .then(json => {
                for (var i = 0; i < json.NPI.length; i++) {
                    this.setState({
                        therapies: [...this.state.therapies, json.NPI[i]]
                    })
                    console.log(json.NPI[i])
                }
            })
    }

    render() {
        const { therapies, therapyName } = this.state;
        return (
            <div>
                <Intro message="Here you can find therapies in your area" />
                <div>
                    <input 
                        value={therapyName}
                        type="text" 
                        onChange={this.onTherapyInpuyChange} 
                    />
                </div>
                <TherapiesList list={this.state.therapies} />
                The length is - {this.state.therapies.length}
            </div>
        )
    }
}

export default Therapies;
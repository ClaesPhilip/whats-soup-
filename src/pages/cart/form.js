import React, { Component } from 'react';

import './time.css';

export default class FormDataComponent extends Component {
    

    constructor() {
        super();

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            address: '',
            phone: ''
        }
    }

    // Form Values
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeAddress(e) {
        this.setState({ address: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }


    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                address: this.userData.address,
                phone: this.userData.phone
            })
        } else {
            this.setState({
                name: '',
                email: '',
                address: '',
                phone: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.props)
    }


    render() {
        return (
            <div className="container-form">
                <h3 className='personal-detail'>Personal Details</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                       <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="address" className="form-control" value={this.state.address} onChange={this.onChangeAddress} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';

import axios from 'axios';

class AddAppointments extends Component {
  constructor() {
    super();
    this.state = {
      patientName: '',
      appointmentDate: '',
      aptTime: '',
      comments: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    let tempApt = {
      patientName: this.state.patientName,
      appointmentDate: this.state.appointmentDate + ' ' + this.state.aptTime,
      comments: this.state.comments
    };

    axios.post('https://outpatient-api.herokuapp.com/outpatient/', tempApt).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

    this.props.addAppointment(tempApt);

    this.setState({
      patientName: '',
      appointmentDate: '',
      aptTime: '',
      comments: ''
    });
    this.props.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? 'fadeIn' : 'add-appointment')
        }
      >
        <div
          className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Add Appointment
        </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleAdd}>
                    <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="patientName"
              >
                Patient Name
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="patientName"
                  placeholder="Patient's Name"
                  required
                  value={this.state.patientName}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="appointmentDate"
              >
                Date
              </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="appointmentDate"
                  id="appointmentDate"
                  required
                  value={this.state.appointmentDate}
                  onChange={this.handleChange}
                />
              </div>
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="aptTime"
              >
                Time
              </label>
              <div className="col-md-4">
                <input
                  type="time"
                  className="form-control"
                  name="aptTime"
                  id="aptTime"
                  value={this.state.aptTime}
                  required
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label className="col-md-2 text-md-right" htmlFor="comments">
                Apt. Notes
              </label>
              <div className="col-md-10">
                <textarea
                  className="form-control"
                  rows="4"
                  cols="50"
                  name="comments"
                  id="comments"
                  placeholder="Appointment Notes"
                  value={this.state.comments}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row mb-0">
              <div className="offset-md-2 col-md-10">
                <button
                  type="submit"
                  className="btn btn-primary d-block ml-auto"
                >
                  Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddAppointments;

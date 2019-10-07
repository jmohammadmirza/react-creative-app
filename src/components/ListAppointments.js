import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';

class ListAppointments extends Component {
  render() {

    return (
             <table id="table" className="table table-bordered table-hover">
                <thead>
                    <tr>
                       <th>
                            <div className="th-inner ">Patient Name</div>
                            <div className="fht-cell"></div>
                        </th>
                        <th>
                            <div className="th-inner ">Appointment Date</div>
                            <div className="fht-cell"></div>
                        </th>
                        <th>
                            <div className="th-inner ">Comments</div>
                            <div className="fht-cell"></div>
                        </th>
                    </tr>
                </thead>
                {this.props.appointments.map(item => (
                    <tbody key={item.id}>
                    {/* To avoid Warning: Each child in a list should have a unique "key" prop.*/}
                        <tr >
                            <td >{item.patientName}</td>
                            <td >{item.appointmentDate}</td>
                            <td >{item.comments}</td>
                        </tr>
                    </tbody>
                ))
                }
            </table>
    );
  }
}

export default ListAppointments;

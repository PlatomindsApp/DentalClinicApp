import { useState } from 'react';
import { doctors } from '../pages/dummyData';

const timeSlots = ['10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment booked with ${selectedDoctor} at ${selectedTimeSlot}`);
  };

  return (
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="doctor">Select a doctor:</label>
          <select 
            id="doctor" 
            name="doctor" 
            value={selectedDoctor} 
            onChange={(e) => setSelectedDoctor(e.target.value)}
          >
            <option value="">Select a doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.id} value={doctor.name}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeSlot">Select a time slot:</label>
          <select 
            id="timeSlot" 
            name="timeSlot" 
            value={selectedTimeSlot} 
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
          >
            <option value="">Select a time slot</option>
            {timeSlots.map(slot => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
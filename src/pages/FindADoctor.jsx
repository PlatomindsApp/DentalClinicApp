import { useState } from 'react';
import { doctors } from '../pages/dummyData';

const FindADoctor = () => {
  const [query, setQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = doctors.filter(doctor => 
      doctor.name.toLowerCase().includes(query.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(query.toLowerCase()) ||
      doctor.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDoctors(filtered);
  };

  return (
    <div>
      <h1>Find a Doctor</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search for a doctor" 
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {filteredDoctors.map(doctor => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.specialty} - {doctor.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FindADoctor;
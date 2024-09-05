// src/components/FlightSearchForm.tsx
import React, { useState } from 'react';
import { FaPlaneDeparture, FaExchangeAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FlightSearchForm: React.FC = () => {
  // State management for form fields
  const [tripType, setTripType] = useState<'One Way' | 'Round Trip' | 'Multi City'>('One Way');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [travellers, setTravellers] = useState('1 Adult');
  const [travelClass, setTravelClass] = useState('Economy');
  const [specialFare, setSpecialFare] = useState<'Regular' | 'Armed Forces' | 'Student' | 'Senior Citizen' | 'Doctors & Nurses'>('Regular');

  // Handle input changes
  const handleTripTypeChange = (type: 'One Way' | 'Round Trip' | 'Multi City') => setTripType(type);
  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => setFrom(e.target.value);
  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => setTo(e.target.value);
  const handleTravellersChange = (e: React.ChangeEvent<HTMLInputElement>) => setTravellers(e.target.value);
  const handleTravelClassChange = (e: React.ChangeEvent<HTMLSelectElement>) => setTravelClass(e.target.value);
  const handleSpecialFareChange = (fare: 'Regular' | 'Armed Forces' | 'Student' | 'Senior Citizen' | 'Doctors & Nurses') => setSpecialFare(fare);

  // Handle form submission
  const handleSearch = () => {
    const searchDetails = {
      tripType,
      from,
      to,
      departureDate,
      returnDate: tripType === 'Round Trip' ? returnDate : null,
      travellers,
      travelClass,
      specialFare,
    };

    console.log('Searching with details:', searchDetails);

    
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      {/* Main Container */}
      <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex space-x-4 items-center mb-4">
          <button onClick={() => handleTripTypeChange('One Way')} className={`py-1 px-4 rounded-full ${tripType === 'One Way' ? 'bg-black text-white' : 'text-gray-600'}`}>One Way</button>
          <button onClick={() => handleTripTypeChange('Round Trip')} className={`py-1 px-4 rounded-full ${tripType === 'Round Trip' ? 'bg-black text-white' : 'text-gray-600'}`}>Round Trip</button>
          <button onClick={() => handleTripTypeChange('Multi City')} className={`py-1 px-4 rounded-full ${tripType === 'Multi City' ? 'bg-black text-white' : 'text-gray-600'}`}>Multi City</button>
        </div>

        {/* Inputs Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* From Input */}
          <div className="relative col-span-1 md:col-span-2 flex items-center bg-white rounded-lg p-4 shadow-inner">
            <FaPlaneDeparture className="text-gray-400 mr-2" />
            <input type="text" value={from} onChange={handleFromChange} placeholder="From" className="bg-transparent outline-none text-lg font-semibold" />
          </div>

          {/* Exchange Icon */}
          <div className="flex justify-center items-center">
            <FaExchangeAlt className="text-gray-400" />
          </div>

          {/* To Input */}
          <div className="relative col-span-1 md:col-span-2 flex items-center bg-white rounded-lg p-4 shadow-inner">
            <FaPlaneDeparture className="text-gray-400 mr-2" />
            <input type="text" value={to} onChange={handleToChange} placeholder="To" className="bg-transparent outline-none text-lg font-semibold" />
          </div>

          {/* Departure Date Picker */}
          <div className="relative flex items-center bg-white rounded-lg p-4 shadow-inner">
            <FaCalendarAlt className="text-gray-400 mr-2" />
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              dateFormat="dd MMM yyyy"
              className="bg-transparent outline-none text-lg font-semibold"
              placeholderText="Departure"
            />
          </div>

          {/* Return Date Picker */}
          {tripType === 'Round Trip' && (
            <div className="relative flex items-center bg-white rounded-lg p-4 shadow-inner">
              <FaCalendarAlt className="text-gray-400 mr-2" />
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                dateFormat="dd MMM yyyy"
                className="bg-transparent outline-none text-lg font-semibold"
                placeholderText="Return"
              />
            </div>
          )}

          {/* Travellers and Class Input */}
          <div className="relative flex items-center bg-white rounded-lg p-4 shadow-inner">
            <FaUser className="text-gray-400 mr-2" />
            <input type="text" value={travellers} onChange={handleTravellersChange} placeholder="Travellers" className="bg-transparent outline-none text-lg font-semibold" />
          </div>

          {/* Search Button */}
          <div className="relative col-span-1 flex items-center justify-center">
            <button onClick={handleSearch} className="bg-black text-yellow-500 py-3 px-8 rounded-full flex items-center">
              <FaPlaneDeparture className="mr-2" />
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Special Fares Section */}
        <div className="flex items-center space-x-4 mt-4">
          <p className="text-sm font-semibold">Special Fares (Optional):</p>
          <div className="flex items-center space-x-2">
            {['Regular', 'Armed Forces', 'Student', 'Senior Citizen', 'Doctors & Nurses'].map((fare) => (
              <label key={fare} className="flex items-center">
                <input type="radio" name="fare" value={fare} checked={specialFare === fare} onChange={() => handleSpecialFareChange(fare as any)} className="mr-1" />
                {fare}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;

import React, { useState } from 'react';
import { FaPlaneDeparture } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FlightSearchForm: React.FC = () => {
  const [tripType, setTripType] = useState<'One Way' | 'Round Trip' | 'Multi City'>('One Way');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [travellers, setTravellers] = useState('1 Adult');
  const [travelClass, setTravelClass] = useState<'Economy' | 'Business' | 'First Class'>('Economy');
  const [specialFare, setSpecialFare] = useState<'Regular' | 'Armed Forces' | 'Student' | 'Senior Citizen' | 'Doctors & Nurses'>('Regular');
  
  // Dropdown for recent searches and popular cities
  const [fromDropdownOpen, setFromDropdownOpen] = useState(false);
  const [toDropdownOpen, setToDropdownOpen] = useState(false);
  const [filteredFromOptions, setFilteredFromOptions] = useState<string[]>([]);
  const [filteredToOptions, setFilteredToOptions] = useState<string[]>([]);

  const recentSearches = ['New Delhi, India (DEL)', 'Mumbai, India (BOM)', 'Bangalore, India (BLR)'];
  const popularCities = ['New Delhi, India (DEL)', 'Mumbai, India (BOM)', 'Chennai, India (MAA)', 'Kolkata, India (CCU)'];

  // Handle the "From" input changes
  const handleFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFrom(value);
    setFromDropdownOpen(true);

    const options = [...recentSearches, ...popularCities].filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredFromOptions(options);
  };

  // Handle the "To" input changes
  const handleToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTo(value);
    setToDropdownOpen(true);

    const options = [...recentSearches, ...popularCities].filter(option =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredToOptions(options);
  };

  const handleOptionClick = (setField: React.Dispatch<React.SetStateAction<string>>, option: string, setDropdown: React.Dispatch<React.SetStateAction<boolean>>) => {
    setField(option);
    setDropdown(false); // Close the dropdown once an option is selected
  };

  const handleSearch = () => {
    const searchDetails = {
      tripType,
      from,
      to,
      departureDate,
      returnDate,
      travellers,
      travelClass,
      specialFare,
    };
    console.log('Searching with details:', searchDetails);
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-lg max-w-5xl mx-auto">
        <div className="flex space-x-4 items-center mb-4">
          {/* Trip Type Radio Buttons */}
          {['One Way', 'Round Trip', 'Multi City'].map((type) => (
            <label className="flex items-center space-x-2" key={type}>
              <input
                type="radio"
                name="tripType"
                value={type}
                checked={tripType === type}
                onChange={() => setTripType(type as any)}
                className="mr-1"
              />
              <span>{type}</span>
            </label>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
          {/* From Input with Dropdown */}
          <div className="relative col-span-1 flex flex-col bg-white rounded-lg p-4 shadow-inner">
            <label className="font-semibold mb-1">From</label>
            <input
              type="text"
              value={from}
              onChange={handleFromChange}
              onFocus={() => setFromDropdownOpen(true)} // Open dropdown on focus
              placeholder="From"
              className="bg-transparent outline-none text-lg"
            />
            {/* Dropdown */}
            {fromDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-10">
                {/* Recent Searches */}
                <div className="p-2 border-b">
                  <p className="text-xs font-semibold text-gray-600">Recent Searches</p>
                  {recentSearches.map((search) => (
                    <div
                      key={search}
                      onClick={() => handleOptionClick(setFrom, search, setFromDropdownOpen)}
                      className="cursor-pointer hover:bg-gray-200 p-2 text-sm"
                    >
                      {search}
                    </div>
                  ))}
                </div>
                {/* Popular Cities */}
                <div className="p-2">
                  <p className="text-xs font-semibold text-gray-600">Popular Cities</p>
                  {filteredFromOptions.length > 0 ? (
                    filteredFromOptions.map((city) => (
                      <div
                        key={city}
                        onClick={() => handleOptionClick(setFrom, city, setFromDropdownOpen)}
                        className="cursor-pointer hover:bg-gray-200 p-2 text-sm"
                      >
                        {city}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-sm text-gray-500">No matches found</div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* To Input with Dropdown */}
          <div className="relative col-span-1 flex flex-col bg-white rounded-lg p-4 shadow-inner">
            <label className="font-semibold mb-1">To</label>
            <input
              type="text"
              value={to}
              onChange={handleToChange}
              onFocus={() => setToDropdownOpen(true)} // Open dropdown on focus
              placeholder="To"
              className="bg-transparent outline-none text-lg"
            />
            {/* Dropdown */}
            {toDropdownOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-10">
                {/* Recent Searches */}
                <div className="p-2 border-b">
                  <p className="text-xs font-semibold text-gray-600">Recent Searches</p>
                  {recentSearches.map((search) => (
                    <div
                      key={search}
                      onClick={() => handleOptionClick(setTo, search, setToDropdownOpen)}
                      className="cursor-pointer hover:bg-gray-200 p-2 text-sm"
                    >
                      {search}
                    </div>
                  ))}
                </div>
                {/* Popular Cities */}
                <div className="p-2">
                  <p className="text-xs font-semibold text-gray-600">Popular Cities</p>
                  {filteredToOptions.length > 0 ? (
                    filteredToOptions.map((city) => (
                      <div
                        key={city}
                        onClick={() => handleOptionClick(setTo, city, setToDropdownOpen)}
                        className="cursor-pointer hover:bg-gray-200 p-2 text-sm"
                      >
                        {city}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-sm text-gray-500">No matches found</div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="relative flex flex-col bg-white rounded-lg p-4 shadow-inner">
            <label className="font-semibold mb-1">Departure</label>
            <DatePicker
              selected={departureDate}
              onChange={(date) => setDepartureDate(date)}
              dateFormat="dd MMM yyyy"
              className="bg-transparent outline-none text-lg"
            />
          </div>

          <div className="relative flex flex-col bg-white rounded-lg p-4 shadow-inner">
            <label className="font-semibold mb-1">Return</label>
            <DatePicker
              selected={returnDate}
              onChange={(date) => setReturnDate(date)}
              dateFormat="dd MMM yyyy"
              className="bg-transparent outline-none text-lg"
              disabled={tripType === 'One Way'}
            />
          </div>

          <div className="relative flex flex-col md:flex-row bg-white rounded-lg p-4 shadow-inner col-span-2">
            <div className="flex flex-col md:w-1/2 md:pr-2">
              <label className="font-semibold mb-1">Travellers</label>
              <input
                type="text"
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
                placeholder="Travellers"
                className="bg-transparent outline-none text-lg"
              />
            </div>
            <div className="flex flex-col md:w-1/2 md:pl-2 mt-4 md:mt-0">
              <label className="font-semibold mb-1">Class</label>
              <select
                id="travelClass"
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value as any)}
                className="bg-transparent outline-none text-lg"
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First Class">First Class</option>
              </select>
            </div>
          </div>
        </div>

        {/* Special Fares Section */}
<div className="relative flex flex-col md:flex-row bg-transparent rounded-lg p-4 shadow-inner col-span-2">
  <label className="font-semibold mb-1 md:w-1/6">Special Fares</label>
  <div className="flex flex-wrap md:flex-nowrap md:w-5/6">
    {['Regular', 'Armed Forces', 'Student', 'Senior Citizen', 'Doctors & Nurses'].map((fare) => (
      <label key={fare} className="flex items-center mr-4 mb-2 md:mb-0">
        <input
          type="radio"
          value={fare}
          checked={specialFare === fare}
          onChange={() => setSpecialFare(fare as any)}
          className="mr-1"
        />
        <span>{fare}</span>
      </label>
    ))}
  </div>
</div>

        <div className="flex justify-end mt-4">
          <button
            onClick={handleSearch}
            className="bg-black text-yellow-500 py-3 px-8 rounded-full flex items-center"
          >
            <FaPlaneDeparture className="mr-2" />
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightSearchForm;

import React, { useState, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { format } from 'date-fns';
import { FiUser, FiMail, FiPhone, FiTruck, FiCalendar, FiClock, FiFileText, FiChevronDown, FiCheck } from 'react-icons/fi';
import { Listbox, Transition } from '@headlessui/react';

export default function AddAppointment({ appointmentToEdit, onSuccess, onCancel }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(appointmentToEdit || {
    full_name: '',
    email: '',
    phone: '',
    vehicle_make: '',
    vehicle_model: '',
    car_number: '',
    service_type: ['maintenance'], // Initialize as array
    region: 'greater-accra', // Default region
    branch: '', // Will be set based on region
    appointment_date: format(new Date(), 'yyyy-MM-dd'),
    appointment_time: '09:00'
  });
  
  // Available regions with their branches
  const regionsData = [
    {
      value: 'greater-accra',
      label: 'Greater Accra',
      branches: [
        { value: 'accra', label: 'Accra Branch' },
        { value: 'legon', label: 'Legon Branch' },
        { value: 'motoway', label: 'Motoway Branch' }
      ]
    },
    {
      value: 'ashanti',
      label: 'Ashanti',
      branches: [
        { value: 'kumasi', label: 'Kumasi Branch' },
        { value: 'tamale', label: 'Tamale Branch' }
      ]
    },
    {
      value: 'western',
      label: 'Western',
      branches: [
        { value: 'takoradi', label: 'Takoradi Branch' }
      ]
    }
  ];
  
  // Get branches for the selected region
  const selectedRegion = regionsData.find(r => r.value === formData.region) || { branches: [] };
  const branches = selectedRegion.branches || [];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const serviceTypes = [
    { value: 'maintenance', label: 'Periodic Maintenance' },
    { value: 'repair', label: 'Repair Work' },
    { value: 'diagnostics', label: 'Diagnostics' },
    { value: 'tire_service', label: 'Tire Service' },
    { value: 'battery', label: 'Battery Check/Replacement' },
    { value: 'other', label: 'Other Service' }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === 'service_type') {
      setFormData(prev => {
        // If the service type is already in the array, remove it, otherwise add it
        const newServiceTypes = prev.service_type.includes(value)
          ? prev.service_type.filter(type => type !== value)
          : [...prev.service_type, value];
          
        // Ensure at least one service type is selected
        if (newServiceTypes.length === 0) {
          return prev;
        }
        
        return {
          ...prev,
          service_type: newServiceTypes
        };
      });
    } else if (name === 'region') {
      // When region changes, reset the branch
      setFormData(prev => ({
        ...prev,
        region: value,
        branch: '' // Reset branch when region changes
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // If editing an existing appointment
      if (appointmentToEdit) {
        const { error: updateError } = await supabase
          .from('appointments')
          .update(formData)
          .eq('id', appointmentToEdit.id);

        if (updateError) throw updateError;
        
        if (onSuccess) onSuccess();
        return;
      }

      // If creating a new appointment
      const { data, error } = await supabase
        .from('appointments')
        .insert([formData])
        .select()
        .single();

      if (error) throw error;

      setSuccess('Appointment created successfully!');
      
      // Reset form
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        vehicle_make: '',
        vehicle_model: '',
        car_number: '',
        service_type: ['maintenance'],
        region: 'greater-accra',
        branch: '',
        appointment_date: format(new Date(), 'yyyy-MM-dd'),
        appointment_time: '09:00'
      });
      
      // Redirect to dashboard after a short delay
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 1500);
      
    } catch (err) {
      console.error('Error creating appointment:', err);
      setError(err.message || 'Failed to create appointment');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Custom dropdown styles */}
      <style jsx global>{`n        
      `}</style>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          <p>{error}</p>
        </div>
      )}

      {success && (
        <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
          <p>{success}</p>
        </div>
      )}

      <form id="appointment-form" onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information Section */}
        <div className="relative">
          <h3 className="text-xl font-bold text-[#EB0A1E] mb-4">
            Customer Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Full Name */}
            <div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="full_name"
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-200 focus:border-[#EB0A1E] focus:ring-0 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                  placeholder="John Doe"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiUser className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-200 focus:border-[#EB0A1E] focus:ring-0 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                  placeholder="john@example.com"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-200 focus:border-[#EB0A1E] focus:ring-0 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                  placeholder="+233 XX XXX XXXX"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiPhone className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle Information Section */}
        <div className="relative">
          <h3 className="text-xl font-bold text-[#EB0A1E] mb-4">
            Vehicle Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Vehicle Make */}
            <div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Make
                </label>
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="vehicle_make"
                  name="vehicle_make"
                  required
                  value={formData.vehicle_make}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-200 focus:border-[#EB0A1E] focus:ring-0 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                  placeholder="e.g., Toyota"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiTruck className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Vehicle Model */}
            <div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vehicle Model
                </label>
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="vehicle_model"
                  name="vehicle_model"
                  required
                  value={formData.vehicle_model}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-200 focus:border-[#EB0A1E] focus:ring-0 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                  placeholder="e.g., Corolla"
                />
              </div>
            </div>

            {/* Region */}
            <div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region
                </label>
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="relative">
                <Listbox value={formData.region} onChange={(value) => handleChange({ target: { name: 'region', value } })}>
                  {({ open }) => (
                    <>
                      <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-4 pr-10 text-left border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EB0A1E] focus:border-[#EB0A1E] sm:text-sm">
                        <span className="block truncate">
                          {formData.region ? regionsData.find(r => r.value === formData.region)?.label : 'Select a region'}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <FiChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                      </Listbox.Button>
                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {regionsData.map((region) => (
                            <Listbox.Option
                              key={region.value}
                              className={({ active, selected }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active ? 'bg-red-100 text-red-900' : 'text-gray-900'
                                } ${selected ? 'bg-red-50' : ''}`
                              }
                              value={region.value}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                    {region.label}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                      <FiCheck className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </>
                  )}
                </Listbox>
              </div>
            </div>

            {/* Branch Selection */}
            <div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Branch
                </label>
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="relative">
                <Listbox 
                  value={formData.branch} 
                  onChange={(value) => handleChange({ target: { name: 'branch', value } })}
                  disabled={!formData.region}
                >
                  {({ open }) => (
                    <>
                      <Listbox.Button 
                        className={`relative w-full cursor-default rounded-lg py-3 pl-4 pr-10 text-left border shadow-sm focus:outline-none focus:ring-2 focus:ring-[#EB0A1E] focus:border-[#EB0A1E] sm:text-sm ${
                          !formData.region 
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                            : 'bg-white text-gray-700 border-gray-300'
                        }`}
                      >
                        <span className="block truncate">
                          {formData.branch 
                            ? branches.find(b => b.value === formData.branch)?.label 
                            : 'Select a branch'}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <FiChevronDown 
                            className={`h-5 w-5 ${!formData.region ? 'text-gray-300' : 'text-gray-400'}`} 
                            aria-hidden="true" 
                          />
                        </span>
                      </Listbox.Button>
                      {!formData.region && (
                        <p className="mt-2 text-xs text-gray-500 bg-yellow-50 px-2 py-1 rounded">
                          Please select a region first
                        </p>
                      )}
                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {branches.map((branch) => (
                            <Listbox.Option
                              key={branch.value}
                              className={({ active, selected }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active ? 'bg-red-100 text-red-900' : 'text-gray-900'
                                } ${selected ? 'bg-red-50' : ''}`
                              }
                              value={branch.value}
                            >
                              {({ selected }) => (
                                <>
                                  <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                    {branch.label}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-red-600">
                                      <FiCheck className="h-5 w-5" aria-hidden="true" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </>
                  )}
                </Listbox>
              </div>
            </div>

            {/* License Plate */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                License Plate Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="car_number"
                  name="car_number"
                  value={formData.car_number}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-200 focus:border-[#EB0A1E] focus:ring-0 focus:outline-none transition-colors duration-200 placeholder-gray-400"
                  placeholder="e.g., GT 1234-20"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Information Section */}
        <div className="relative">
          <h3 className="text-xl font-bold text-[#EB0A1E] mb-4">
            Service Details
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Service Type */}
            <div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type
                </label>
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="relative">
                <div className="space-y-2">
                  {serviceTypes.map((type) => (
                    <label key={type.value} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        name="service_type"
                        value={type.value}
                        checked={formData.service_type.includes(type.value)}
                        onChange={handleChange}
                        className="h-4 w-4 text-[#EB0A1E] focus:ring-[#EB0A1E] border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">{type.label}</span>
                    </label>
                  ))}
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Appointment Date */}
            <div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Date
                </label>
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="relative">
                <input
                  type="date"
                  id="appointment_date"
                  name="appointment_date"
                  required
                  min={format(new Date(), 'yyyy-MM-dd')}
                  value={formData.appointment_date}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-200 focus:border-[#EB0A1E] focus:ring-0 focus:outline-none transition-colors duration-200 appearance-none"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiCalendar className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Appointment Time */}
            <div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Appointment Time
                </label>
                <span className="text-red-500 ml-1">*</span>
              </div>
              <div className="relative">
                <select
                  id="appointment_time"
                  name="appointment_time"
                  required
                  value={formData.appointment_time}
                  onChange={handleChange}
                  className="w-full px-0 py-2 border-0 border-b border-gray-200 focus:border-[#EB0A1E] focus:ring-0 focus:outline-none transition-colors duration-200 bg-transparent appearance-none"
                >
                  {Array.from({ length: 10 }, (_, i) => {
                    const hour = 8 + i; // 8 AM to 5 PM
                    const time = `${hour.toString().padStart(2, '0')}:00`;
                    return (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    );
                  })}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FiClock className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>


      </form>
      
      {/* Form Actions */}
      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          form="appointment-form"
          disabled={isSubmitting}
          className="px-6 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#EB0A1E] hover:bg-[#D0091B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EB0A1E] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Saving...' : 'Save Appointment'}
        </button>
      </div>
    </div>
  );
}

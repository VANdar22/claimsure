import React from 'react';
import { BACKGROUND, PRIMARY, GRAY_300 } from '../constants/colors';

const Model = () => {
  return (
    <div className="min-h-screen px-4" style={{ backgroundColor: BACKGROUND, paddingTop: '0' }}>
      <h1 className="text-4xl font-bold text-center pt-4 pb-8">Become a Model</h1>
      <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-lg" style={{ backgroundColor: 'white' }}>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-gray-700 mb-6">
            We're always looking for fresh faces to join our modeling family. 
            If you're passionate about fashion and want to start your modeling career, 
            we'd love to hear from you!
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md shadow-sm"
              style={{
                borderColor: GRAY_300,
                borderWidth: '1px',
                padding: '0.5rem 0.75rem',
                '--tw-ring-color': PRIMARY,
                '--tw-border-opacity': 1,
                '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                '--tw-ring-offset-width': '0px',
                '--tw-ring-offset-color': '#fff',
                '--tw-ring-opacity': 0.5
              }}
              onFocus={(e) => {
                e.target.style.borderColor = PRIMARY;
                e.target.style.boxShadow = `0 0 0 1px ${PRIMARY}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = GRAY_300;
                e.target.style.boxShadow = 'none';
              }}
                placeholder="Your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md shadow-sm"
                style={{
                  borderColor: GRAY_300,
                  borderWidth: '1px',
                  padding: '0.5rem 0.75rem',
                  '--tw-border-opacity': 1,
                  '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                  '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                  '--tw-ring-offset-width': '0px',
                  '--tw-ring-offset-color': '#fff',
                  '--tw-ring-opacity': 0.5,
                  '--tw-ring-color': PRIMARY
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = PRIMARY;
                  e.target.style.boxShadow = `0 0 0 1px ${PRIMARY}`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = GRAY_300;
                  e.target.style.boxShadow = 'none';
                }}
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full rounded-md shadow-sm"
              style={{
                borderColor: GRAY_300,
                borderWidth: '1px',
                padding: '0.5rem 0.75rem',
                '--tw-ring-color': PRIMARY,
                '--tw-border-opacity': 1,
                '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                '--tw-ring-offset-width': '0px',
                '--tw-ring-offset-color': '#fff',
                '--tw-ring-opacity': 0.5
              }}
              onFocus={(e) => {
                e.target.style.borderColor = PRIMARY;
                e.target.style.boxShadow = `0 0 0 1px ${PRIMARY}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = GRAY_300;
                e.target.style.boxShadow = 'none';
              }}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Tell us about yourself</label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md shadow-sm"
              style={{
                borderColor: GRAY_300,
                borderWidth: '1px',
                padding: '0.5rem 0.75rem',
                '--tw-ring-color': PRIMARY,
                '--tw-border-opacity': 1,
                '--tw-ring-offset-shadow': 'var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)',
                '--tw-ring-shadow': 'var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
                '--tw-ring-offset-width': '0px',
                '--tw-ring-offset-color': '#fff',
                '--tw-ring-opacity': 0.5
              }}
              onFocus={(e) => {
                e.target.style.borderColor = PRIMARY;
                e.target.style.boxShadow = `0 0 0 1px ${PRIMARY}`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = GRAY_300;
                e.target.style.boxShadow = 'none';
              }}
                placeholder="Your experience, measurements, and why you want to join us..."
                defaultValue={''}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Photo Upload</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <div className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                      <span>Upload photos</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple aria-labelledby="file-upload-label" />
                      <span id="file-upload-label">Upload photos</span>
                    </div>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="/terms" className="text-indigo-600 hover:text-indigo-500">Terms and Conditions</a>
              </label>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Model;

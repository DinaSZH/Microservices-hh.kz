const axios = require('axios');

 const City = {
    findById: async (cityId) => {
      try {
        const response = await axios.get(`http://localhost:3002/api/region/cities/${cityId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching city data:', error);
        throw error;
      }
    }
  };
  
   const Country = {
    findById: async (countryId) => {
      try {
        const response = await axios.get(`http://localhost:3002/api/region/countries/${countryId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching country data:', error);
        throw error;
      }
    }
  };
  
   const User = {
    findById: async (userId) => {
      try {
        const response = await axios.get(`http://localhost:3001/api/auth/users/${userId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      }
    }
  };

  const EmploymentType = {
    findById: async (employmentTypeId) => {
      try {
        const response = await axios.get(`http://localhost:3002/api/employment-types/${employmentTypeId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      }
    }
  };

  const Company = {
    findById: async (companyId) => {
      try {
        const response = await axios.get(`http://localhost:3002/api/companies/${companyId}`);
        return response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
      }
    }
  };

  module.exports = { City, Country, User, EmploymentType, Company };
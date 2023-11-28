const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db"); // importing settings for connection to db
const Resume = require("./Resume")
const axios = require("axios");
// const EmploymentType = require("../../employment-type/EmploymentType")

const ResumeEmploymentType = sequelize.define("ResumeEmploymentType", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
    },
  },
  {
    timestamps: false, // Отключение использования полей createdAt и updatedAt
  }
);


const getEmploymentTypeById = async (employmentTypeId) => {
  try {
    const response = await axios.get(`http://localhost:3002/api/employment-types/${employmentTypeId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching EmploymentType data:', error);
    throw error;
  }
};

ResumeEmploymentType.getEmploymentTypeById = getEmploymentTypeById;

// Resume.belongsToMany(EmploymentType, { through: ResumeEmploymentType, foreignKey: "resumeId", 
// otherKey: "employmentTypeId", as: "employmentTypes" });
// EmploymentType.belongsToMany(Resume, { through: ResumeEmploymentType,  foreignKey: "employmentTypeId", 
// otherKey: "resumeId"  });



module.exports = ResumeEmploymentType;

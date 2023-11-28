const { DataTypes } = require("sequelize");
const sequelize = require("../../../config/db"); // importing settings for connection to db
const axios = require("axios");
const { City, Country, User, EmploymentType }  = require('../../../settings');
const Resume = sequelize.define("Resume", {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    birthday: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    gender: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    about: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    salary_type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    main_language: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    skills: {
        type: DataTypes.STRING,
        allowNull: false,
      },

  }
);



Resume.beforeCreate(async (resume, options) => {
  try {
    // Получаем данные о городе по cityId
    const cityData = await City.findById(resume.cityId);
    resume.city = cityData; // Добавляем данные о городе в объект Resume

    // Получаем данные о стране по citizenship
    const countryData = await Country.findById(resume.citizenship);
    resume.citizenshipObj = countryData; // Добавляем данные о стране в объект Resume

    // Получаем данные о пользователе по userId
    const userData = await User.findById(resume.userId);
    resume.user = userData; // Добавляем данные о пользователе в объект Resume
  } catch (error) {
    console.error('Error fetching related data:', error);
    throw error;
  }
});


// Resume.belongsTo(City, { foreignKey: "cityId", as: "city" });
// Resume.belongsTo(Country, { foreignKey: "citizenship", as: "citizenshipObj"});
// Resume.belongsTo(User, { foreignKey: "userId" });


module.exports = Resume;

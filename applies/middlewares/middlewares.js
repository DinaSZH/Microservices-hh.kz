const axios = require('axios');
const {Vacancy} = require('../settings');
let Role;
let User;

axios.get('http://localhost:3001/api/roles')
  .then(response => {
     Role = response.data;
  })
  .catch(error => {
    console.error('Ошибка получения ролей:', error);
  });

  axios.get('http://localhost:3001/api/users')
  .then(response => {
    User = response.data;
  })
  .catch(error => {
    console.error('Ошибка получения пользователей:', error);
  });


const isEmployee = async (req, res, next) =>{
    if(req.user) {
        const role = await Role.findByPk(req.user.roleId);
        if(role.name === "employee") next()
        else res.status(403).send({message: "Access denied"});
    }
    else res.status(403).send({message: "Unauthorized user"});
}

const isManager = async (req, res, next) =>{
    if(req.user) {
        const role = await Role.findByPk(req.user.roleId);
        if(role.name === "manager") next()
        else res.status(403).send({message: "Access denied"});
    }
    else res.status(403).send({message: "Unauthorized user"});
}

const validateSignup = async (req, res, next)=>{
    let errors = {}

    if(!req.body.email || req.body.email.length === 0) {
        errors.email = "Поле email обязательное";
    }

    if(!req.body.full_name || req.body.full_name.length === 0) {
        errors.full_name = "Поле Имя и Фамилия обязательное";
    }

    if(!req.body.company_name || req.body.company_name.length === 0) {
        errors.company_name = "Поле Имя компании обязательное";
    }

    if(!req.body.password || req.body.password.length === 0) {
        errors.password = "Поле Пароль обязательное";
    }

    if(!req.body.password2 || req.body.password2.length === 0) {
        errors.password2 = "Поле Подтвердить пароль обязательное";
    }

    if(req.body.password !== req.body.password2) {
        errors.password2 = "Пароли не совпадают";
    }

    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if(user) {
        errors.email = "Пользователь с таким email уже зарегестрирован";
    }
    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()

}

const validateVacancy = (req, res, next) => {
    let errors = {};
    if(!req.body.name || req.body.name.length === 0)
        errors.name = "Поле Название вакансии обязательное"
    
    if(!req.body.specializationId || typeof(req.body.specializationId) === 'number')
        errors.specializationId = "Поле Специализация обязательное"

    if(!req.body.cityId || typeof(req.body.cityId) === 'number')
        errors.cityId = "Поле Где искать сотрудников обязательное"

    if(!req.body.description || req.body.description.length === 0)
        errors.description = "Поле Расскажите про вакансию обязательное"

    if(!req.body.employmentTypeId || typeof(req.body.employmentTypeId) === 'number')
        errors.employmentTypeId = "Поле Тип занятости обязательное"

    if(JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

const isAuthorOfVacancy = async (req, res, next) => {
    const id = req.params.id || req.body.id;
    const vacancy = await Vacancy.findByPk(id);

    if(!vacancy) {
        res.status(400).send({message: "Vacancy with that id doenst exist "})
    } 
    else if(vacancy.userId === req.user.id){
        next()
    } else{
        res.status(403).send({message: "Access forbidden "})
    }
}

module.exports= {
    isEmployee,
    isManager,
    validateSignup,
    validateVacancy,
    isAuthorOfVacancy
}
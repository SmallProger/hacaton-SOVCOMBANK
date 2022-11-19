import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import './RegistrationPage.css';
import { CustomField } from '../../common/common';
import { SIGNUP_SCHEMA, LABEL_PLACEHOLDERS, INITIAL_VALUES, MASKS } from './constants'
import { useNavigate } from 'react-router-dom';
import { setAccountId, setIsAdminAuth } from '../../actions/actions';
import { registrate } from '../../services/registrate';
import { IP_ADDRESS } from '../../App/App';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Для добавления новых полей, нужно перейти в файл constants.js и ввести соотвественно изменения в:
// SIGNUP_SCHEMA, LABEL_PLACEHOLDERS, INITIAL_VALUES, MASKS

function RadioButton({ handleChange }) {
  return (
    <fieldset>
      <legend>Ваш пол:</legend>
      <div>
        <input onChange={handleChange} type="radio" id="male" name="gender" value='male' checked />
        <label htmlFor="male">Мужской</label>
      </div>
      <div>
        <input onChange={handleChange} type="radio" id="female" name="gender" value='female' />
        <label htmlFor="female">Женский</label>
      </div>
    </fieldset>
  )
}

function RegistrationPage() {
  const navigate = useNavigate();
  const IP = useContext(IP_ADDRESS)

  const handleSwitchForm = (event) => {
    let choosedBtnTxt = event.target.textContent;
    if (choosedBtnTxt === 'Для администраторов') {
      setIsAdminAuth(true);
    } else if (choosedBtnTxt === 'Войти') {
      setIsAdminAuth(false);
    }
    navigate('auth');
  }

  const handleSubmit = async (values) => {
    console.log(IP, values, "REGISTRATION");
    let { login, password, patronymic: middleName, firstName, lastName, gender } = values;
    let data = {
      login,
      password,
      middleName,
      firstName,
      lastName,
      gender
    }
    let { ok, id } = await registrate(IP, data)
    if (ok) {
      //Недостающая логика
      setAccountId(id);
      alert('успешно');
    }
  }

  return (
    <div className='reg-form'>
      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={SIGNUP_SCHEMA}
      >
        {({ errors, touched, handleChange, handleBlur }) => (
          <Form className='form'>
            {Object.keys(INITIAL_VALUES).map((value, index) => {
              if (value === 'gender') {
                return (
                  <RadioButton handleChange={handleChange} />
                )
              }
              return (
                <CustomField
                  key={`form__input${index}1`}
                  errors={errors} touched={touched}
                  value={value} MASKS={MASKS}
                  LABEL_PLACEHOLDERS={LABEL_PLACEHOLDERS}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />
              );
            })}
            <button className='form__btn' type="submit">Зарегистрироваться</button>
          </Form>
        )}
      </Formik>
      <button onClick={(event) => handleSwitchForm(event)} className='form__btn' type='button'>Войти</button>
      <span onClick={(event) => handleSwitchForm(event)} className='form__link-admin'>Для администраторов</span>
    </div>
  )
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setIsAdminAuth, setAccountId }, dispatch)
}

export default connect(null, mapDispatchToProps)(RegistrationPage);
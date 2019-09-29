import React from 'react';
import './PostAJob.scss';
import {Field} from "redux-form";
import {reduxForm} from "redux-form";
import DropDownSelect from "./DropDownSelect";
import TextEditor from "../TextEditor/TextEditor.jsx"


const options = ['Программирование', 'Дизайн', 'Поддержка клиентов',
  'Копирайтинг', 'DevOps & Системное администрирование', 'Продажи & Маркетинг',
  'Бизнес & Менеджмент', 'Финансы & Юриспруденция', 'Продуктолог', 'Все другие'];

const radioButtonOptions = [
  {
    id: 'full-time',
    label: 'Постоянная',
    value: 'Постоянная'
  },
  {
    id: 'contract',
    label: 'По договору',
    value: 'По договору'
  }
];

const PostAJob = (props) => {
  const {currentValue, handleSubmit, pristine, submitting} = props;

  return (
    <div className='post-a-job'>
      <div className='post-a-job__header'>Доступ к крупнейшему удаленному сообществу в Интернете</div>
      <div className='post-a-job__top-container'>
        <div className='post-a-job__step-container'>
          <div className='post-a-job__step-title'>Шаг 1</div>
          <div className='post-a-job__step-stripe post-a-job__step-stripe_color_selected'></div>
          <div className='post-a-job__step-content'>Разместить вакансию</div>
        </div>
        <div className='post-a-job__step-container'>
          <div className='post-a-job__step-title'>Шаг 2</div>
          <div className='post-a-job__step-stripe'></div>
          <div className='post-a-job__step-content'>Предварительный просмотр</div>
        </div>
        <div className='post-a-job__step-container'>
          <div className='post-a-job__step-title'>Шаг 3</div>
          <div className='post-a-job__step-stripe'></div>
          <div className='post-a-job__step-content'>Оплата</div>
        </div>
      </div>
      <div className='post-a-job__form-header'>
        <div className='post-a-job__form-header-title'>Расскажите нам о позиции</div>
        <div className='post-a-job__required-content'>Обязательное поле</div>
        <div className='post-a-job__dot-container'>
          <div className='post-a-job__dot'></div>
        </div>
      </div>
      <form className='post-a-job__form' onSubmit={handleSubmit}>
        <div>
          <div className='post-a-job__form-label'>
            <div className='post-a-job__form-label-title'>Должность</div>
            <div className='post-a-job__dot-container'>
              <div className='post-a-job__dot-label'></div>
            </div>
          </div>
          <Field
            component="input"
            className='post-a-job__form-job-title'
            // validate={[required, maxLength50]}
            name="jobTitle"
            type="text"
          />

          <div className='post-a-job__form-description'>Пример: "ReactJS разработчик". Должность должна
            описывать одну позицию.
          </div>

          <div className='post-a-job__form-category-job-type-container'>

            <div className='post-a-job__form-category-container'>
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Категория</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
                </div>
              </div>

              <Field
                name="category"
                // component="select"
                label="dropDownSelect"
                component={DropDownSelect}
                options={options}
              />
            </div>

            <div className='post-a-job__form-job-type-container'>
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Тип работы</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
                </div>
              </div>

              <div className='post-a-job__form-job-type-options-container'>
                <Field
                  component={({input}) => (

                    radioButtonOptions.map(option => <div key={option.id}
                                                          className={`post-a-job__form-job-type-types-${option.id}`}>
                      <input
                        id={option.id}
                        type='radio'
                        {...input}
                        value={option.value}
                        checked={option.value === input.value}
                      />
                      <label htmlFor={option.id} className='post-a-job__form-job-type-option'>{option.label}</label>
                    </div>)
                  )}
                  name="jobType"
                  options={options}
                />
              </div>
            </div>
          </div>

          <div className='post-a-job__form-head-office-region-type-container'>

            <div className='post-a-job__form-head-office-container'>
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Главный офис</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
                </div>
              </div>

              <Field
                component="input"
                className='post-a-job__form-head-office'
                // validate={[required, maxLength50]}
                name="headOffice"
                type="text"
              />

              <div className='post-a-job__form-description'>Пример: "Москва, Россия".
              </div>
            </div>

            <div className='post-a-job__form-region-container'>
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Регион</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
                </div>
              </div>

              <Field
                component="input"
                className='post-a-job__form-region'
                // validate={[required, maxLength50]}
                name="region"
                type="text"
              />

              <div className='post-a-job__form-description'>Пример: "Москва, Московская область"; "Россия".
              </div>
            </div>

          </div>


          <div className='post-a-job__form-tags-apply-link-container'>

            <div className='post-a-job__form-tags-container'>
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Метки</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
                </div>
              </div>

              <Field
                component="input"
                className='post-a-job__form-tags'
                // validate={[required, maxLength50]}
                name="tags"
                type="text"
              />
            </div>

            <div className='post-a-job__form-apply-link-container'>
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Применить ссылку</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
                </div>
              </div>

              <Field
                component="input"
                className='post-a-job__form-apply-link'
                // validate={[required, maxLength50]}
                name="applyLink"
                type="text"
              />

              <div className='post-a-job__form-description'>Пример: https://mybusiness.com/careers/apply или hr@mybusiness.com
              </div>
            </div>

          </div>
          <div className = "post-a-job__form-editor">  
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Описание работы</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
               </div>
              </div>
              <TextEditor/>
          </div>              

            <div className='post-a-job__form-job-name-container'>              
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Название</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
               </div>
              </div>
              <Field
                  component="input"
                  className='post-a-job__form-job-name'
                  // validate={[required, maxLength50]}
                  name="jobName"
                  type="text"
              />
              <div className='post-a-job__form-description'>Введите название организации или компании.</div>
            </div>

            <div className='post-a-job__form-company-mission-container'>              
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Заявление компании</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
               </div>
              </div>
              <Field
                  component="input"
                  className='post-a-job__form-company-mission'
                  // validate={[required, maxLength50]}
                  name="companyMission"
                  type="text"
              />
              <div className='post-a-job__form-description'>Введите формулировку миссии вашей компании или организации. Это будет отображаться в профиле вашей компании.</div>
            </div>

            <div className='post-a-job__form-logo-container'>              
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Логотип</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
               </div>
              </div>
              
              <div className="post-a-job__form-logo-dnd">
                <div className="post-a-job__form-logo-dnd-title">Кликните или перетащите фото в это окно</div>
                <input
                    className='post-a-job__form-logo'
                    // validate={[required, maxLength50]}
                    name="logo"
                    type="file"
                    accept=".jpg, .png, .jpeg"
                />
              </div>
              <div className='post-a-job__form-description'>Настоятельно рекомендуется использовать ваш аватар Twitter или Facebook. Необязательно - логотип вашей компании будет отображаться в верхней части списка.</div>
            </div>


          <div className='post-a-job__form-domen-and-email'>
            <div className='post-a-job__form-domen-container'>
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>URL Домен Вашей компании</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
                </div>
              </div>

              <Field
                component="input"
                className='post-a-job__form-domen'
                // validate={[required, maxLength50]}
                name="domen"
                type="text"
              />
              
              <div className='post-a-job__form-description'>Пример: https://mybusiness.com/
              </div>
            </div>

            <div className='post-a-job__form-email-container'>
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>E-mail</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
                </div>
              </div>

              <Field
                component="input"
                className='post-a-job__form-email'
                // validate={[required, maxLength50]}
                name="email"
                type="text"
              />

              <div className='post-a-job__form-description'>Мы отправим вашу квитанцию ​​и подтверждение по этой электронной почте.
              </div>
            </div>
          </div> 

          <div className = "post-a-job__form-editor">  
              <div className='post-a-job__form-label'>
                <div className='post-a-job__form-label-title'>Расскажите больше о Вашей компании</div>
                <div className='post-a-job__dot-container'>
                  <div className='post-a-job__dot-label'></div>
               </div>
              </div>
              <TextEditor/>
          </div>           
        </div>


        <div>
          <button type='submit' disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({form: 'post-a-job-form'})(PostAJob);
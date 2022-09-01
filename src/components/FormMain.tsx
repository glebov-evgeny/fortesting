import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import { useAppDispatch } from '../hooks/redux-hooks';
import { setUser } from '../store/slices/userSlice';

export interface FormProps {
    btnTitle: string,
    formLogic: string
}

export function FormMain(props: FormProps){
    const [formData, setFormData] = useState({
        email:'',
        password: ''
    })
    const [errorData, setErrorData] = useState({
        email: true,
        password: true,
        form: ''
    })

    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const fieldChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value.trim()});
    }

    const validateForm = (formData:any) => {
        const emailValidation = (email:string) => {
            const regex = /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;
            if(!regex.test(email) || email === ''){
                setErrorData({...errorData, email: false})
                return false
            }
            setErrorData({...errorData, email: true})
            return true;
        }
        emailValidation(formData.email)

        const passwordValidation = (password:string) => {
            /* Не меньше 6 символов, минимум 1 буква, минимум 1 цифра */
            const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i;
            if(!regex.test(password) || password === ''){
                setErrorData({...errorData, password: false})
                return false
            }
            setErrorData({...errorData, password: true})
            return true;
        }
        passwordValidation(formData.password)

    }

    const handleRegistration: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('регистрация')
        validateForm(formData)
        if(errorData.email && errorData.password){
            axios.post(`http://79.143.31.216/register?username=${formData.email}&password=${formData.password}`)
            .then(res => {
                console.log(res)
                dispatch(setUser({
                    username:res.data.username
                }));
                localStorage.setItem('username', res.data.username);
                localStorage.setItem('password', formData.password);
                navigate('/about');
            })
            .catch((error) => {
                if (error.response.data.detail === `user with username='${formData.email}' already exists`){
                    setErrorData({...errorData, form: 'Email уже зарегистрирован'} )
                }
                else{
                    console.error('Ошибка: ' + error.message)
                }
            });
        } else {
            console.error('ошибка отправки формы')
        }
    };


    const handleLogin: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('логин')
        if(errorData.email && errorData.password){
            axios.post(`http://79.143.31.216/login?username=1%40mail.ru&password=${formData.password}`)
                .then(res => {
                    console.log(res)
                    // dispatch(setUser({
                    //     username:res.data.username
                    // }));
                    // localStorage.setItem('username', res.data.username);
                    // navigate('/about');
                })
                .catch((error) => {
                    if (error.response.data.detail === `user with username='${formData.email}' already exists`){
                        setErrorData({...errorData, form: 'Email уже зарегистрирован'} )
                    }
                    else{
                        console.error('Ошибка: ' + error.message)
                    }
                });
        } else {
            console.error('ошибка отправки формы')
        }
    };

    return (
        <form className="form" onSubmit={ props.formLogic === 'login' ? handleLogin : handleRegistration }>
           <div className="form__box">
               <div className="form__item">
                   <p className="form__item-name">Почта:</p>
                   <input
                       type="email"
                       name="email"
                       className={errorData.email ? 'form__item-input' : 'form__item-input error'}
                       value={formData.email}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>): void => fieldChangeHandle(event)}
                   />
               </div>

               <div className="form__item _short">
                   <p className="form__item-name">Пароль:</p>
                   <input
                       type="password"
                       name="password"
                       className={errorData.password ? 'form__item-input' : 'form__item-input error'}
                       value={formData.password}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>): void => fieldChangeHandle(event)}
                   />
               </div>
               <div className="form__information">
                   <p className="form__information-content">{errorData.form}</p>
               </div>
               <button
                   type="submit"
                   className="form__button button">{props.btnTitle}</button>
           </div>
        </form>
    )
}
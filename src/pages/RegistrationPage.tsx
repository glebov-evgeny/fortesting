import React from 'react';
import {gsap, Power2} from 'gsap';
import {FormMain} from '../components/FormMain';
import {Link} from 'react-router-dom';

export function RegistrationPage() {


    let timeout:any;
    const parallaxHandler = (event:any) => {
        if(timeout) clearTimeout(timeout);
        setTimeout(callParallax.bind(null, event), 1);
    }

    function callParallax(event:any){
        parallaxIt(event, '.registration__decoration._01', 10);
        parallaxIt(event, '.registration__decoration._02', -5);
        parallaxIt(event, '.registration__decoration._03', 5);
        parallaxIt(event, '.registration__decoration._04', -7.5);
        parallaxIt(event, '.registration__decoration._05', 13);
        parallaxIt(event, '.registration__decoration._06', -2);
    }

    function parallaxIt(e:any, target:any, movement:number){
        gsap.to(target, 1, {
            x: (e.clientX - window.innerWidth / 2) / movement,
            y: (e.clientY - window.innerHeight / 2) / movement,
            ease:Power2.easeOut
        })
    }


    return (
        <section className="registration" onMouseMove={parallaxHandler}>
            <div className="container registration__container">
                <div className="registration__content">
                    <h2 className="registration__title">Регистрация</h2>
                    <FormMain formLogic="registration" btnTitle="Отправить"/>
                    <p className="registration__description">Если есть аккаунт:</p>
                    <Link className='registration__link' to='/'>Вход</Link>
                </div>
            </div>
            <div className="registration__decoration _01"/>
            <div className="registration__decoration _02"/>
            <div className="registration__decoration _03"/>
            <div className="registration__decoration _04"/>
            <div className="registration__decoration _05"/>
            <div className="registration__decoration _06"/>
        </section>
    );
}
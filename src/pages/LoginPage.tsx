import React, {useEffect, } from 'react';
import {gsap, Power2} from 'gsap';
import {FormMain} from '../components/FormMain';
import {Link} from 'react-router-dom';



export function LoginPage() {

    let timeout:any;
    const parallaxHandler = (event:any) => {
        if(timeout) clearTimeout(timeout);
        setTimeout(callParallax.bind(null, event), 1);
    }

    function callParallax(event:any){
        parallaxIt(event, '.login__decoration._01', 10);
        parallaxIt(event, '.login__decoration._02', -5);
        parallaxIt(event, '.login__decoration._03', 5);
        parallaxIt(event, '.login__decoration._04', -7.5);
        parallaxIt(event, '.login__decoration._05', 13);
        parallaxIt(event, '.login__decoration._06', -2);
    }

    function parallaxIt(e:any, target:any, movement:number){
        gsap.to(target, 1, {
            x: (e.clientX - window.innerWidth / 2) / movement,
            y: (e.clientY - window.innerHeight / 2) / movement,
            ease:Power2.easeOut
        })
    }


    useEffect(()=>{

    },[])

    return (
        <section className="login" onMouseMove={parallaxHandler}>
            <div className="container login__container">
                <div className="login__content">
                    <h2 className="login__title">Вход</h2>
                    <FormMain formLogic="login" btnTitle="Отправить"/>
                    <p className="login__description">Если аккаунта нет:</p>
                    <Link className='login__link' to='/registration'>Регистрация</Link>
                </div>
            </div>
            <div className="login__decoration _01"/>
            <div className="login__decoration _02"/>
            <div className="login__decoration _03"/>
            <div className="login__decoration _04"/>
            <div className="login__decoration _05"/>
            <div className="login__decoration _06"/>
        </section>
    );
}
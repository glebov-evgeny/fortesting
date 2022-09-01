import React, { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import { gsap } from 'gsap';


export function IntroPage() {
    const title = useRef<HTMLParagraphElement>(null);
    const description = useRef<HTMLParagraphElement>(null);
    const decoration01 = useRef<HTMLDivElement>(null);
    const decoration02 = useRef<HTMLDivElement>(null);
    const decoration03 = useRef<HTMLDivElement>(null);


    useEffect(() => {
        gsap.to(title.current!,  1.5, {opacity: 1, delay: .5})
        gsap.to(description.current!,  1.5, {opacity: 1, delay: 1.5})
        gsap.to(decoration01.current!,10, {
            scale: 1.2,
            repeat: -1,
            yoyo: true
        })
        gsap.to(decoration02.current!,10, {
            scale: 1.3,
            repeat: -1,
            y:-100,
            x:-50,
            yoyo: true
        })
        gsap.to(decoration03.current!,10, {
            scale: .6,
            repeat: -1,
            y:175,
            x:-175,
            yoyo: true
        })
    })

    return (
        <section className="intro">
            <div className="container intro__container">
                <div className="intro__content">
                    <h1 className="intro__title" ref={title}>Нынче ветрено и&nbsp;волны с&nbsp;перехлестом</h1>
                    <p className="intro__description" ref={description}>Скоро осень, все изменится в&nbsp;округе</p>
                    <Link className='button intro__button' to='/login'>Продолжить</Link>
                </div>
            </div>
            <div className="intro__decoration _01" ref={decoration01} />
            <div className="intro__decoration _02" ref={decoration02} />
            <div className="intro__decoration _03" ref={decoration03} />
        </section>
    );
}
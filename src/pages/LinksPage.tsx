import React, { useEffect, useState } from 'react';
// import axios from 'axios';

export function LinksPage() {
    const [link, setLink] = useState('')
    useEffect(() => {

    })

    const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const token = localStorage.getItem('token') || '';
        const username = localStorage.getItem('username') || '';
        const password = localStorage.getItem('password') || '';

        fetch('http://79.143.31.216/squeeze', {
            method: 'POST',
            headers: {
                'accept': 'application/json'
            },
            body: new URLSearchParams({
                'link': link,
                'access_token': token,
                'username': username,
                'password': password
            })
        })
        .then((res) => {
            if(res.status === 200){
                console.log(res)
            }
            else {
                console.log(res)
            }
        })

    }

    // @ts-ignore
    return (
        <section className="links">
            <div className="container links__container">
                <div className="links__content">
                    <h2 className="links__title">Создать Линк</h2>

                    <form className="links__form" onSubmit={submitForm}>
                        <input type="text"
                               placeholder="Укажите ссылку"
                               className="links__form-input"
                               onChange={(event: React.ChangeEvent<HTMLInputElement>): void => setLink(event.target.value)}
                        />
                        <button type="submit"
                                className="links__form-button">Создать</button>
                    </form>
                </div>

            </div>
        </section>
    );
}
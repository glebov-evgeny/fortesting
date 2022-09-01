import {Route, Routes} from 'react-router-dom';
import {Header} from './components/Header';
// import {IntroPage} from './pages/IntroPage';
import {LoginPage} from './pages/LoginPage';
import {LinksPage} from './pages/LinksPage';
import {RegistrationPage} from './pages/RegistrationPage';


function App() {
    return(
        <>
            <Header/>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/registration' element={<RegistrationPage />} />
                    <Route path='/links' element={<LinksPage />} />
                </Routes>
            </main>
        </>
    )
}

export default App;
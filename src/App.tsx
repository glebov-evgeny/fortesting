import {Route, Routes} from 'react-router-dom';
import {Header} from './components/Header';
// import {IntroPage} from './pages/IntroPage';
import {LoginPage} from './pages/LoginPage';
import {AboutPage} from './pages/AboutPage';
import {RegistrationPage} from './pages/RegistrationPage';


function App() {
    return(
        <>
            <Header/>
            <main className='main'>
                <Routes>
                    <Route path='/' element={<LoginPage />} />
                    <Route path='/registration' element={<RegistrationPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </main>
        </>
    )
}

export default App;
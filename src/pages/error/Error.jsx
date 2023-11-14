import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import Logo404 from '../../components/svg/Logo404';

const Error = () => {
    return (
        <div className='error'>
            <Header />
            <div className='error404'>
                <Logo404 />
                <h3>Oups! La page que vous demandez n'existe pas.</h3>
                <a href='/Home'>Retourner sur la page d'accueil</a>
            </div>
            <Footer copyright="©&nbsp;2020&nbsp;Kasa. All&nbsp;rights&nbsp;reserved" />
        </div>
    );
};

export default Error;
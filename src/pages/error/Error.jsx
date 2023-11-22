import Layout from '../../layout/Layout';
import Logo404 from '../../components/svg/Logo404';

const Error = () => {
    return (
        <div className='error'>
            <Layout>
                <div className='error404'>
                    <Logo404 />
                    <h3>Oups! La page que vous demandez n'existe pas.</h3>
                    <a href='/Home'>Retourner sur la page d'accueil</a>
                </div>
            </Layout>
        </div>
    );
};

export default Error;




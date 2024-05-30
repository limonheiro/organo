import './Footer.css'

const Footer = () => {
    return (
        <footer style={{ backgroundImage: 'url(imagens/fundo.png)' }}>
            <div className='container__footer'>
                <section className='container__footer_social'>
                    <a href='http://facebbok.com'>
                        <img src='imagens/fb.png' alt='logo do facebook' />
                    </a>
                    <a href='http://twitter.com'>
                        <img src='imagens/tw.png' alt='logo do twitter' />
                    </a>
                    <a href='http://instagram.com'>
                        <img src='imagens/ig.png' alt='logo do instagram' />
                    </a>
                </section>

                <img src='imagens/logo.png' alt='logo da organo' />
                <p>Desenvolvido por Nicolas T.</p>
            </div>

        </footer>
    )
}

export default Footer
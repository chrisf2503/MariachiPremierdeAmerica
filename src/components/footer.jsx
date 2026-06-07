import footerStyle from '../CSS/footer.module.css'

function Footer(){
    return (
        <footer className={footerStyle.footer_container}>
            <h5 className={footerStyle.footer}>© 2026 Mariachi Premier de America. Todos los derechos reservados.</h5>
        </footer>
    )
}

export default Footer;
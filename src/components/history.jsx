import historyStyle from '../CSS/history.module.css'
function History (){

    return (
        <section className={historyStyle.briefHistory}>
            <h2 className={historyStyle.subtitle}>Acerca de Nosotros</h2>
            <p className={historyStyle.history}>
                Mariachi Premier de America se dedica a preservar y compartir la rica tradición de la música de mariachi mexicano. Con décadas de experiencia combinada, nuestros talentosos músicos aportan pasión, profesionalismo y sonido auténtico a cada presentación.
                Ya sea que estés planeando una reunión íntima o una gran celebración, adaptamos nuestras presentaciones para crear momentos memorables que honran la tradición mientras creamos nuevos recuerdos.
            </p>
        </section>
    )
}
export default History;
import logo from "../assets/PremierdeAmericaLogo.jpg"
import instagramIcon from '../assets/Instagram.svg'
import FacebookIcon from '../assets/Facebook.svg'
import PhoneIcon from '../assets/Phone.svg'
import headerStyle from '../CSS/header.module.css'

const socialMedia = [
    {id: "instagram", img: instagramIcon, link: "https://www.instagram.com/mariachipremierdeamerica/"},
    {id: "facebook", img: FacebookIcon, link: "https://www.facebook.com/mariachipremierNYNJ"},
    {id: "phone", img: PhoneIcon, link: "tel:+13473038254"},
]
function Header(){
    return (
        <header className={headerStyle.header}>
            <img src={logo} alt="MairachiPremierdeAmericaLogo" className ={headerStyle.logo}/>
            <h1 className={headerStyle.title}>Mariachi Premier de America</h1>
            <p className={headerStyle.discription}>Música Auténtica de Mariachi Mexicano para Tus Eventos Especiales</p>
            <div className={headerStyle.socials}>
                {//adding loop here
                socialMedia.map(list => (
                    <a href={list.link}>
                        <img src={list.img} alt={list.id} />
                    </a>
                ))}
            </div>
        </header>
    )
}

export default Header;
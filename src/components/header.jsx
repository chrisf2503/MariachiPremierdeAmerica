import logo from "../assets/PremierdeAmericaLogo.jpg"
import instagramIcon from '../assets/Instagram.svg'
import FacebookIcon from '../assets/Facebook.svg'
import PhoneIcon from '../assets/Phone.svg'
import headerStyle from '../CSS/header.module.css'
const socialMedia = [
    {id: "facebook", img: {FacebookIcon}, link: ""},
    {id: "instagram", img: {instagramIcon}, link: ""},
    {id: "phone", img: {PhoneIcon}, link: ""},
]
function Header(){
    return (
        <header className={headerStyle.header}>
            <img src={logo} alt="MairachiPremierdeAmericaLogo" className ={headerStyle.logo}/>
            <h1 className={headerStyle.title}>Mariachi Premier de America</h1>
            <p className={headerStyle.discription}>Música Auténtica de Mariachi Mexicano para Tus Eventos Especiales</p>
            <div className="socials">
                {//adding loop here
                }
            </div>
        </header>
    )
}

export default Header;
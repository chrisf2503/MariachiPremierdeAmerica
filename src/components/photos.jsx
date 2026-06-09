import photoStyle from '../CSS/photos.module.css';
import photo1 from '../media/performance1.png'
import photo2 from '../media/performance2.png'
import photo3 from '../media/performance3.png'
const photo = [
    {id: "", path: photo1 , name:"Photo1"},
    {id: "", path: photo2, name:"Photo2"},
    {id: "", path: photo3, name:"photo3"}
]

function Photos(){
    return (
        <section className={photoStyle.photo_section}>
            <div className={photoStyle.caption}>
                <h3 className={photoStyle.title}>Galería de Fotos</h3>
                <p className={photoStyle.discription}>Momentos capturados de nuestros eventos memorables</p>
            </div>
            <div className={photoStyle.photo_container}>
                {
                    photo.map(list => (
                        <img
                            src={list.path}
                            alt={list.name}
                            className={photoStyle.photo}
                            key={list.name}
                            loading="lazy"
                        />
                        
                    ))
                }
            </div>
        </section>
    )
}

export default Photos;

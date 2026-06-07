import photoStyle from '../CSS/photos.module.css';

const photo = [
    {id: "", path: "", name:"Photo1"},
    {id: "", path: "", name:"Photo2"},
    {id: "", path: "", name:"photo3"}
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
                        <img src={list.path} alt={list.name} className={photoStyle.photo}/>
                        
                    ))
                }
            </div>
        </section>
    )
}

export default Photos;
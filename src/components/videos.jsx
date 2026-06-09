import videoStyle from "../CSS/videos.module.css"
import vid1 from '../media/vid1.png'
import vid2 from '../media/vid2.png'
import vid3 from '../media/vid3.png'

const songs = [
    {id: "", name: "song1", video: vid1},
    {id: "", name: "song2", video: vid2},
    {id: "", name: "song3", video: vid3}
]

function Videos(){
    return (
        <section className={videoStyle.video_section}>
            <h2 className={videoStyle.title}>Míranos en Acción</h2>
            <div className={videoStyle.video_container}>
                {songs.map(list =>(
                    <div className={videoStyle.container} id={list.id || undefined} key={list.name}>
                        <img src={list.video} alt={list.name} className={videoStyle.video}/>
                        <div className={videoStyle.song_name}>
                            <h3 className={videoStyle.name}>{list.name}</h3>
                        </div>
                    </div>
                ))}
                {/* <div className={videoStyle.container}>
                    <div className={videoStyle.video}>
                        <p>Video here</p>
                    </div>
                    <div className={videoStyle.song_name}>
                        <h3 className={videoStyle.title}>Song1</h3>
                    </div>
                </div> */}
                
            </div>
        </section>
    )
}

export default Videos;

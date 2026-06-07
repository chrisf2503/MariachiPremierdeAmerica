import videoStyle from "../CSS/videos.module.css"

const songs = [
    {id: "", name: "song1", video: ""},
    {id: "", name: "song2", video: ""},
    {id: "", name: "song3", video: ""}
]

function Videos(){
    return (
        <section className={videoStyle.video_section}>
            <h2 className={videoStyle.title}>Míranos en Acción</h2>
            <div className={videoStyle.video_container}>
                {songs.map(list =>(
                    <div className={videoStyle.container} id={list.id}>
                        <div className={videoStyle.video}>
                            <p>Video here</p>
                        </div>
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
import Header from './components/header.jsx'
import History from './components/history.jsx'
import Videos from './components/videos.jsx'
import Photos from './components/photos.jsx'
function Home(){

    return (
        <main className="body">
            {/* 
                Layout is as follows:
                Header
                Brief History
                Video Container
                Photo Gallary
                Form 
                Footer 
            */}
            <Header/>
            <History/>
            <Videos/>
            <Photos/>
        </main>
    )
}

export default Home;
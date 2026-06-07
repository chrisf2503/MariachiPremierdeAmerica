import Header from './components/header.jsx'
import History from './components/history.jsx'
import Videos from './components/videos.jsx'
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
        </main>
    )
}

export default Home;
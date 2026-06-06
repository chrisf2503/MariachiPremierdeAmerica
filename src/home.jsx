import Header from './components/header.jsx'
import History from './components/history.jsx'
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
        </main>
    )
}

export default Home;
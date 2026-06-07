import Header from './components/header.jsx'
import History from './components/history.jsx'
import Videos from './components/videos.jsx'
import Photos from './components/photos.jsx'
import Footer from './components/footer.jsx'
import Form from './components/form.jsx'
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
            <Form/>
            <Footer/>
        </main>
    )
}

export default Home;
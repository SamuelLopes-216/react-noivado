import './App.css';

function Home() {
    return(
        <div className="home">
            <div className='header'>
                    <div className="head">
                        <a href="#Home">Inicio</a>
                        <a href='#coutdown'>Contagem Regressiva</a>
                        <a href='#photo'>Fotos</a>
                    </div>
                    <a href='https://wa.me/qr/35OMQE6JDKHAM1' className='check'>Confirme sua Presença Aqui</a> 
                </div>
                <div className="App" id='Home'>
                <div className="name">
                    <div className="casal">
                        <h1>Samuel & Adriana</h1>
                        <p>Dia 25 Nov 2023</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
    
}
 export default Home;
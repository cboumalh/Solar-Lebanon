import './footer.css'


export default function Footer(){

    return(
        <div className='footer'>
            <img src={require('../../assets/github.png')} alt='githubLogo'/>
            <span>Github: <a href="https://github.com/cboumalh">Chris's Github</a></span>
        </div>
    )
}
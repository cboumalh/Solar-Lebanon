import './header.css'
import ReactModal from 'react-modal';
import { useState } from 'react';

export default function Header() {

    const [openFirst, setOpenFirst] = useState(false);
    const [openSecond, setOpenSecond] = useState(false);

    const setFirstModalIsOpenToTrue =()=>{
        setOpenFirst(true)
    }
    const setFirstModalIsOpenToFalse =()=>{
        setOpenFirst(false)
    }

    const setSecondModalIsOpenToTrue =()=>{
        setOpenSecond(true)
    }

    const setSecondModalIsOpenToFalse =()=>{
        setOpenSecond(false)
    }

    return (
        <nav className='nav'>

            <button onClick={setFirstModalIsOpenToTrue}>About Page</button>
            <ReactModal 
                isOpen={openFirst}
                contentLabel="onRequestClose Example"
                onRequestClose={setFirstModalIsOpenToFalse}
                className="Modal"
                ariaHideApp={false}
                overlayClassName="Overlay"
            >
                <button onClick={setFirstModalIsOpenToFalse} className='close' data-testid='exitButton1'><img src={require('../../assets/icons8-close-window-48.png')} alt='close modal'/></button>
                <p data-testid='modal-test1'>This is a basic tool that calculates the number of solar panels needed given some information about electricity consumption, sunlight hours, etc... Lebanon has been going through an electricity crisis since forever, and people have been flocking to solar power more and more. This app is my attempt at trying to facilitate the process of getting started with renewable energy.</p>
            </ReactModal>

            <button onClick={setSecondModalIsOpenToTrue}>About Me</button>
            <ReactModal 
                isOpen={openSecond}
                contentLabel="onRequestClose Example"
                onRequestClose={setSecondModalIsOpenToFalse}
                className="Modal"
                ariaHideApp={false}
                data-testid='modal-test2'
                overlayClassName="Overlay"
            >
                <button onClick={setSecondModalIsOpenToFalse} className='close' data-testid='exitButton2'><img src={require('../../assets/icons8-close-window-48.png')} alt='close modal'/></button>
                <p data-testid='modal-test2'>Hi! My name is Christopher Boumalhab. I am a computer science student at the Univeristy of Notre Dame. Over the summer, I've been looking to apply my skills and learn some more in the field of web development. This is my first ever web project, and I hope you enjoy using it!</p>
            </ReactModal>

            <h1>Solar Lebanon</h1>

        </nav>
    );
}
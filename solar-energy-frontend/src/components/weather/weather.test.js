import Weather from "./weather";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'


describe('testing weather component', ()=>{
    test('weather', ()=>{
        render(< Weather/>)
    })


})
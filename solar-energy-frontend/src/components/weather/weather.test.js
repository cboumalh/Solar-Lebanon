import Weather from "./weather";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'


describe('testing weather component', ()=>{
    test('weather', ()=>{
        render(< Weather/>)
    })


})
import Map from "./map";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('testing Map component', ()=>{
    test('map compontent renders', ()=>{
        render(< Map/>)
    })

    test('map image is there', ()=>{
        render(< Map/>)

        const image = screen.getByAltText('map');
        expect(image).toHaveAttribute('src', 'lebanon-map.png')
    })

})
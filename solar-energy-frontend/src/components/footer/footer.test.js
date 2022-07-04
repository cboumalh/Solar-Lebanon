import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Footer from './footer'

describe('testing footer component', ()=>{
    test('footer', ()=>{
        render(< Footer/>)
    })

    test('footer github logo', ()=>{
        render(< Footer/>)
        expect(screen.getByText("Chris's Github").closest('a')).toHaveAttribute('href', 'https://github.com/cboumalh')
    })
})
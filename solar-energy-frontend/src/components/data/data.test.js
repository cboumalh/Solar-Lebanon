import Data from "./data";
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('testing data component', ()=>{
    test('data', ()=>{
        render(< Data/>)
    })

    test('check whether pressing calculate button adds content to solarpanels div', ()=>{
        render(< Data/>)

        const calculate = screen.getByRole('button', {name: /calculate/i})

        fireEvent.click(calculate)

        expect(screen.getByText(/No. of panels needed:/i)).toBeInTheDocument()
    })

    test('testing out the solar panel function', ()=>{
        const mockFunc = jest.fn((kwh, offset, sunHours, environmentalFactor, panelOutput)=>{
            const solarArrayOutput = kwh / (30 * sunHours)

            const solarArraySize = solarArrayOutput * (offset / environmentalFactor)

            return Math.ceil(solarArraySize * 1000 / (sunHours * panelOutput))
        })


        expect(mockFunc(1000,100,10,75,300)).toBe(2);

    })



})
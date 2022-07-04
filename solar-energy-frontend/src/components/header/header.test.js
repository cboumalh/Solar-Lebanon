import Header from "./header"
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('testing header component', ()=>{
    test('header', ()=>{
        render(< Header/>)
    })

    test('about page button', ()=>{
        render(< Header/>)
        const aboutPage = screen.getByRole('button', {name: /about page/i})

        fireEvent.click(aboutPage)
        expect(screen.getByText("This is a basic tool that calculates the number of solar panels needed given some information about electricity consumption, sunlight hours, etc... Lebanon has been going through an electricity crisis since forever, and people have been flocking to solar power more and more. This app is my attempt at trying to facilitate the process of getting started with renewable energy.")).toBeInTheDocument()
    })

    test('About me button', ()=>{
        render(< Header/>)
        const aboutMe = screen.getByRole('button', {name: /about me/i})

        fireEvent.click(aboutMe)
        expect(screen.getByText("Hi! My name is Christopher Boumalhab. I am a computer science student at the Univeristy of Notre Dame. Over the summer, I've been looking to apply my skills and learn some more in the field of web development. This is my first ever web project, and I hope you enjoy using it!")).toBeInTheDocument()
    })

    test('should close about page modal', async () => {
        const screen = render(< Header/>)
        const aboutPage = screen.getByRole('button', {name: /about page/i})
    
        fireEvent.click(aboutPage)
        expect(screen.getByTestId('modal-test1')).toBeInTheDocument()
        const exitIcon = screen.getByTestId('exitButton1')
        fireEvent.click(exitIcon)
        await waitFor(() => {
          expect(screen.queryByTestId('modal-test1')).not.toBeInTheDocument()
        })
      })

      test('should close about me modal', async () => {
        const screen = render(< Header/>)
        const aboutPage = screen.getByRole('button', {name: /about me/i})
    
        fireEvent.click(aboutPage)
        expect(screen.getByTestId('modal-test2')).toBeInTheDocument()
        const exitIcon = screen.getByTestId('exitButton2')
        fireEvent.click(exitIcon)
        await waitFor(() => {
          expect(screen.queryByTestId('modal-test2')).not.toBeInTheDocument()
        })
      })

    test('page title is there', ()=>{
        render(< Header/>)
        expect(screen.getByText('Solar Lebanon')).toBeInTheDocument()
    })
})
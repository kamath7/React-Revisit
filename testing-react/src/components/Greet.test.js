import { render, screen } from '@testing-library/react';
import Greet from './Greet';

test('Renders Greeting and it\'s text', ()=>{
    //Arrange
    render(<Greet/>)
    //Assert
    const elemText = screen.getByText("Hello Kams!", {exact: false})
    expect(elemText).toBeInTheDocument()
})
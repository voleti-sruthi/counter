import { fireEvent,render, screen } from '@testing-library/react';
import Counter from './Counter';

test("To check if heading is present", ()=> {
    render(<Counter/>);
    const heading = screen.getByText("Counter");
    expect(heading).toBeVisible();
})

test("To check whether 0 is present if value is not passed", ()=> {
    render(<Counter/>);
    const count = screen.getByText(0);
    expect(count).toBeInTheDocument();
})

test("To check whether initialValue is present if value is passed", ()=> {
    render(<Counter initialValue={4}/>);
    const count = screen.getByText(4);
    expect(count).toBeInTheDocument();
})

test("To check for error message if negative value is passed", ()=> {
    render(<Counter initialValue={-4}/>);
    const count = screen.getByText("Not Allowed");
    expect(count).toBeInTheDocument();
})

test("To check if count is incrementing by one on click of Add" ,()=>{
    render(<Counter initialValue={5}/>);
    const addButton = screen.getByTestId("Add");
    fireEvent.click(addButton);
    const count = screen.getByText(6);
    expect(count).toBeVisible();
})

test("To check if count is incrementing by two on clickling of Add Twice" ,()=>{
    render(<Counter initialValue={5}/>);
    const addButton = screen.getByTestId("Add");
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    const count = screen.getByText(7);
    expect(count).toBeVisible();
})

test("To check if count is decrementing by one on click of Subtract" ,()=>{
    render(<Counter initialValue={3}/>);
    const subButton = screen.getByTitle("Subtract");
    fireEvent.click(subButton);
    const count = screen.getByText(2);
    expect(count).toBeVisible();
})

test("To check if error message on decrement number goes below zero" ,()=>{
    render(<Counter initialValue={1}/>);
    const subButton = screen.getByTitle("Subtract");
    fireEvent.click(subButton);
    fireEvent.click(subButton);
    const count = screen.getByText("Not Allowed");
    expect(count).toBeVisible();
})
import { render , screen , fireEvent } from '@testing-library/react';
import Header  from '../index'

describe('Header components test', () => {

        describe('Header text test', () => {
                it('should display the heading text to be Coding Challenge', ()=> {
                        const props = {
                                isActive : true,
                                setActive: jest.fn(),
                                setMessages: jest.fn()
                        }
                        render(<Header {...props}/>);
                        const element = screen.getByText('Coding Challenge');
                        expect(element).not.toBeNull();
                        expect(element.tagName).toEqual('SPAN');
                });
        })
        
        describe('button components testing', () => {
                it('should display button text to be START when true is given to isActive state', () => {
                const props = {
                        isActive : true,
                        setActive: jest.fn(),
                        setMessages: jest.fn()
                }
                render(<Header {...props}/>);
                const buttonElement = screen.getByTestId("button-1");
                
                expect(buttonElement.textContent).toBe("START")
                
                });

                it('should display button text to be STOP when false is given to isActive state', () => {
                        const props = {
                                isActive : false,
                                setActive: jest.fn(),
                                setMessages: jest.fn()
                        }
                        render(<Header {...props}/>);
                        const buttonElement = screen.getByTestId("button-1");
                        expect(buttonElement.textContent).toBe("STOP")
                        
                });

                it('should call setActive props when START button is clicked', () => {
                        const props = {
                                isActive : true,
                                setActive: jest.fn(),
                                setMessages: jest.fn()
                        }
                        render(<Header {...props}/>);
                        const buttonElement = screen.getByText("START");
                        fireEvent.click(buttonElement)
                        expect(props.setActive).toBeCalled()
                });

                it('should call setActive props when STOP button is clicked', () => {
                        const props = {
                                isActive : false,
                                setActive: jest.fn(),
                                setMessages: jest.fn()
                        }
                        render(<Header {...props}/>);
                        const buttonElement = screen.getByText("STOP");
                        fireEvent.click(buttonElement)
                        expect(props.setActive).toBeCalled()
                });

                it('should call setMessage props when CLEAR button is clicked', () => {
                        const props = {
                                isActive : true,
                                setActive: jest.fn(),
                                setMessages: jest.fn()
                        }
                        render(<Header {...props}/>);
                        const buttonElement = screen.getByTestId("button-2");
                        fireEvent.click(buttonElement)
                        expect(props.setMessages).toBeCalled()
                });
        });
        
});





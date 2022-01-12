import { render , screen , fireEvent } from '@testing-library/react';
import Log  from '../index'


describe('LogsType components test', () => {
        it('should display the same message as passed from props', ()=> {
                const props = {
                    message:"message detail",
                    messages:[],
                    setMessages:jest.fn(),
                    color:"red"
                }
                const { getByText } = render(<Log {...props}/>);
                const titleElement = getByText(props.message);
                expect(titleElement).toBeInTheDocument();
        });
        it('should call setMssage when clear is clicked', ()=> {
                const props = {
                    message:"message detail",
                    messages:[],
                    setMessages:jest.fn(),
                    color:"red"
                }
                render(<Log {...props}/>);
                const buttonElement = screen.getByTestId("clear-btn");
                fireEvent.click(buttonElement)
                expect(props.setMessages).toBeCalled()
        });
});
        
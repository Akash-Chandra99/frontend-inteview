import { render , screen , fireEvent } from '@testing-library/react';
import LogsType  from '../index'


describe('LogsType components test', () => {
        it('should display the same title as passed from props', ()=> {
                const props = {
                        logsType : [],
                        title: "Title",
                        color:"red",
                        messages: [],
                        setMessages: jest.fn()
                }
                const { getByText } = render(<LogsType {...props}/>);
                const titleEl = screen.getByText(props.title);
                expect(titleEl).toBeInTheDocument()
        });
        it('should display count of the message of props logsType', ()=> {
                const props = {
                        logsType : [],
                        title: "Title",
                        color:"red",
                        messages: [],
                        setMessages: jest.fn()
                }
                render(<LogsType {...props}/>);
                expect(props.logsType.length).toEqual(0)
        });
});
        
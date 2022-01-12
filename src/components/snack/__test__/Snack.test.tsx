import { render , screen , fireEvent } from '@testing-library/react';
import Snack  from '../index'


describe('Snack components test', () => {
        it('snackbar should display text from snackpack state', ()=> {
                const props = {
                    snackPack:["message 1"],
                    setSnackPack:jest.fn(),

                }
                render(<Snack {...props}/>);
                const titleElement = screen.getByText("message 1");
                expect(titleElement).toBeInTheDocument();
        });
});
        
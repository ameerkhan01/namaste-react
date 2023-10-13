import Body from '../Body';
import { render, screen } from '@testing-library/react';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

test("should render body componenet with search button", () => {
    render(<Body />);
})
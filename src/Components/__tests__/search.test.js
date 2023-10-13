import { act } from 'react-dom/test-utils';
import Body from '../Body';
import { render, screen } from '@testing-library/react';
import MOCK_DATA from '../Mock/api_mock_data.json';
import { BrowserRouter } from 'react-router-dom';

// global.fetch = jest.fn(() => {
//     return Promise.resolve({
//         json: () => {
//             return Promise.resolve([1,2,3,5]);
//         }
//     });
// });

// test("should render body componenet with input box named search", async () => {
//     await act(async () =>  render(
//         <BrowserRouter>
//            <Body />
//         </BrowserRouter>
//     ));  
// })
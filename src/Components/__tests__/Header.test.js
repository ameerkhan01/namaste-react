import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from '../Redux/appStore';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

it('should load header component with login button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();
}) 

it('should load header component with empty cart', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText('Cart (0)');
    expect(cartItems).toBeInTheDocument();
}) 

it('should load header component with the cart', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();
}) 

it('should change login to logout on click', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', { name: 'login' });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', { name: 'logout'});
    expect(logoutButton).toBeInTheDocument();
}) 
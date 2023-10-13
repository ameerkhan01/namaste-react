import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from '../Mock/res_mock_data.json';
import '@testing-library/jest-dom';

test("should render restaurant caer with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />)

    const name = screen.getByText('The BVK Biryani (Bai Veetu Kalyanam)');

    expect(name).toBeInTheDocument(); 
})

// test("should render restaurant card with veg label", () => {
//     render(<RestaurantCard resData={MOCK_DATA} />)

//     const name = screen.getByText('VEG');

//     expect(name).toBeInTheDocument(); 
// })
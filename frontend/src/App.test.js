import { render,waitFor, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import AddSeller from './AddSeller';
import Navbar from './Navbar'



test('Navbar Test', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("AddSeller");
});




test('Navbar Test2', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("ViewSeller");
});
test('Navbar Test3', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("ashion");
});
test('Navbar Test4', () => {
  render(
    <MemoryRouter>
  <Navbar/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("comp");
  expect(linkElement).toBeInTheDocument("F");
});


test('AddSeller Test5', () => {
  render(
    <MemoryRouter>
  <AddSeller/>
  </MemoryRouter>
);
  const linkElement = screen.getByTestId("btn");
  expect(linkElement).toBeInTheDocument("Add");
});


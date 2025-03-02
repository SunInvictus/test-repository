import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting message', () => {
  render(<App />);
  const linkElement = screen.getByText((content, element) => 
     {return content.includes("Кармазин Евгений Дмитриевич");
})
  expect(linkElement).toBeInTheDocument();
});

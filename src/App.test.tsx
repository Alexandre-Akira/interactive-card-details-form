import App from "./App";
import { render, screen } from "./global/test/utils";

describe('teste',() => {
  it('teste', () => {
    render(<App/>)

    const Title = screen.getByText('Vite + React')
    expect(Title).toBeVisible()
  })
})
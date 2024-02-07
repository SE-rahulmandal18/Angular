import { ChesseHamburger, DoubleHamburger } from "./Hamburger";

const isProd = false;
export function FactoryDemo()
{

  if (isProd)
  {
    return new DoubleHamburger();
  }
  else
  {
    return new ChesseHamburger();
  }
   
}
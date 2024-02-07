import { isProd,environment } from "../environments/environment.development";
import { ChesseHamburger, DoubleHamburger } from "./Hamburger";

// const isProd = true;
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
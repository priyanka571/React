import  React  from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
  

import App from './App.jsx' 

/*function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )

}

const ReactElement = {
    type:'a',
    props:{
        href: 'https://google.com',
        target: '_blank'

    },
    children:'Click me to visit google'
}
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>

)*/
  const anotherUser = "chai aur react"
const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google',
   anotherUser

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   { /*<MyApp />    this is basically a function
     MyApp()  his also run but not recommended
     ReactElement     ReactElement ek object hai hum use js me ese hi call karte hai
                      but yaha run nhi hoga kyuki jab hum element custom banate hai 
                      to use custom rendor hi karna padta hai or yaha react ka render call ho raha hai
                      Const Reactelement Type 'A' Props Href 'Https Google.Com' Target '_Blank' Children 'Click Me to Visit Google' */}
    {/*{reactElement}    ye hum react methos se rendor karakar create kar rahe hai elementReactelement Ye Hum React Methos Se Rendor Karakar Create Kar Rahe Hai Element  Reactelement Ye Hum React Methos Se Rendor Karakar Create Kar Rahe Hai Elementreactelement Ye Hum React Methos Se Rendor Karakar Create Kar Rahe Hai Element Reactelement Ye Hum React Methos Se Rendor Karakar Create Kar Rahe Hai Elementreactelement Ye Hum React Methos Se Rendor Karakar Create Kar Rahe Hai Element */}
   <App/>
  </StrictMode>,
)
    
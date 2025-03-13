import './globals.css'
import Navbar from "@/component/Navbar"
const layout = ({ children }) => {
  return (
    <html>
      <body>
       <Navbar/>
       { children }
      </body>
    </html>
  )
}
export default layout
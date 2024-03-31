import { Home, LogOut, Menu, Settings, ShieldQuestion, ShoppingBag } from "lucide-react";
import { SiDiscord } from 'react-icons/si';

const Header = () => {
  return (
    <div className="navbar bg-blue-300 rounded-box sticky top-0">
      <div className="flex-1 px-2 lg:flex-none">
        <a className="text-gray-600 font-bold text-2xl">Meteor<span className="text-blue-500">++</span></a>
      </div> 
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <a className="btn btn-ghost rounded-btn" href="/"><Home />Home</a>
          <a className="btn btn-ghost rounded-btn" href="/buy"><ShoppingBag />Shop</a>
          <a className="btn btn-ghost rounded-btn" href="/help"><ShieldQuestion />Support</a>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
              <Menu />
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-blue-100 rounded-box w-52 mt-4">
              <li><div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
                </div> 
                <div className="drawer-side">
                  <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                    
                  </ul>
                </div>
              </div></li> 
              <li><a><LogOut />Logout</a></li>
              <li><a href='https://discord.gg/jCznygpt5J'><SiDiscord />Discord</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
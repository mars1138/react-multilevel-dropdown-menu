import { menuItems } from '../menuItems';
import MenuItems from './MenuItems';

const Navbar = () => {
  const menuLinks = menuItems.map((menu, index) => {
    const depthLevel = 0;
    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
  });

  return (
    <nav>
      <ul className="menus">{menuLinks}</ul>
    </nav>
  );
};

export default Navbar;

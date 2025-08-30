import { Link } from "react-router";

export interface MenuItem {
  title: string;
  children: {
    title: string;
    uri: string;
  }[];
}

function Menu({ menu }: { menu: MenuItem }) {
  return (
    <div>
      <h2 className="footer-title">{menu.title}</h2>
      <div className="flex flex-col mt-6 text-xs font-medium text-gray-300">
        {menu.children.map((item) => (
          <Link to={item.uri} className="uppercase mb-3">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Menu;

export type MenuLink = {
  url: string;
  label: string;
};
const headerLinks = [
  { url: "/", label: "Home" },
  { url: "/blog", label: "Blog" },
];
export const getMenuLinks = async (): Promise<MenuLink[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(headerLinks), 2000);
  });
};
/* const [isHidden, setIsHidden] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []); */

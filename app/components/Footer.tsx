import  Link  from "next/link";

const Footer = () => {
    return (
      <footer className=" bg-orange-500 text-white py-4 mt-5 rounded-md mb-0">
        <div className=" container mx-auto flex justify-between items-center">
            <p className=" text-sm">&copy; 2024 PasinduBlog</p>
            <div>
                <ul  className=" flex justify-between items-center">
                    <Link href="/components/About">About Me</Link>
                </ul>
            </div>
            <div>
                <ul>
                    <li><a href="#" className=" text-gray-300 hover:text-white mr-4">Facebook</a></li>
                    <li><a href="#" className=" text-gray-300 hover:text-white mr-4">GitHUb</a></li>
                </ul>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
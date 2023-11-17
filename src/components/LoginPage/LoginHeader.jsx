import logo from "../../../public/login-frame-27180.svg"

export default function Header() {
    return(
      <header className="flex w-full py-3 px-4 justify-center items-center mb-[150px]">
        <img src={logo} alt="login" className="flex justify-center items-end gap-[2px]" />
      </header>
    );
  }


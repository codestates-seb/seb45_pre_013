import { Head } from "@/styles/HeadStyle";
import { Btn } from "@/styles/BtnStyle";

const Header = () => {
  return (
    <>
      <Head>
        <div>
          <Btn color="--powder-700" bgColor="--powder-100" hover="--powder-400">
            Log in
          </Btn>
          <Btn color="--white" bgColor="--blue-500" hover="--blue-700">
            Sign up
          </Btn>
        </div>
      </Head>
    </>
  );
};

export default Header;

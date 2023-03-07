import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/services";
import { Button } from "../../components/buttons";
import Input from "../../components/input";

const authHandler = async (data) => {
  const res = await loginUser(data);
  return res;
};
export const Login = () => {
  const navigate = useNavigate();

  // ====================
  const submitHandler = (e) => {
    e.preventDefault();
    const { name, password } = e.target;
    const adminInfo = { username: name.value, password: password.value };
    authHandler(adminInfo).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("token", res.data.accessToken);
        navigate("/admin/all-products");
      } else {
        console.log("first");
      }
    });
  };

  // ====================

  return (
    <div className="flex justify-center py-8 min-h-[100vh] items-center form-container">
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-8 border max-w-xl mx-auto bg-white p-4 rounded form-shadow"
      >
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="نام کاربری" id="name" type="text" />
          <Input label="رمز عبور" id="password" type="password" />
        </div>
        <div>
          <div className="flex flex-col md:w-1/2 md:mx-auto">
            <Button bg="bg-[#ade5ad]" hover="hover:bg-[#bdeabd]">
              ورود
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

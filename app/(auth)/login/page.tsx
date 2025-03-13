import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login page."
};

// อัพ login
const Login = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-50">
        <form action="/info" className="border border-gray-400 p-6 text-center w-auto">
          <h1 className="mb-5 text-2xl font-bold">เข้าสู่ระบบ</h1>
          <div className="pb-3 flex items-center">
            <label htmlFor="email" className="w-20">ชื่อ:</label>
            <input className="border border-gray-400 hover:bg-gray-200 p-2" type="text" name="email" id="email" placeholder="กรุณากรอก E-mail ของคุณ" required />
          </div>
          <div className="flex items-center">
            <label htmlFor="pass" className="w-20">รหัสผ่าน:</label>
            <input className="border border-gray-400 hover:bg-gray-200 p-2" type="password" name="pass" id="pass" placeholder="กรุณากรอกรหัสผ่านของคุณ" />
          </div>
          <button className="mt-5 bg-blue-500 px-4 py-2 hover:bg-blue-600">
            ตกลง
          </button>
        </form>
      </div>
      </>
    )
  }
export default Login;
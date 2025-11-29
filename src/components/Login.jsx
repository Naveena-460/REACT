import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [loginDatas, setloginDatas] = useState({ email: "", password: "" })
  const [error, setError] = useState("")
  const navication = useNavigate()

  const loginhandlechange = (e) => {
    setloginDatas({ ...loginDatas, [e.target.name]: e.target.value })
    setError("")
  }

  const loginhandleSubmit = (e) => {
    e.preventDefault()

    const usersdatas = JSON.parse(localStorage.getItem("users")) || []

    if (!usersdatas.length) {
      setError("No registered users found. Please register first.")
      return
    }

    const finding = usersdatas.find((x) => x.email === loginDatas.email && x.password === loginDatas.password)

    if (finding) {
      localStorage.setItem("currentUser", JSON.stringify(finding))
      
      setloginDatas({ email: "", password: "" })
    } else {
      setError("Invalid email or password. Please check and try again.")
    }
  }

  return (
    <div className="min-h-screen  from-amber-50 to-amber-200 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-1">Login</h2>
        
        {error && <div className="mb-4 text-sm text-red-700 bg-red-50 p-3 rounded">{error}</div>}

        <form onSubmit={loginhandleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={loginDatas.email}
              onChange={loginhandlechange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={loginDatas.password}
              onChange={loginhandlechange}
              placeholder="Your password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:opacity-95" onClick={()=>alert('Successfully logged in')}>
            Sign in
          </button>
        </form>

        <p className="mt-5 text-sm text-center text-gray-600">
          New here?{" "}
          <button onClick={() => navication("/register")} className="text-amber-600 font-medium ">
            Create an account
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login

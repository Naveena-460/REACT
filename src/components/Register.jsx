import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [formdatas, setFormDatas] = useState({ fullname: "", email: "", mobile: "", password: "" })
  const [error, setError] = useState("")            
  const [success, setSuccess] = useState("")           
  const navication = useNavigate()

  const handlechange = (e) => {
    setFormDatas({ ...formdatas, [e.target.name]: e.target.value })
    setError("")
    setSuccess("")
  }

  const validateEmail = (email) => {
    return /^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { fullname, email, mobile, password } = formdatas

    
    if (!fullname.trim()) {
      setError("Name cannot be empty")
      return
    }

    if (!validateEmail(email.trim())) {
      setError("Please enter a valid email")
      return
    }

    const mobileStr = String(mobile).trim()
    if (!/^\d{10}$/.test(mobileStr)) {
      setError("Mobile must be exactly 10 digits")
      return
    }

    if (String(password).length < 5) {
      setError("Password must be at least 5 characters")
      return
    }

    
    const oldData = JSON.parse(localStorage.getItem("users")) || []

    
    const emailExists = oldData.find(u => u.email && u.email.toLowerCase() === email.trim().toLowerCase())
    if (emailExists) {
      setError("Email already registered. Please login or use another email.")
      return
    }

   
    const toSave = {
      fullname: fullname.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobileStr,
      password: password
    }

    oldData.push(toSave)
    localStorage.setItem("users", JSON.stringify(oldData))

    setSuccess("Account created — redirecting to login...")
    setTimeout(() => {
      setSuccess("")
      navication("/login")
      setFormDatas({ fullname: "", email: "", mobile: "", password: "" })
    }, 900)
  }

  return (
    <div className="min-h-screen  from-amber-50 to-amber-200 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">Create an account</h2>
        

        {error && <div className="mb-4 text-sm text-red-700 bg-red-50 p-3 rounded">{error}</div>}
        {success && <div className="mb-4 text-sm text-green-800 bg-green-50 p-3 rounded">{success}</div>}

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Full name</label>
            <input
              name="fullname"
              value={formdatas.fullname}
              onChange={handlechange}
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              value={formdatas.email}
              onChange={handlechange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Mobile</label>
              <input
                name="mobile"
                type="text"
                inputMode="numeric"
                value={formdatas.mobile}
                onChange={handlechange}
                placeholder="10 digit mobile"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                name="password"
                type="password"
                value={formdatas.password}
                onChange={handlechange}
                placeholder="Min 5 characters"
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-amber-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:opacity-95"
          >
            Create account
          </button>
        </form>

        <p className="mt-5 text-sm text-center text-gray-600">
          Already registered?{" "}
          <button onClick={() => navication("/login")} className="text-amber-600 font-medium ">
            Login
          </button>
        </p>
      </div>
    </div>
  )
}

export default Register

import {useState} from 'react';

const FormHandling=()=>{

const LOCAL_KEY = "institute_reviews_v1";      // A

  const emptyForm = {                             // B
    fullname: "", email: "", mobile: ""
  };

  const [data, setData] = useState(emptyForm);    // C
  const [saving, setSaving] = useState(false);    // D (optional UI flag)

    const handleChange = (e) => {                   // E
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value })); // update only touched field
  };

    const validate = () => {                        // F
    if (!data.fullname.trim()) return "Enter name";
    if (!data.email.trim()) return "Enter email";
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) return "Email invalid";
    if (!data.mobile.toString().trim()) return "Enter mobile";
    return null;
  };

    const handleSubmit = (e) => {                   // G
    e.preventDefault();

    const err = validate();
    if (err) { alert(err); return; }

    setSaving(true);
    try {
      const raw = localStorage.getItem(LOCAL_KEY);         // read existing
      const arr = raw ? JSON.parse(raw) : [];              // parse or empty
      const entry = { id: Date.now().toString(), ...data, createdAt: new Date().toISOString() }; // new item
      arr.unshift(entry);                                  // newest first
      localStorage.setItem(LOCAL_KEY, JSON.stringify(arr));// save array
      setData(emptyForm);                                  // reset form
      window.dispatchEvent(new Event("storage"));          // notify same-tab listeners
      alert("Saved ✓");
    } catch (err) {
      console.error(err);
      alert("Save failed — check console");
    } finally {
      setSaving(false);
    }
  };

   return (
    <>
      <div className="bg-green-500 text-white p-10 h-100 flex justify-center items-center">
        <div className="bg-white text-black p-20 rounded">
          <form className="flex flex-col gap-3 justify-center items-center bg-amber-100 p-2 rounded" onSubmit={handleSubmit}>

            <div>
              <label>Enter The Name</label>
              <input
                type="text"
                name="fullname"
                value={data.fullname}
                onChange={handleChange}
                placeholder="Enter The full name"
                className="bg-gray-800 mx-6 w-100 text-white p-1 rounded"
              />
            </div>

            <div>
              <label>Enter The Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Enter the valid email"
                className="bg-gray-800 mx-6 w-100 text-white p-1 rounded"
              />
            </div>

            <div>
              <label>Enter The Mobile</label>
              <input
                type="number"
                name="mobile"
                value={data.mobile}
                onChange={handleChange}
                placeholder="Enter the valid Mobile Number"
                className="bg-gray-800 w-100 mx-6 text-white p-1 rounded"
              />
            </div>

            <div>
              <button
                className="bg-black w-70 p-1 rounded text-white"
                type="submit"
                disabled={saving}
              >
                {saving ? "Saving..." : "Register"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );


}
export default FormHandling;
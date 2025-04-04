import useForm from "../hooks/useForm"
import { useNavigate } from "react-router-dom"
const SignUpForm = () => {
  const navigate = useNavigate();

  const { values, handleChange, handleSubmit, loading, error } = useForm(
    {fullName:"", email: "", password: "" },
    "http://localhost:5000/api/auth/signup",
    (data) => {
      console.log("Success:", data);
      navigate("/home")
      
    }, 
    (err) => console.error("Error:", err)
  );
  


  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
        placeholder="FULL NAME"
        required
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
    </div>
  )
}

export default SignUpForm
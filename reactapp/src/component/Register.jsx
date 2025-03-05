import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Login from "./Login";
const Register_own=({HandleSignUpForm})=>
{
    const [Firstname,setFirstname] =useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
     const [message, setMessage] = useState("");
     const [loading, setLoading] = useState(false);
     const [showPassword, setShowPassword] = useState(false); 
     const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword); 
      };
const [modal,useModal]=useState(false);
const HandleLoginForm=()=>
    {
        useModal(!modal)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post("https://botiga-backend.onrender.com/Botiga/user/signup", {
                Firstname,
                Lastname,
                email,
                password,
                confirmPassword
            });
            setMessage(response.data.message);
            setTimeout(()=>
            {
                navigate("/login")
            },1000)
        } catch (error) {
            setMessage(error.response?.data?.message || "SignUp Failed")
        }
        finally{
            setLoading(false);
        }
    };
    const styles={
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black transparent background
            zIndex: 1000, // Ensures it's on top of everything
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          modal: {
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            width: "600px",
            maxWidth: "90%",
          },
    }
    return(
        <div style={styles.overlay}>
            {modal && <Login HandleLoginForm={HandleLoginForm} />}
            <div style={styles.modal}>
            <div style={{display:"flex",gap:"420px",flexDirection:"row",marginBottom:"20px"}}><div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#4a5568',
          }}
        >
          Register
        </div><div><IoClose onClick={HandleSignUpForm} style={{marginTop:"0px", fontSize: "30px",cursor:"pointer"}}/></div></div>
            
            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"20px"}}>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>First Name:</span><input type="text" placeholder="Firstname" value={Firstname} onChange={(e)=>setFirstname(e.target.value)} style={{width:"400px"}} required/></div>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>Last Name:</span><input type="text" placeholder="Lastname" value={Lastname} onChange={(e)=>setLastname(e.target.value)} style={{width:"400px"}} required/></div>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>Email:</span><input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{width:"400px",marginLeft:"40px"}} required/></div>
                <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>Password:</span>
                 <input   type={showPassword ? "text" : "password"}  style={{ paddingRight: "30px" ,width:"380px",marginLeft:"10px"}} placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  required/>
                <span
            onClick={togglePasswordVisibility}
            style={{
              position: "absolute",
              right: "10px",
              top: "35px",
              cursor: "pointer",
            }}
          >
            {/* {showPassword ? <FaEyeSlash /> : <FaEye />} */}
          </span></div>
          <div style={{display:"flex",gap:"20px"}}><span style={{color:"black",paddingTop:"10px"}}>ConfirmPassword</span> <input type="password" placeholder="Re-type your password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{width:"360px"}} required/></div>
              <div style={{display:"flex",gap:"20px"}}> <button type="submit" disabled={loading} style={{width:"200px",marginLeft:"0px"}}>SIGN UP</button> <span style={{marginTop:"25px",color:"black"}}>Already have account<button onClick={HandleLoginForm} style={{color:"blue",marginLeft:"5px",background:"none"}}>Login</button></span></div> 
              {message && <p style={{color:"red"}}>{message}</p>}
            </form>
            {loading && <p>Loading...</p>}
           
            </div>
        </div>
    )
}
export default Register_own

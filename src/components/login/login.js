import React, { useEffect, useRef, useState, useCallback } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { db, usersStorageName } from "../../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";

const LoginPage = ({ isRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");
  const [allUserList, setAllUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const fetchAllUsers = useCallback(async () => {
    const querySnapshot = await getDocs(collection(db, usersStorageName));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setAllUserList(newData);
  }, []);

  useEffect(() => {
    fetchAllUsers();
  }, [fetchAllUsers]);

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setCnfPassword("");
  };

  const authenticateUser = async () => {
    if (isRegister) {
      setIsLoading(true);
      try {
        await addDoc(collection(db, usersStorageName), {
          username,
          password, // Consider hashing passwords before storing
        });
        alert("User successfully registered!");
        resetForm();
        navigate("/login");
      } catch (error) {
        alert("Unable to register user. Try again later.");
      } finally {
        setIsLoading(false);
      }
    } else {
      const userExists = allUserList.some(
        (usr) => usr.username === username && usr.password === password
      );

      if (userExists) {
        navigate("/dashboard");
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter a valid username and password");
      return;
    }

    if (isRegister && password !== cnfpassword) {
      alert("Passwords do not match!");
      return;
    }

    if (isRegister) {
      const isUsernameTaken = allUserList.some((usr) => usr.username === username);
      if (isUsernameTaken) {
        alert("This username already exists!");
        return;
      }
    }

    authenticateUser();
  };

  return (
    <motion.div
      className="login"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.span
        className="title main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {isRegister ? "New User Registration" : "User Login"}
      </motion.span>

      <motion.span
        className="title"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Software Component Cataloguing Software
      </motion.span>

      {isLoading && (
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
        />
      )}

<motion.form
  className="login-form"
  onSubmit={handleSubmit} // Removed ref={formRef}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: 0.2 }}
>
  <input
    className="input"
    placeholder="Enter Username"
    type="text"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
  />
  <input
    className="input"
    placeholder="Enter Password"
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  {isRegister && (
    <input
      className="input"
      placeholder="Confirm Password"
      type="password"
      value={cnfpassword}
      onChange={(e) => setCnfPassword(e.target.value)}
    />
  )}
  <button type="submit" className="btn">
    {isRegister ? "Register Now" : "Login"}
  </button>
</motion.form>


      <motion.div className="links-container">
        <Link to="/" className="link">
          Go back
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default LoginPage;

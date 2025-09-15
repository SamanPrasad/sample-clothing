import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/user/userSlice";
import { useNavigate } from "react-router";
import type { RootStore } from "@store";

function Guard() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const loggedIn = useSelector((store: RootStore) => store.user.status);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (inputRef.current?.value == "loggedin") {
      dispatch(login());
    }
  };

  useEffect(() => {
    navigate("/");
  }, [loggedIn]);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type your password here" />
      <button onClick={handleLogin}>Login</button>
      <h1 className="text-red-600 text-5xl">
        This is totally for educational and practice purpose
      </h1>
    </div>
  );
}

export default Guard;

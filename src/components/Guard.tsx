import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/user/userSlice";
import type { RootStore } from "../store/store";
import { useNavigate } from "react-router";

function Guard() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const loggedIn = useSelector((store: RootStore) => store.user.status);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (inputRef.current?.value == "loggedin") {
      dispatch(login());
    }
    console.log("ggggg", inputRef.current?.value);
  };

  useEffect(() => {
    navigate("/");
  }, [loggedIn]);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type your password here" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Guard;

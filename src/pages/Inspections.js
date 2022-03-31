import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Inspections() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar navigate={navigate} />
      <h1>Initial App</h1>
    </div>
  );
}

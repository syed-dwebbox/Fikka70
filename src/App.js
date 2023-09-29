import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TotalDownloads from "./components/TotalDownloads";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { setAuthorizationToken } from "./axios/instance";
import apis from "./axios/api";
import { Navigate, useLocation } from "react-router-dom";

function App() {
  const [dashboardData, setdashboardData] = useState(null);
  const [checkLogin, setCheckLogin] = useState(false);

  const auth = localStorage.getItem("token");
  useEffect(() => {
    if (auth) {
      setCheckLogin(true);
    }
  }, []);

  useEffect(() => {
    console.log(auth);
    if (auth) {
      console.log("Hello");
      setAuthorizationToken(JSON.parse(auth));
    }
  }, [auth]);


  const GetData = async () => {
    try {
      const result = await apis.getLatestStats();
      console.log(result);
      const key = Object.keys(result?.data).map((dt) => {
        let val = dt.replaceAll("_", " ");
        val = capitalizeEveryWord(val)
        return val;
      });
      const values = Object.values(result?.data);
      console.log(key, values);

      let arr = [];
      for (let i = 0; i < key.length; i++) {
        if (i === 6) continue;
        let obj = {};
        // obj[key[i]] = values[i]
        obj["name"] = key[i];
        obj["value"] = values[i];
        if (i === 1) {
          obj["name"] = "Registered User";
        }
        if (i === 2) {
          obj["name"] = "Profile Completed";
        }
        

        arr.push(obj);
      }
      console.log(arr);
      setdashboardData(arr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth) GetData();
  }, [auth]);

  // let location = useLocation();
  // useEffect(() => {
  //   if (auth == null) {
  //     <Navigate to="/"  state={{ from: location}} replace />
  // }
  // },[auth])

  return (
    <div className="App">
      <Routes>
        {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard dashboardData={dashboardData} />
              <TotalDownloads data={dashboardData} />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/dashboard"
          element={  
          <ProtectedRoute>
          <Dashboard dashboardData={dashboardData} />
          </ProtectedRoute>
          }
        />
        <Route
          path="/totaldownloads"
          element={
          <ProtectedRoute>
          <TotalDownloads data={dashboardData} />
          </ProtectedRoute>
          }
        ></Route>
          <Route path="*" element={<Login />} />

      </Routes>
    </div>
  );
}

const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem("token");
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

function capitalizeEveryWord(sentence) {
  // Check if the input sentence is not empty
  if (sentence.length === 0) {
      return "";
  }
  // Split the sentence into words
  const words = sentence.split(" ");
  // Capitalize the first letter of each word and join them back into a sentence
  const capitalizedWords = words.map(word => {
      if (word.length > 0) {
          return word.charAt(0).toUpperCase() + word.slice(1);
      }
      return word; // Handle empty words
  });
  // Join the capitalized words with spaces to form the final sentence
  return capitalizedWords.join(" ");
}



export default App;

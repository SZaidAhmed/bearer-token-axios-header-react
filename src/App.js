import logo from './logo.svg';
import './App.css';
import { useCallback } from 'react';
import axios from 'axios';

function App() {

  const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzhkOTk2OGIyZjYyODFkZDlmNGFjMiIsImlhdCI6MTY0ODA3NTUxNywiZXhwIjoxNjU1ODUxNTE3fQ.DLsC6OvjmTdtkCuh_aKz1coIswPtAmXOPTAvsX87880';

  const authAxios = axios.create({
    baseURL: "http://localhost:8000/api/v1/",
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });


  const fetchData = useCallback(async () => {
    const { data: { data: { arts } } } = await authAxios.get("art?page=2&limit=3");
    // const { data: { data: { arts } } } = await authAxios.post("url", body); -> for post 
    console.log(arts)
  })

  return (
    <button onClick={fetchData} >get arts</button>
  );
}

export default App;

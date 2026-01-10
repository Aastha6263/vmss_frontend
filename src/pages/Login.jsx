import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    // ✅ Login success (API later)
    alert('Welcome to VMSS Technologies');

    // 👉 Redirect to Home
    navigate('/');
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-900 to-indigo-900 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        {/* BRAND */}
        <h1 className="text-center text-blue-600 font-bold text-lg mb-1">
          VMSS TECHNOLOGIES
        </h1>

        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        {/* EMAIL */}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
        />

        {/* PASSWORD */}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
        />

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Login
        </button>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Secure login for VMSS users
        </p>
      </div>
    </div>
  );
}

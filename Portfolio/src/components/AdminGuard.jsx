import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, EyeOff, AlertCircle, LogIn } from "lucide-react";

const ADMIN_PASS_HASH = import.meta.env.VITE_ADMIN_PASS_HASH;
const SESSION_KEY = "portfolio_admin_auth";

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

export default function AdminGuard({ children, darkMode, themeColors }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem(SESSION_KEY);
    if (session === "true") {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!password.trim()) return;

    setSubmitting(true);
    setError("");

    try {
      const hashed = await hashPassword(password.trim());

      if (hashed === ADMIN_PASS_HASH) {
        sessionStorage.setItem(SESSION_KEY, "true");
        setAuthenticated(true);
      } else {
        setError("Incorrect password");
        setPassword("");
      }
    } catch {
      setError("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return null;

  if (authenticated) return children;

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: themeColors.bg, color: themeColors.textPrimary }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`,
              boxShadow: `0 0 40px ${themeColors.accent}40`,
            }}
          >
            <Shield className="w-10 h-10" style={{ color: darkMode ? "#0c1a2e" : "#fff" }} />
          </div>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="backdrop-blur-xl rounded-2xl p-8"
          style={{
            background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
            border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
            boxShadow: darkMode
              ? "0 8px 32px rgba(148,213,255,0.08)"
              : "0 8px 32px rgba(0,0,0,0.05)",
          }}
        >
          <h1
            className="text-2xl font-bold text-center mb-2"
            style={{ color: themeColors.accent }}
          >
            Admin Access
          </h1>
          <p className="text-center text-sm opacity-60 mb-8">
            Enter your password to continue
          </p>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40"
              />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="Enter admin password"
                autoFocus
                className="w-full rounded-xl pl-11 pr-12 py-3 outline-none text-sm transition-all duration-300"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                  border: `1px solid ${error ? "#ef4444" : darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                  color: themeColors.textPrimary,
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-80 transition"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-sm"
              >
                <AlertCircle className="w-4 h-4" />
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={submitting || !password.trim()}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: `linear-gradient(135deg, ${themeColors.accentHover}, ${themeColors.accent})`,
                color: darkMode ? "#0c1a2e" : "#fff",
                boxShadow: `0 0 20px ${themeColors.accent}30`,
              }}
            >
              {submitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="w-5 h-5 border-2 rounded-full"
                  style={{ borderColor: `${darkMode ? "#0c1a2e" : "#fff"}40`, borderTopColor: darkMode ? "#0c1a2e" : "#fff" }}
                />
              ) : (
                <>
                  <LogIn className="w-4 h-4" /> Enter Admin Panel
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <p className="text-center text-xs opacity-30 mt-6">
          Protected area · Session expires on browser close
        </p>
      </motion.div>
    </div>
  );
}

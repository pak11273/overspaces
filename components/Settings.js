import React, { useEffect, useState } from "react"

export function Settings(props) {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const closeSettings = (e) => {
    if (e.key === "Esc" || e.key === "Escape") {
      setSettingsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", closeSettings)
    return () => {
      document.removeEventListener("keydown", closeSettings)
    }
  })
  return (
    <div className="relative hidden sm:block sm:ml-6">
      <button
        onClick={() => setSettingsOpen(!settingsOpen)}
        className="relative z-10 block w-8 h-8 overflow-hidden border-2 rounded-full focus:outline-none focus:border-white"
      >
        <img
          className="object-cover w-full h-full"
          src="https://ya-webdesign.com/transparent450_/vector-avatars-employee-5.png"
          alt="account pic"
        />
      </button>
      {/* invisible btn for background clicks */}
      <button
        onClick={() => setSettingsOpen(!settingsOpen)}
        className={`${
          settingsOpen ? "block" : "hidden"
        } fixed tabindex="-1" h-full w-full fixed inset-0 bg-black opacity-50 cursor-default`}
      />
      <div
        className={`${
          settingsOpen ? "block" : "hidden"
        } absolute w-48 z-10 right-0  rounded-lg bg-indigo-500 py-2 mt-2 shadow-md`}
      >
        <a
          href="/#"
          className="block px-2 py-2 hover:bg-green-500 hover:text-white"
        >
          Account Settings
        </a>
        <a
          href="/#"
          className="block px-2 py-2 hover:bg-green-500 hover:text-white"
        >
          Support
        </a>
        <a
          href="/#"
          className="block px-2 py-2 hover:bg-green-500 hover:text-white"
        >
          Sign Out
        </a>
      </div>
    </div>
  )
}

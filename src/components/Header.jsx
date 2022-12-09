import { useState } from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        const body = document.querySelector("body")

        if (darkMode) {
            body.classList.add("dark")
        } else {
            body.classList.remove("dark")
        }
        setDarkMode(!darkMode)
    }

    return (
        <>
            <header className='relative z-10 max-w-7xl mx-auto flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-2xl text-slate text-slate-800 dark:text-white'>
                        Social Media Dashboard
                    </h1>
                    <p className='text-slate-600 font-bold dark:text-slate-400'>
                        Total Followers: 30,000
                    </p>
                </div>

                <div className='toggle'>
                    <label htmlFor='checkbox' className='font-bold text-slate-600 dark:text-slate-400 text-sm cursor-pointer'>
                        Dark Mode
                    </label>
                    <input type="checkbox" className="checkbox" checked={!darkMode} onChange={toggleTheme} />
                    <label for="checkbox" className='label'>
                        <div className='ball'></div>
                    </label>
                </div>
            </header>
        </>
    )
}

export default Header
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className="flex h-10 bg-blue-500 justify-center gap-20 align-center">
            <Link to="/">Home</Link>
            <Link to="/feedback">Feedback</Link>
        </div>
    )
}
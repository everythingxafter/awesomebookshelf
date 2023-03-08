import React from "react"
import { Link } from "react-router-dom"

export default function DashboardNavbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`/`}>Back to Home</Link>
                </li>
            </ul>
        </nav>
    )
};
import { useState } from "react"
import FeedbackItem from "./components/FeedbackItem"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"

function App() {

    const [feedback, setFeedback] = useState(FeedbackData)

    return (
        <>
            <Header />
            <FeedbackItem />
            <div className="container">
                <h1>My App</h1>
            </div >
        </>
    )
}

export default App

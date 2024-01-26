
import { useDescription } from "../hooks/create-description"
import "./generate-style.css"

export const GenerateButton = () => {

    // hooks
    const { handleCreateDescription } = useDescription()

    return (
        <div className={"generate_button_box"} >
            <button title="چه توضیحاتی عزیزم!" className="generayte_button" onClick={handleCreateDescription} >پس توضیحات؟</button>
        </div >
    )
}
import { ValueObject } from "../types";
import { descriptionData } from "./data"

export const useDescription = () => {


    // functions
    const handleCreateDescription = (): void => {
        const ScorClassTosifiList: HTMLCollectionOf<Element> | null = document.getElementsByClassName('panel-scoreClassTosifi-grid');
        if (ScorClassTosifiList.length >= 1) {
            const ScorClassTosifi = ScorClassTosifiList[0]
            const allTableRows = ScorClassTosifi.getElementsByTagName("tr")
            if (allTableRows) {
                const tableRows = Array.from(allTableRows).slice(1)
                if (tableRows)
                    tableRows.forEach((row) => {
                        const allTds = row.getElementsByTagName("td")
                        const tds = Array.from(allTds)
                        if (tds && tds.length === 5) {
                            const valueTd = tds[3]
                            const descriptionTd = tds[4]
                            // get value
                            const valueInput = valueTd.getElementsByTagName("input")[0]
                            const value = Number(valueInput.value)

                            // set description
                            const { code, shift } = fetchCodeAndShift()
                            if (code && shift && value) {
                                const descriptions = descriptionData[code][shift][value]
                                if (descriptions && descriptions.length >= 1) {
                                    const selectedDescription = descriptions[0]
                                    const descriptionInput = descriptionTd.getElementsByTagName("input")[0]
                                    descriptionInput.value = selectedDescription
                                }
                            }
                        }
                    })
            }
        }
    };

    const fetchCodeAndShift = (): { code: number | undefined, shift: "firstShift" | "secondShift" | undefined } => {
        const ScorClassTosifiList: HTMLCollectionOf<Element> | null = document.getElementsByClassName('panel-scoreClassTosifi-grid');
        if (ScorClassTosifiList.length >= 1) {
            const ScorClassTosifi = ScorClassTosifiList[0]
            const legends = ScorClassTosifi.getElementsByTagName("legend");
            if (legends.length >= 1) {
                const legend = legends[0]
                const spans = legend.getElementsByTagName("span")
                if (spans.length >= 1) {
                    const span = spans[0]
                    const spanText = span.innerText
                    const splittedText = spanText.split("/")
                    if (splittedText.length === 4) {
                        // fetch code
                        const codeItem = splittedText[2]
                        const code = Number(codeItem.replace(/[^0-9]/g, ""))
                        // fetch shift
                        const shiftItem = splittedText[3]
                        const shift = shiftItem === " نوبت اول" ? "firstShift" : "secondShift"
                        if (code && shift) {
                            return { code, shift }
                        }
                    }
                }
            }

        }
        return { code: undefined, shift: undefined }
    }

    return { handleCreateDescription }
}   
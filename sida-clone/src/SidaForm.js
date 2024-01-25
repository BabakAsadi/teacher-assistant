
import styles from "./sida.module.css"


const studenst = [
    {
        id: 1,
        name: "بابک اسدی"
    },
    {
        id: 2,
        name: "مهدیه حسینی"
    },
    {
        id: 3,
        name: "ابوعلی سینا"
    },
    {
        id: 4,
        name: "مهدی اسدی"
    },
    {
        id: 5,
        name: "پسر مردم"
    },
    {
        id: 6,
        name: "دختر همسایه"
    }
]

export const SidaForm = () => {
    return (
        <div id="forms" className={styles.container}>
            {
                studenst.map((student) =>
                    <Form student={student} key={student.id} />
                )
            }
        </div>
    )
}



const Form = (props) => {
    const sudentName = props.student.name
    return (
        <form id="sida_form" className={styles.sida_form}>
            <div>
                <span>{sudentName}</span>
            </div>
            <div >
                <input id="student-grade" className={styles.form_number} type="number" min={1} max={4} />
                <input id="student-grade-description" placeholder="توضیف..." className={styles.form_text} type="text" />
            </div>
        </form>
    )
}
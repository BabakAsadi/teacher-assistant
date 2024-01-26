import React from 'react';
interface ValueObject {
  value: string;
  description: string;
}
function App() {
  return (
    <div>
      <CreateDescription />
    </div>
  );
}
export default App;




const CreateDescription = () => {
  const handleCreateDescription = (): void => {
    const formsElement: HTMLElement | null = document.getElementById('forms');
    if (formsElement) {
      const forms: NodeListOf<HTMLFormElement> = formsElement.querySelectorAll('form');
      const values: ValueObject[] = [];
      forms.forEach((form: HTMLFormElement) => {
        const input: HTMLInputElement | null = form.querySelector('#student-grade');
        const description: HTMLTextAreaElement | null = form.querySelector('#student-grade-description');
        if (input && description) {
          description.value = 'hi';
          const valueObj: ValueObject = {
            value: input.value,
            description: description.value,
          };
          values.push(valueObj);
        }
      });
      console.log(values);
    }
  };
  return (
    <div style={{ marginBlock: "20px", position: "fixed", left: "50px", top: "50px" }}>
      <button onClick={handleCreateDescription} style={{ paddingInline: "10px", paddingBlock: "8px" }}>پس توضیحات؟</button>
    </div>
  )
}
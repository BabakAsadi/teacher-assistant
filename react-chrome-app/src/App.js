import React from 'react';

function App() {
  return (
    <div>
      <CreateDescription />
    </div>
  );
}

export default App;


const CreateDescription = () => {

  const handleCreateDescription = () => {
    const forms = document.getElementById('forms')?.childNodes
    const values = [];
    forms?.forEach((form) => {
      const input = form.querySelector('#student-grade');
      const description = form.querySelector('#student-grade-description');
      description.value = 'hi'
      const valueObj = {
        value: input.value,
        description: description.value,
      };

      values.push(valueObj);
    });

    console.log(values);
  }
  return (
    <div style={{ marginBlock: "20px" }}>
      <button onClick={handleCreateDescription} style={{ paddingInline: "10px", paddingBlock: "8px" }}>پس توضیحات؟</button>
    </div>
  )
}
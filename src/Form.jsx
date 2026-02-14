function handleForm(event){
  event.preventDefault();
  console.log("Form was submitted!");
}

export default function Form(){
  return(
    <form>
    <input placeholder="write Something"></input>
    <button onClick={handleForm}>submit</button>
    </form>
  );
}
function PrintHello(event){
  console.log("Hello");
  console.log(event);
}

function PrintBye(){
  console.log("Bye!")
}

export default function Button(){
  return (
    <div>
      <button onClick={PrintHello}>click me!</button>
      <p onMouseOver={PrintBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo atque eos blanditiis, qui optio excepturi porro officia non repudiandae dicta ipsa vitae, quam quasi quos facere odio alias delectus assumenda!</p>
    </div>
  )
}
export function Greeting(people) {
  const greeting = document.createElement("section");
  const h2 = document.createElement("h2");
  h2.textContent = "Greetings to:";
  greeting.append(h2);

  const ul = document.createElement("ul");
  people.forEach((person) => {
    const li = document.createElement("li");
    li.textContent = person;
    ul.append(li);
  });
  greeting.append(ul);

  return greeting;
}

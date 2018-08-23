function Contacts(prop) {
  return (
    <div class="contacts">
      <h2> { prop.name }  </h2>
       <p> { prop.email } </p>
       <p> { prop.phone } </p>
    </div>
  );
}

ReactDOM.render(<Contacts  name="De'Meco" email="dbell1911@gmail.com" phone= "888-888-888" />, document.getElementById("app"));
ReactDOM.render(<Contacts  name="Tyya" email="Tbell@gmail.com" phone= "123-456-789" />, document.getElementById("app1"));
ReactDOM.render(<Contacts  name="Olawale" email="Olawale@gmail.com" phone= "555-555-5555" />, document.getElementById("app2"));
ReactDOM.render(<Contacts  name="Mickey Mouse" email="mickey@gmail.com" phone= "555-555-5555" />, document.getElementById("app3"));
ReactDOM.render(<Contacts  name="Minnie Mouse" email="minnie@gmail.com" phone= "777-777-7777" />, document.getElementById("app4"));
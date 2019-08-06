
function test() {
  // test bindings
  const a = lib.A.create(46);
  const b = lib.B.create(-5);
  b.setName("B");
  console.assert(a.add(b).next().data() == 42);
  console.assert(b.name() == "B");
  // test lua lib
  const m = new Map<string,number>();
  m.set("a",42);
  console.assert(m.get("a") == 42);
}

test();

class Greeter {
  private name: string;

  constructor(name: string){
    this.name = name;
  }

  public greet() {
    lib.log(`Hello ${this.name} from TypeScript!`);
  }
}

const greeter = new Greeter("C++");
greeter.greet();

import { Header, Search } from "@project/presentation/component";
import { Projects } from "@project/presentation/design";
import "@atomic/scss";

export default function Home() {
  return (
    <main className="home">
      <Header />
      <Search />
      <Projects />
    </main>
  );
}

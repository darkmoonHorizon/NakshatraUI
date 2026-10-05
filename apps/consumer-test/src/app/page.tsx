import { Navbar, Services } from "@ekatra/next-ui";
import "@ekatra/next-ui/styles.css";
import { columns, featuredProjects, servicesData } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen text-(--nk-color-text) bg-(--nk-color-background)">
      <Navbar columns={columns} featuredProjects={featuredProjects} />
      <Services {...servicesData} />
    </main>
  );
}

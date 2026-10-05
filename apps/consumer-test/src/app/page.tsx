import { Navbar, Services } from "@vserve_digital/ui";
import "@vserve_digital/ui/styles.css";
import { columns, featuredProjects, servicesData } from "./data";

export default function Home() {
  return (
    <main className="min-h-screen text-(--nk-color-text) bg-(--nk-color-background)">
      <Navbar columns={columns} featuredProjects={featuredProjects} />
      <Services {...servicesData} />
    </main>
  );
}


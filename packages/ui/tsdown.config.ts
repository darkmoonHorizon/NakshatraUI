import { defineConfig } from "tsdown";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "navbar-client": "src/sections/navbar/navbar-client.tsx"
  },
  format: ["esm"],
  plugins: [{
    name: "hoist-use-client",
    renderChunk(code) {
      if (code.includes('"use client"') || code.includes("'use client'")) {
        const cleaned = code.replace(/['"]use client['"];?\n?/g, '');
        return '"use client";\n' + cleaned;
      }
      return null;
    }
  }],
  dts: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom", "next"]
});


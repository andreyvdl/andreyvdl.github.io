import type { Data } from "@/lib/types";

const projects = {
  en: [
    {
      title: "42-Cub3D",
      description:
        "A 3D maze game built with raycasting and MiniLibX — explore a textured labyrinth from a first-person perspective.",
      stack: ["C", "MiniLibX", "Makefile"],
      link: "https://github.com/andreyvdl/42-Cub3D",
      image: "/img/cub3d.png",
    },
    {
      title: "fractol-zig",
      description:
        "A Zig remake of the Fractol project — renders Mandelbrot and Julia sets with interactive controls.",
      stack: ["Zig"],
      link: "https://gitlab.com/adantas2/fractol-zig",
      image: "/img/fractol.png",
    },
    {
      title: "scop",
      description:
        "A 3D model viewer that loads .OBJ files and renders them with OpenGL — featuring texture mapping, lighting, and interactive camera controls.",
      stack: ["Go", "OpenGL", "GLFW"],
      link: "https://gitlab.com/adantas2/scop",
      image: "/img/scop.png",
    },
  ],
  "pt-BR": [
    {
      title: "42-Cub3D",
      description:
        "Um jogo 3D de labirinto feito com raycasting e MiniLibX — explore um labirinto texturizado em primeira pessoa.",
      stack: ["C", "MiniLibX", "Makefile"],
      link: "https://github.com/andreyvdl/42-Cub3D",
      image: "/img/cub3d.png",
    },
    {
      title: "fractol-zig",
      description:
        "Um remake do Fractol feito em Zig — renderiza conjuntos Mandelbrot e Julia com controles interativos.",
      stack: ["Zig"],
      link: "https://gitlab.com/adantas2/fractol-zig",
      image: "/img/fractol.png",
    },
    {
      title: "scop",
      description:
        "Um visualizador 3D que carrega arquivos .OBJ e os renderiza com OpenGL — com mapeamento de textura, iluminação e controles de câmera interativos.",
      stack: ["Go", "OpenGL", "GLFW"],
      link: "https://gitlab.com/adantas2/scop",
      image: "/img/scop.png",
    },
  ],
};

export const configData: Data = {
  en: {
    fullName: "Andrey Victor Dantas Leal",
    nickname: "adantas-",
    title: "Software Engineer",
    role: "Software Engineer & jack-of-all-trades",
    bio: "Low-level enthusiast and alumnus at 42 São Paulo. Passionate about C, C++ and systems programming.",
    avatarFallback: "A",

    companies: [],
    companiesLinks: [],

    primaryStack: ["C/C++", "Typescript", "Go", "Java"],
    secondaryStack: ["Zig", "Ruby", "Shell"],

    avatarImage: "https://avatars.githubusercontent.com/u/81233149?v=4",
    wallpapers: {
      dark: "https://images8.alphacoders.com/632/thumb-1920-632051.png",
      light: "https://picfiles.alphacoders.com/248/thumb-1920-248365.jpg",
    },

    projects: projects["en"],
  },
  "pt-BR": {
    fullName: "Andrey Victor Dantas Leal",
    nickname: "adantas-",
    title: "Engenheiro de Software",
    role: "Engenheiro de Software & faz-tudo",
    bio: "Entusiasta de low-level e alumno da 42 São Paulo. Apaixonado por C, C++ e programação de sistemas.",
    avatarFallback: "A",

    companies: [],
    companiesLinks: [],

    primaryStack: ["C/C++", "Typescript", "Go", "Java"],
    secondaryStack: ["Zig", "Ruby", "Shell"],

    avatarImage: "https://avatars.githubusercontent.com/u/81233149?v=4",
    wallpapers: {
      dark: "https://images8.alphacoders.com/632/thumb-1920-632051.png",
      light: "https://picfiles.alphacoders.com/248/thumb-1920-248365.jpg",
    },

    projects: projects["pt-BR"],
  },
};

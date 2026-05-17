import type { Data } from "@/lib/types";

const projects = {
  en: [
    {
      title: "42-Cub3D",
      description:
        "A 3D maze game built with raycasting and MiniLibX — explore a textured labyrinth from a first-person perspective.",
      stack: ["C", "MiniLibX", "Makefile"],
      link: "https://github.com/andreyvdl/42-Cub3D",
      image: "https://placehold.co/600x400/AAAAAA/EEEEEE?text=42-Cub3D",
    },
    {
      title: "fractol-zig",
      description:
        "A Zig remake of the Fractol project — renders Mandelbrot and Julia sets with interactive controls.",
      stack: ["Zig"],
      link: "https://gitlab.com/adantas2/fractol-zig",
      image: "https://placehold.co/600x400/AAAAAA/EEEEEE?text=fractol-zig",
    },
  ],
  "pt-BR": [
    {
      title: "42-Cub3D",
      description:
        "Um jogo 3D de labirinto feito com raycasting e MiniLibX — explore um labirinto texturizado em primeira pessoa.",
      stack: ["C", "MiniLibX", "Makefile"],
      link: "https://github.com/andreyvdl/42-Cub3D",
      image: "https://placehold.co/600x400/AAAAAA/EEEEEE?text=42-Cub3D",
    },
    {
      title: "fractol-zig",
      description:
        "Um remake do Fractol feito em Zig — renderiza conjuntos Mandelbrot e Julia com controles interativos.",
      stack: ["Zig"],
      link: "https://gitlab.com/adantas2/fractol-zig",
      image: "https://placehold.co/600x400/AAAAAA/EEEEEE?text=fractol-zig",
    },
  ],
};

export const configData: Data = {
  en: {
    fullName: "Andrey Victor Dantas Leal",
    nickname: "andreyvdl",
    title: "Software Engineer",
    role: "Software Engineer & 42 São Paulo Alumnus",
    bio: "Low-level enthusiast and alumnus at 42 São Paulo. Passionate about C, C++ and systems programming.",
    avatarFallback: "A",

    companies: [],
    companiesLinks: [],

    primaryStack: ["C", "C++"],
    secondaryStack: ["Python", "JavaScript"],

    avatarImage: "https://avatars.githubusercontent.com/u/81233149?v=4",
    wallpapers: {
      light: "https://placehold.co/1200x600/EEEEEE/CCCCCC?text=Wallpaper",
      dark: "https://placehold.co/1200x600/333333/444444?text=Wallpaper",
    },

    projects: projects["en"],
  },
  "pt-BR": {
    fullName: "Andrey Victor Dantas Leal",
    nickname: "andreyvdl",
    title: "Engenheiro de Software",
    role: "Engenheiro de Software & Alumno da 42 São Paulo",
    bio: "Entusiasta de low-level e alumno da 42 São Paulo. Apaixonado por C, C++ e programação de sistemas.",
    avatarFallback: "A",

    companies: [],
    companiesLinks: [],

    primaryStack: ["C", "C++"],
    secondaryStack: ["Python", "JavaScript"],

    avatarImage: "https://avatars.githubusercontent.com/u/81233149?v=4",
    wallpapers: {
      light: "https://placehold.co/1200x600/EEEEEE/CCCCCC?text=Wallpaper",
      dark: "https://placehold.co/1200x600/333333/444444?text=Wallpaper",
    },

    projects: projects["pt-BR"],
  },
};

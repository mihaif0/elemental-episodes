import type { Material } from "@/lib/catalog";

export type IconName =
  | "cotton"
  | "wrinkle"
  | "feather"
  | "leaf"
  | "airflow"
  | "shield"
  | "handLeaf"
  | "thermometer"
  | "droplet";

export interface Benefit {
  icon: IconName;
  title: string;
  text: string;
}

export interface MaterialStory {
  key: Material;
  label: string;
  heading: string;
  intro: string;
  benefits: Benefit[];
}

export const materialStories: Record<Material, MaterialStory> = {
  supima: {
    key: "supima",
    label: "Bumbac Supima",
    heading: "Bumbac Supima — fibra premium",
    intro:
      "Cultivat sustenabil în SUA, bumbacul Supima are fire extra-lungi care îi dau o textură fină, o rezistență sporită și o prospețime care durează ani de zile.",
    benefits: [
      {
        icon: "cotton",
        title: "100% Supima sustenabil",
        text: "Bumbac Supima american, cultivat responsabil.",
      },
      {
        icon: "wrinkle",
        title: "Rezistent la șifonare",
        text: "Ideal pentru călătorii și purtare zilnică.",
      },
      {
        icon: "feather",
        title: "Moliciune sporită",
        text: "Textură fină și rezistență la scămoșare.",
      },
      {
        icon: "leaf",
        title: "Prospețime de durată",
        text: "Blând cu pielea, chiar și după zeci de spălări.",
      },
      {
        icon: "airflow",
        title: "Lejer și respirabil",
        text: "Flux optim de aer, pentru confort tot timpul.",
      },
      {
        icon: "shield",
        title: "Durabilitate excepțională",
        text: "Construit să reziste, sezon după sezon.",
      },
    ],
  },
  bamboo: {
    key: "bamboo",
    label: "Fibre de bambus",
    heading: "Bambus — confort termoreglat",
    intro:
      "Fibrele de bambus sunt natural termoreglatoare și respirabile, oferind o atingere mătăsoasă și o prospețime care rezistă pe parcursul întregii zile.",
    benefits: [
      {
        icon: "handLeaf",
        title: "Eco-friendly",
        text: "Materie primă sustenabilă, cu impact redus.",
      },
      {
        icon: "thermometer",
        title: "Termoreglare",
        text: "Răcoros vara, cald iarna — tot anul.",
      },
      {
        icon: "feather",
        title: "Textură fină",
        text: "Atingere mătăsoasă, confortabilă pe piele.",
      },
      {
        icon: "leaf",
        title: "Prospețime de durată",
        text: "Blând cu pielea și rezistent la mirosuri.",
      },
      {
        icon: "droplet",
        title: "Evacuarea umidității",
        text: "Respirabil natural, te menține uscat.",
      },
      {
        icon: "shield",
        title: "Durabil",
        text: "Rezistent și de lungă durată.",
      },
    ],
  },
};

export function getMaterialStory(material: Material): MaterialStory {
  return materialStories[material];
}

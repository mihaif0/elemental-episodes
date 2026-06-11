import { Monogram } from "@/components/brand/Logo";

export function ComingSoonCard() {
  return (
    <div className="flex flex-col">
      <div className="surface relative flex aspect-[4/5] flex-col items-center justify-center gap-4 text-center">
        <Monogram className="h-9 w-9 text-fog/50" />
        <div>
          <p className="eyebrow">În curând</p>
          <p className="mt-2 px-6 text-sm leading-relaxed text-steel">
            Urmează mai multe modele și culori.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm tracking-wide text-fog">Noi apariții</p>
        <p className="mt-1 text-xs text-steel">Rămâi pe fază</p>
      </div>
    </div>
  );
}

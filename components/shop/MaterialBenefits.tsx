import { BenefitIcon } from "@/components/icons/BenefitIcon";
import { getMaterialStory } from "@/lib/benefits";
import type { Material } from "@/lib/catalog";

export function MaterialBenefits({
  material,
  showHeading = true,
}: {
  material: Material;
  showHeading?: boolean;
}) {
  const story = getMaterialStory(material);

  return (
    <section>
      {showHeading && (
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">{story.label}</p>
          <h2 className="mt-4 text-2xl font-medium tracking-tight text-platinum md:text-3xl">
            {story.heading}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-steel">{story.intro}</p>
        </div>
      )}

      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {story.benefits.map((b) => (
          <div key={b.title} className="flex gap-4">
            <span className="text-fog">
              <BenefitIcon name={b.icon} />
            </span>
            <div>
              <h3 className="text-sm font-medium text-platinum">{b.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-steel">{b.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

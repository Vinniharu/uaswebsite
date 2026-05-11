import { notFound } from "next/navigation";
import { getDroneById } from "@/app/data/drones";
import DroneWrapper from "@/app/components/3d/DroneWrapper";
import Link from "next/link";
import Image from "next/image";

const ACCENT = "#D4AF37";

// Hero background images sourced from the products page assets
const HERO_BG = {
  damisa: "/img/damisa2.JPG",
  argini: "/img/argini2.jpg",
  arsenio: "/img/arsenio2.JPG",
  xander: "/img/xander2.JPG",
  bfly: "/img/bfly2.JPG",
};

export async function generateMetadata({ params }) {
  const { droneId } = await params;
  const drone = getDroneById(droneId);

  if (!drone) {
    return {
      title: "Drone Not Found",
      description: "The requested drone specifications could not be found.",
    };
  }

  return {
    title: `${drone.name} Specifications | Briech UAS`,
    description: `Technical specifications and capabilities of the ${drone.name}. ${drone.tagline}.`,
  };
}

const formatSpecKey = (key) =>
  key
    .replace(/([A-Z])/g, " $1")
    .trim()
    .toUpperCase();

export default async function DroneSpecifications({ params }) {
  const { droneId } = await params;
  const drone = getDroneById(droneId);

  if (!drone) {
    notFound();
  }

  const { id, name, tagline, description, features, specifications, modelPath } =
    drone;

  // Short name = first word
  const shortName = name.split(" ")[0];
  const heroImage = HERO_BG[id];

  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden pt-20">
        {/* full-bleed product image background */}
        {heroImage && (
          <div className="absolute inset-0 z-0">
            <Image
              src={heroImage}
              alt={`${name} airframe`}
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="opacity-50 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
          </div>
        )}
        <div className="absolute inset-0 bg-grid-light opacity-30 pointer-events-none z-0" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0) 65%)",
          }}
        />

        {/* breadcrumb */}
        <div className="relative z-10 px-4 md:px-8 pt-6">
          <Link
            href="/products"
            className="btn-bracket btn-bracket-light"
          >
            ‹ RETURN TO FLEET
          </Link>
        </div>

        {/* GIANT WORDMARK */}
        <div className="relative z-10 px-2 sm:px-4 md:px-8 pt-6 md:pt-10 pointer-events-none overflow-hidden">
          <h1 className="font-extrabold tracking-tighter leading-[0.9] uppercase text-white text-[13.5vw] sm:text-[14vw] md:text-[12vw] lg:text-[10.5vw] text-center mix-blend-screen whitespace-nowrap">
            {shortName.toUpperCase()}
          </h1>
        </div>

        {/* BOTTOM ROW */}
        <div className="relative z-10 mt-auto px-4 md:px-8 pb-10 md:pb-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
            <div className="md:col-span-2 max-w-2xl">
              <div className="eyebrow text-gold mb-3">// SYSTEM_PROFILE</div>
              <p className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.05] uppercase">
                {name.replace(shortName, "").trim() || "Combat UAS"} —{" "}
                <span className="text-gold">{tagline}</span>.
              </p>
            </div>

            <div className="hud-list text-right text-white/80 self-end justify-self-end">
              <div>
                CALLSIGN = <span className="text-gold">{shortName.toUpperCase()}</span>
              </div>
              <div>
                CLASS = <span className="text-gold">{tagline.toUpperCase().replace(/ /g, "_")}</span>
              </div>
              {specifications?.endurance && (
                <div>
                  ENDURANCE = <span className="text-gold">{specifications.endurance.toUpperCase().replace(/ /g, "_")}</span>
                </div>
              )}
              {specifications?.range && (
                <div>
                  RANGE = <span className="text-gold">{specifications.range.toUpperCase().replace(/ /g, "_")}</span>
                </div>
              )}
              <div className="mt-3">
                STATUS = <span className="text-gold">DEPLOYABLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE MODEL + OVERVIEW */}
      <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
        <div className="px-4 md:px-8">
          <div className="mb-12">
            <div className="eyebrow text-black/60 mb-3">// LIVE_FEED = ACTIVE</div>
            <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
              Interactive Model
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* 3D viewer */}
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between px-5 py-3 border-x border-t border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
                <span className="text-black/55">// VIEWER = OPERATIONAL</span>
                <span className="text-gold">ROTATE · ZOOM · INSPECT</span>
              </div>

              <div className="relative border-x border-black/15 bg-grid overflow-hidden">
                <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-black/40 z-10" />
                <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-black/40 z-10" />
                <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-black/40 z-10" />
                <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-black/40 z-10" />
                <DroneWrapper path={modelPath} color={ACCENT} />
              </div>

              <div className="flex items-center justify-between px-5 py-3 border border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
                <span className="text-black/55">// MODEL_ID = {id.toUpperCase()}</span>
                <span className="status-dot" />
              </div>
            </div>

            {/* overview */}
            <div className="lg:col-span-4">
              <div className="border border-black/15 h-full flex flex-col">
                <div className="flex items-center justify-between px-5 py-3 border-b border-black/15 font-mono-tactical text-[10px] uppercase tracking-[0.18em]">
                  <span className="text-black/55">// OVERVIEW</span>
                  <span className="text-gold">DOSSIER</span>
                </div>

                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <p className="text-black/80 leading-relaxed text-sm md:text-base mb-6">
                    {description}
                  </p>

                  <div className="border-t border-black/15 pt-5 mt-auto">
                    <div className="eyebrow text-black/55 mb-3">
                      // KEY_FEATURES
                    </div>
                    <ul className="space-y-2">
                      {features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-black/75 leading-relaxed"
                        >
                          <span className="text-gold font-mono-tactical mt-[2px] shrink-0">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL SPECIFICATIONS */}
      {specifications && Object.keys(specifications).length > 0 && (
        <section className="py-20 md:py-28 bg-white text-black border-t border-black/10">
          <div className="px-4 md:px-8">
            <div className="mb-12">
              <div className="eyebrow text-black/60 mb-3">
                // TECHNICAL_SPECIFICATIONS
              </div>
              <h2 className="bracket-heading text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tight">
                Specifications
              </h2>
              <p className="mt-6 text-black/75 max-w-2xl leading-relaxed">
                Performance envelope and operational parameters for the{" "}
                {shortName}.
              </p>
            </div>

            <div className="border border-black/15 font-mono-tactical">
              {Object.entries(specifications).map(([key, value], i) => (
                <div
                  key={key}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 px-5 md:px-8 py-4 hover:bg-gold/5 transition-colors ${
                    i < Object.keys(specifications).length - 1
                      ? "border-b border-black/15"
                      : ""
                  }`}
                >
                  <div className="md:col-span-1 text-[10px] uppercase tracking-[0.18em] text-black/40">
                    {String(i + 1).padStart(3, "0")}
                  </div>
                  <div className="md:col-span-4 text-[11px] md:text-[12px] uppercase tracking-[0.18em] text-black/65">
                    {formatSpecKey(key)}
                  </div>
                  <div className="md:col-span-7 text-sm md:text-base font-extrabold tracking-tight uppercase text-gold">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA banner */}
      <section className="py-10 md:py-14 bg-white border-t border-black/10">
        <div className="px-4 md:px-8">
          <Link href="/contact" className="block group">
            <div className="bg-gold text-black px-6 md:px-8 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 transition-colors hover:bg-black hover:text-gold">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                  ENQUIRE&nbsp;ABOUT&nbsp;{shortName.toUpperCase()}
                </div>
                <div className="text-[12px] uppercase tracking-[0.15em] mt-1 opacity-80">
                  Discuss deployment of the {shortName} for your operational
                  requirements
                </div>
              </div>
              <span className="btn-bracket">REQUEST BRIEFING</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

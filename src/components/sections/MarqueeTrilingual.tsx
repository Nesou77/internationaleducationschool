export default function MarqueeTrilingual() {
  const items = [
    "Excellence",
    "التميز",
    "Excellence",
    "Bienveillance",
    "الرعاية",
    "Care",
    "Trilinguisme",
    "التعدد اللغوي",
    "Trilingualism",
    "Autonomie",
    "الاستقلالية",
    "Autonomy",
    "Ouverture",
    "الانفتاح",
    "Openness",
    "Persévérance",
    "المثابرة",
    "Perseverance",
  ];

  const doubled = [...items, ...items];

  return (
    <div
      id="marquee"
      className="relative overflow-hidden border-y border-border/60 bg-primary py-4"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-4 px-6 font-sans text-sm tracking-widest uppercase whitespace-nowrap ${
              /[\u0600-\u06FF]/.test(item)
                ? "text-accent font-medium"
                : "text-primary-foreground/70"
            }`}
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-accent/50 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}
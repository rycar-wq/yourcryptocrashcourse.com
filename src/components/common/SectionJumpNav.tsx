export default function SectionJumpNav({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  return (
    <nav className="flex flex-wrap justify-center gap-3 py-8 px-6 bg-white border-b border-gray-100">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium text-gray-700 hover:bg-primary/10 hover:border-primary hover:text-primary transition"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

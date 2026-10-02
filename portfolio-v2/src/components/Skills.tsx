import { skills, Skill } from '../data/portfolio';

const groups: { key: Skill['category']; label: string }[] = [
  { key: 'language', label: 'Linguagens' },
  { key: 'framework', label: 'Frameworks e bibliotecas' },
  { key: 'tool', label: 'Ferramentas' },
  { key: 'concept', label: 'Conceitos e áreas' },
];

export function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="wrap section-grid">
        <h2 className="section-title">Habilidades</h2>

        <div className="min-w-0 divide-y divide-dark-200 border-y border-dark-200 dark:divide-dark-800 dark:border-dark-800">
          {groups.map((group) => (
            <div key={group.key} className="grid gap-3 py-6 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6">
              <h3 className="subtitle">{group.label}</h3>
              <ul className="flex flex-wrap gap-2">
                {skills
                  .filter((skill) => skill.category === group.key)
                  .map((skill) => (
                    <li key={skill.name} className="chip">
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

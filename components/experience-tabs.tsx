"use client"

export type TabId = "work" | "projects" | "community"

export type Tab = {
  id: TabId
  label: string
}

type ExperienceTabsProps = {
  tabs: Tab[]
  active: TabId
  onSelect: (id: TabId) => void
}

/**
 * Filter tabs: every label carries a faint underline, darkening on hover, and the
 * selected one is solid.
 */
export function ExperienceTabs({
  tabs,
  active,
  onSelect,
}: ExperienceTabsProps) {
  return (
    <div role="tablist" className="flex gap-6 mb-6 text-sm">
      {tabs.map((tab) => {
        const selected = tab.id === active

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={selected}
            onClick={() => onSelect(tab.id)}
            className={`group relative pb-1 transition-colors duration-200 ${
              selected
                ? "text-foreground"
                : "text-foreground/45 hover:text-foreground/80"
            }`}
          >
            <span className="absolute inset-x-0 bottom-0 h-px bg-foreground/20 transition-colors duration-200 group-hover:bg-foreground/50" />

            {selected && (
              <span className="absolute inset-x-0 bottom-0 h-px bg-foreground" />
            )}

            {tab.label}
          </button>
        )
      })}
    </div>
  )
}

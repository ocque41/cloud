import Link from "next/link";

import { processors } from "@/lib/legal/data";

const tableHeaders = [
  "Name",
  "Category",
  "Role",
  "Data types",
  "Purpose",
  "Docs",
];

export function ProcessorsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse text-sm">
        <caption className="mb-4 text-left text-base font-semibold text-[color:var(--fg)]">
          Data processors we rely on
        </caption>
        <thead className="bg-[color:var(--muted)]/10 text-left uppercase tracking-wide text-[10px] text-[color:var(--muted)]">
          <tr>
            {tableHeaders.map((header) => (
              <th key={header} scope="col" className="px-3 py-2">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {processors.map((processor) => (
            <tr key={processor.name} className="border-b border-[color:var(--muted)]/10 align-top text-[color:var(--fg)]">
              <th scope="row" className="px-3 py-3 text-left font-semibold">
                {processor.name}
              </th>
              <td className="px-3 py-3">{processor.category}</td>
              <td className="px-3 py-3">{processor.role}</td>
              <td className="px-3 py-3">
                <ul className="list-disc pl-4">
                  {processor.dataTypes.map((type) => (
                    <li key={type}>{type}</li>
                  ))}
                </ul>
              </td>
              <td className="px-3 py-3">{processor.purpose}</td>
              <td className="px-3 py-3">
                <div className="flex flex-col gap-1">
                  <Link
                    href={processor.docsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[color:var(--primary)] underline-offset-2 hover:underline"
                  >
                    Security docs
                  </Link>
                  <Link
                    href={processor.privacyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[color:var(--primary)] underline-offset-2 hover:underline"
                  >
                    Privacy notice
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

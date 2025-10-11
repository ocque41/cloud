import { getProductsAndServices } from "@/lib/legal/mdx";

export function ProductsServicesList() {
  const { products, services } = getProductsAndServices();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <section>
        <h3 className="text-lg font-semibold text-[color:var(--fg)]">Products</h3>
        <ul className="mt-3 space-y-3 text-sm text-[color:var(--muted)]">
          {products.map((product) => (
            <li key={product.slug} className="rounded-lg border border-[color:var(--muted)]/20 p-3">
              <p className="font-medium text-[color:var(--fg)]">{product.name}</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{product.description}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-[color:var(--fg)]">Services</h3>
        <ul className="mt-3 space-y-3 text-sm text-[color:var(--muted)]">
          {services.map((service) => (
            <li key={service.slug} className="rounded-lg border border-[color:var(--muted)]/20 p-3">
              <p className="font-medium text-[color:var(--fg)]">{service.name}</p>
              <p className="mt-1 text-sm text-[color:var(--muted)]">{service.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

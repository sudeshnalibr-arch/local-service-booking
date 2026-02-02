"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/style/breadcrumb.module.css";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb">
      <ol className={styles.breadcrumb}>
        {/* Home */}
        <li className={styles.breadcrumbItem}>
          <Link href="/" className={styles.breadcrumbLink}>
            Home
          </Link>
        </li>

        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <li key={href} className={styles.breadcrumbItem}>
              {isLast ? (
                <span
                  className={styles.breadcrumbCurrent}
                  aria-current="page"
                >
                  {formatLabel(segment)}
                </span>
              ) : (
                <Link href={href} className={styles.breadcrumbLink}>
                  {formatLabel(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function formatLabel(text: string) {
  return text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

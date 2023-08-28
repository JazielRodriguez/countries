import styles from "./page.module.css";
import CountriesList from "@/components/coutries-list";
export default function Home() {
  return (
    <main className={styles.main}>
      <CountriesList />
    </main>
  );
}

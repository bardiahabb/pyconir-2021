import styles from "./BeSponsorButton.module.css";
import { useTranslation, useLanguageQuery } from "next-export-i18n";

export default function BeSponsorButton() {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();
  return (
    <div style={{ display:'flex', justifyContent: "center" }}>
      <div className={styles.beSponsorButton + " " + "unSelectable"}>
        {t("pages.becomeSponsor.button")}
      </div>
    </div>
  );
}

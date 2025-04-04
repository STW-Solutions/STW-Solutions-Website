import { useTranslation } from "react-i18next";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import { Link } from "react-router";

interface Props {
  item: string;
  addContactUs: boolean;
}
const NoItemAlert = ({ item, addContactUs = false }: Props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="alert alert-info text-center">
        <div className="text-uppercase">{t("there_are_no")}{" "}{t(item.toString())}{" "}{"yet"}</div>
        {addContactUs && (
          <div>
            <Link to="#" className="text-uppercase">{t("contact_us")}</Link>
            <span>{" "}{t("to_discuss_projects_in_this_area")}.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default NoItemAlert;

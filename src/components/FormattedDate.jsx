import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

export default function FormattedDate({ date }) {
  return <span>{dayjs(date).format("ll")}</span>;
}

import { Card, Typography } from "@material-tailwind/react";
import { HeadTable } from "./Head/HeadTable";
import { ContactNameColumnValue } from "./Body/ColumnValue/ContactName/ContactNameColumnValue";
import { CallTypeColumnValue } from "./Body/ColumnValue/CallType/CallTypeColumnValue";
import imagePerson03 from "../../assets/images/person/image-3.svg";
import imagePerson04 from "../../assets/images/person/image-4.svg";
import imagePerson06 from "../../assets/images/person/image-6.svg";
import imagePerson10 from "../../assets/images/person/image-10.svg";
import iconUser from "../../assets/icons/table/header/icon-user.svg";
import iconCallType from "../../assets/icons/table/header/icon-call-type.svg";
import iconTime from "../../assets/icons/table/header/icon-time.svg";
import iconDateTime from "../../assets/icons/table/header/icon-date-time.svg";

export function HistoryTable() {
  const TABLE_HEAD = [
    { title: "Nome do Contato", icon: iconUser },
    { title: "Tipo de Chamada", icon: iconCallType },
    { title: "Duração", icon: iconTime },
    { title: "Data e Hora", icon: iconDateTime },
  ];

  const TABLE_ROWS = [
    {
      name: "Camilla Wang",
      profile_photo: imagePerson03,
      call_type: "Perdida",
      duration: "00:00",
      datetime: "23/05/2025 - 14:34",
    },
    {
      name: "Diego Ramires",
      profile_photo: imagePerson04,
      call_type: "Perdida",
      duration: "00:00",
      datetime: "23/05/2025 - 14:34",
    },
    {
      name: "Flora Monteiro",
      profile_photo: imagePerson06,
      call_type: "Perdida",
      duration: "00:00",
      datetime: "23/05/2025 - 14:34",
    },
    {
      name: "(11) 91234-5678",
      profile_photo: imagePerson10,
      call_type: "Recebida",
      duration: "00:00",
      datetime: "23/05/2025 - 14:34",
    },
  ];

  return (
    <Card className="h-full w-full overflow-auto">
      <table className="w-full min-w-max table-auto text-left">
        <thead className="bg-green-dark">
          <tr>
            {TABLE_HEAD.map((head, index) => (
              <th
                key={index}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  as="div"
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head && <HeadTable title={head.title} icon={head.icon} />}
                </Typography>
              </th>
            ))}

            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              ></Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(
            ({ name, profile_photo, call_type, duration, datetime }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={name}>
                  <td className={classes}>
                    <Typography
                      as="div"
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <ContactNameColumnValue
                        value={name}
                        photo={profile_photo}
                      />
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      as="div"
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <CallTypeColumnValue value={call_type} />
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {duration}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {datetime}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      as="div"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      Edit
                    </Typography>
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Card>
  );
}

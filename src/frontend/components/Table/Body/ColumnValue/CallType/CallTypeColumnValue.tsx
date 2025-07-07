import iconMissedCall from "../../../../../assets/icons/table/body/icon-missed-call.svg";
import iconPhoneOutgoing from "../../../../../assets/icons/table/body/icon-phone-outgoing.svg";
import iconPhoneIncoming from "../../../../../assets/icons/table/body/icon-phone-incoming.svg";

export function CallTypeColumnValue({ value }: { value: string }) {
  let iconCallType = iconMissedCall;

  if (value === "Realizada") {
    iconCallType = iconPhoneOutgoing;
  } else if (value === "Recebida") {
    iconCallType = iconPhoneIncoming;
  }
  return (
    <div>
      <img src={iconCallType} alt="Ícone de chamada" />
      {value}
    </div>
  );
}

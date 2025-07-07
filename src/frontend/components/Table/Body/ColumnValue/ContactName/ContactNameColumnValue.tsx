export function ContactNameColumnValue({
  value,
  photo,
}: {
  value: string;
  photo: string;
}) {
  return (
    <div>
      {value}
      <img src={photo} alt="Imagem do Contato" className="w-20 h-20" />
    </div>
  );
}

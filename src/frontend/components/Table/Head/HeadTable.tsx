export function HeadTable({ title, icon }: { title: string; icon: string }) {
  return (
    <div>
      <p>{title}</p>
      <img src={icon} alt="Ícone do nome do campo da tabela" />
    </div>
  );
}

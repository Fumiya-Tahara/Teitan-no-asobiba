interface TopPageProps {
  title: string
  discription: string
}

export function MenuButton({ title, discription }): TopPageProps {
  return (
    <div className="aspect-[1.618/1]">
      <div>{title}</div>
      <div>{discription}</div>
    </div>
  )
}

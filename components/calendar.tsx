export default function Calendar() {
  return (
    <div className="space-y-6 mt-8 max-w-[300px] m-auto">
      <h2>2025</h2>

      <Month title="January" />
      <Month title="February" />
      <Month title="March" />
      <Month title="April" />
    </div>
  )
}

function Month({ title }: { title: string }) {
  return (
    <div>
      <h3 className="mb-3">{title}</h3>

      <div className="grid grid-cols-7 gap-3">
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
        <Day />
      </div>
    </div>
  )
}

function Day() {
  return (
    <div className="w-full aspect-square border border-gray-700 rounded"></div>
  )
}

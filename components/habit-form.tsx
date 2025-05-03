export default function HabitForm() {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>

      <button type="submit">Create</button>
    </form>
  )
}


const Input = () => {
  return (
    <div className="w-[450px] mx-auto">
    <label htmlFor="price" className="block text-md font-montserrat font-semibold leading-6 text-gray-900">
      Salaire mensuelle souahité
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm"></span>
      </div>
      <input
        id="price"
        name="price"
        type="text"
        placeholder="0.00"
        className="block w-full h-12 border-0 rounded-[10px] py-1.5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 font-semibold font-montserrat sm:text-sm sm:leading-6"
      />
      <div className="absolute inset-y-0 right-0 flex items-center">
        <label htmlFor="currency" className="sr-only">
          Currency
        </label>
        <select
          id="currency"
          name="currency"
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm"
        >
          <option>USD</option>
          <option>CAD</option>
          <option>EUR</option>
        </select>
      </div>
    </div>
  </div>
  )
}

export default Input

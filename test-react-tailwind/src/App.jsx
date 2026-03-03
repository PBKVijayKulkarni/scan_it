function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      {/* Header */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Logistics Dashboard
      </h1>

      {/* Card Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Total Shipments</h2>
          <p className="text-2xl text-blue-500 mt-2">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Delivered</h2>
          <p className="text-2xl text-green-500 mt-2">95</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Pending</h2>
          <p className="text-2xl text-red-500 mt-2">25</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add Shipment</h2>

        <input
          type="text"
          placeholder="Shipment Name"
          className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select className="w-full p-2 border rounded mb-4">
          <option>Air</option>
          <option>Sea</option>
          <option>Road</option>
        </select>

        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Submit
        </button>
      </div>

      {/* Table Section */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Shipment List</h2>

        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Type</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50">
              <td className="p-2">1</td>
              <td className="p-2">Electronics</td>
              <td className="p-2">Air</td>
              <td className="p-2 text-green-500 font-semibold">Delivered</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-2">2</td>
              <td className="p-2">Furniture</td>
              <td className="p-2">Sea</td>
              <td className="p-2 text-red-500 font-semibold">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
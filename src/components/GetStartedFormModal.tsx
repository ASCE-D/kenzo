export const Modal: React.FC<any> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-8 w-[400px]">
        <h2 className="text-2xl font-bold mb-4">Get Started</h2>
        <p className="mb-4">Please fill out the form below to get started.</p>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex justify-end">
            <button
              className="mr-4 px-4 py-2 bg-gray-400 text-white rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-[#E6700C] text-white rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

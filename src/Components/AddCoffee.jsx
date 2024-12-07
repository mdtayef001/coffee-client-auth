import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const quantity = form.quantity.value;
    const category = form.category.value;
    const details = form.details.value;
    const photoUrls = form.photoUrl.value;
    const suppler = form.suppler.value;
    const test = form.test.value;

    const newCoffee = {
      name,
      quantity,
      category,
      details,
      photoUrls,
      suppler,
      test,
    };

    // send data to sever
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added ",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    console.log(newCoffee);
  };

  return (
    <section className="container mx-auto mt-20">
      <div className="p-24 bg-gray-200">
        <h1 className="text-center text-3xl font-bold mb-10">
          Add Your Coffee
        </h1>
        <form onSubmit={handleAdd} className="md:flex flex-col gap-4">
          {/* 1 */}
          <div className="md:flex gap-4">
            <label className="md:flex-1">
              <span>Coffee Name</span>
              <label className="input input-bordered bg-white flex items-center gap-2">
                <input
                  type="text"
                  name="name"
                  className="grow"
                  placeholder="Coffee Name"
                />
              </label>
            </label>
            <label className="md:flex-1">
              <span>Available Quantity</span>
              <label className="input input-bordered bg-white flex items-center gap-2">
                <input
                  type="text"
                  name="quantity"
                  className="grow"
                  placeholder="Quantity"
                />
              </label>
            </label>
          </div>
          {/* 2 */}
          <div className="md:flex gap-4">
            <label className="md:flex-1">
              <span>Suppler</span>
              <label className="input input-bordered bg-white flex items-center gap-2">
                <input
                  type="text"
                  name="suppler"
                  className="grow"
                  placeholder="Suppler"
                />
              </label>
            </label>
            <label className="md:flex-1">
              <span>Test</span>
              <label className="input input-bordered bg-white flex items-center gap-2">
                <input
                  type="text"
                  name="test"
                  className="grow"
                  placeholder="Test"
                />
              </label>
            </label>
          </div>
          {/* 3 */}
          <div className="md:flex gap-4">
            <label className="md:flex-1">
              <span>Category</span>
              <label className="input input-bordered bg-white flex items-center gap-2">
                <input
                  type="text"
                  name="category"
                  className="grow"
                  placeholder="Category"
                />
              </label>
            </label>
            <label className="md:flex-1">
              <span>Details</span>
              <label className="input input-bordered bg-white flex items-center gap-2">
                <input
                  type="text"
                  name="details"
                  className="grow"
                  placeholder="Details"
                />
              </label>
            </label>
          </div>
          {/* 3 */}
          <div>
            <span>Photo URL</span>
            <label className="input input-bordered bg-white flex items-center gap-2">
              <input
                type="text"
                name="photoUrl"
                className="grow"
                placeholder="Photo URL"
              />
            </label>
          </div>
          <button className="btn bg-white text-black text-xl mt-4">Add</button>
        </form>
      </div>
    </section>
  );
};

export default AddCoffee;

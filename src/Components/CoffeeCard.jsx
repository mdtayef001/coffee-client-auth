import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable no-unused-vars */
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, category, details, photoUrls, suppler, test } =
    coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sever-snowy.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });

              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-white shadow-xl">
      <figure className="w-[30%]">
        <img className="w-full" src={photoUrls} alt="Movie" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Suppler: {suppler}</p>
            <p>Test: {test}</p>
          </div>
          <div>
            <div className="join join-vertical">
              <button className="btn bg-white text-black join-item">
                Details
              </button>

              <Link
                to={`/update-coffee/${_id}`}
                className="btn  bg-white text-black join-item"
              >
                Edit
              </Link>

              <button
                onClick={() => handleDelete(_id)}
                className="btn  bg-white text-black join-item"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

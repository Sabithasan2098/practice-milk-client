import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MilkCard = ({ milk }) => {
  const { category, name, photo, quentity, suplier, teste, _id } = milk;

  const handleDelete = (_id) => {
    console.log(_id);
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
        fetch(`http://localhost:5000/milk/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="">
      <div className="card card-side bg-[#F5F4F1] m-10 p-6 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className=" flex pl-6 lg:gap-52">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{quentity}</p>
            <p>{category}</p>
            <p>{teste}</p>
            <p>{suplier}</p>
          </div>
          <div className="">
            <div className="btn-group btn-group-vertical space-y-3">
              <Link to={`/update/${_id}`}>
                <button className="btn btn-primary ">Update</button>
              </Link>
              <button className="btn btn-secondary ">Edit</button>
              <button
                className="btn btn-success "
                onClick={() => handleDelete(_id)}
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

export default MilkCard;

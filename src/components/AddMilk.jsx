import Swal from "sweetalert2";

const AddMilk = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quentity = form.quentity.value;
    const suplier = form.suplier.value;
    const teste = form.teste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newMilk = {
      name,
      quentity,
      suplier,
      teste,
      category,
      details,
      photo,
    };
    console.log(newMilk);
    fetch("http://localhost:5000/milk", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMilk),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You are successfully added",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] lg:p-20">
      <h1 className="text-5xl font-extrabold pb-24 text-center">Add milk</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* milk name & quentity */}
          <div className="flex gap-10">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Milk-Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Milk-Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Milk-Quentity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quentity"
                  placeholder="Milk-Quentity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* milk suplier & taste */}
          <div className="flex gap-10">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Milk-Suplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="suplier"
                  placeholder="Milk-Suplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Milk-Teste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="teste"
                  placeholder="Milk-Teste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* milk category & details */}
          <div className="flex gap-10">
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Milk-Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Milk-Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control lg:w-1/2">
              <label className="label">
                <span className="label-text">Milk-Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Milk-Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* milk photo url */}
          <div className="flex gap-10">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo-Url</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo-url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>

        <input
          className="btn btn-accent w-full mt-10"
          type="submit"
          value="Add Milk"
        />
      </form>
    </div>
  );
};

export default AddMilk;

import { useLoaderData } from "react-router-dom";

const UpdateMilk = () => {
  const milks = useLoaderData();
  const { category, details, name, photo, quentity, suplier, teste, _id } =
    milks;

  const handleUpdate = (e) => {
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
    fetch(`http://localhost:5000/milk/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMilk),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="bg-[#F4F3F0] lg:p-20">
      <h1 className="text-5xl font-extrabold pb-24 text-center">
        Update product:{name}
      </h1>
      <form onSubmit={handleUpdate}>
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
                  defaultValue={name}
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
                  defaultValue={quentity}
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
                  defaultValue={suplier}
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
                  defaultValue={teste}
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
                  defaultValue={category}
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
                  defaultValue={details}
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
                  defaultValue={photo}
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
          value="Update"
        />
      </form>
    </div>
  );
};

export default UpdateMilk;

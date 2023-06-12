import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const handleAddClass = (event) => {
    event.preventDefault();

    const form = event.target;

    const class_name = form.class_name.value;
    const available_seats = parseFloat(form.available_seats.value);
    const price = parseFloat(form.price.value);
    const instructor_name = form.instructor_name.value;
    const instructor_email = form.instructor_email.value;
    const image = form.image.value;
    const instructor_image = form.instructor_image.value;
    const status = form.status.value;
    const newClass = {
      class_name,
      image,
      instructor_name,
      instructor_image,
      instructor_email,
      available_seats,
      price,
      status,
    };
    console.log(newClass);
    fetch("https://camp-reunion-server.vercel.app/allClass", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newClass),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Class Added Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };
  return (
    <div className="h-full w-full ">
      <div className=" p-5 md:p-10 bg-sky-100 rounded">
        <h2 className="text-3xl text-center font-bold pb-10">Add New Class</h2>
        <form onSubmit={handleAddClass}>
          <div className="md:flex justify-between">
            <div className="md:w-1/2 md:mr-8">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Class Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="class_name"
                    placeholder="Enter class name"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Available Seats</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    name="available_seats"
                    placeholder="Enter available seats"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">price</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="price"
                    placeholder="Enter class price"
                    className="input input-bordered w-full"
                  />
                </label>
              </div>
            </div>

            <div className="md:w-1/2">
              <div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Instructor Name
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="instructor_name"
                      defaultValue={user?.displayName}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">
                      Instructor Email
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="instructor_email"
                      defaultValue={user?.email}
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Status </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      name="status"
                      defaultValue={"pending"}
                      className="input input-bordered w-full"
                      disabled
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-control mt-3">
            <label className="label">
              <span className="label-text font-bold">Class Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Enter class photo url"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <div className="form-control mt-3 mb-7">
            <label className="label">
              <span className="label-text font-bold">Instructor Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="instructor_image"
                defaultValue={user?.photoURL}
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add New Class"
            className="btn-info md:w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default AddClass;

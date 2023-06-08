const InstructorCart = ({ instructor }) => {
    const {instructor_name, instructor_image, instructor_email,class_name} = instructor;
  return (
    <div className="card shadow-2xl bg-slate-100 hover:bg-gray-200">
      <figure>
        <img src={instructor_image} alt="classes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{instructor_name}</h2>
        <p>Email: {instructor_email}</p>
        <p className="text-green-700">{class_name}</p>
      </div>
    </div>
  );
};

export default InstructorCart;

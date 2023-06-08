const ClassCart = ({ cl }) => {
  const { class_name, image, instructor_name, available_seats, price } = cl;
  return (
    <div className="card shadow-2xl bg-slate-100 hover:bg-gray-200">
      <figure>
        <img
          src={image}
          alt="classes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{class_name}</h2>
        <p> Instructor: {instructor_name}</p>
      <div>  
        <p>Sets: {available_seats}</p>
        <p className="text-green-600">Price: ${price}</p>
      </div>
        <div className="card-actions">
          <button className="btn-secondary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCart;

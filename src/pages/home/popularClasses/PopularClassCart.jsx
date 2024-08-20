
const PopularClassCart = ({ popularCl }) => {
  const { class_name, image, instructor_name, price } = popularCl;
  return (
    <>
        <div className="card shadow-xl image-full hover:transition-transform hover:duration-300 hover:transform hover:scale-110">
          <figure>
            <img src={image} alt="" />
          </figure>
          <div className="card-body justify-end">
            <div className="space-y-0">
              <h2 className="font-bold text-2xl">{class_name}</h2>
              <p>Instructor: {instructor_name}</p>
              <p className="text-lime-400 font-semibold">Price: $ {price}</p>
            </div>
          </div>
        </div>
    </>
  );
};

export default PopularClassCart;

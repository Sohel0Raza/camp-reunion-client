const PopularClassCart = ({ popularCl }) => {
  const { class_name, image, instructor_name, price } = popularCl;
  return (
    <div className="card shadow-xl image-full">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body justify-end hover:bg-gradient-to-t from-[#292a2a] to-[#75c188] hover:rounded-xl hover:font-mono">
        <div className="space-y-2">
          <h2 className="font-bold text-2xl">{class_name}</h2>
          <p>Instructor: {instructor_name}</p>
          <p className="text-lime-400 font-semibold">Price: $ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default PopularClassCart;

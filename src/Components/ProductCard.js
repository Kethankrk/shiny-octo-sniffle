const ProductCard = ({ name, link, category }) => {
  return (
    <>
      <div className="p-8 rounded-lg bg-green text-center product-card mx-w-[220px]">
        <p className="mb-2 text-2xl font-bold">{category}</p>
        <p className="mb-14 font-semibold">{name}</p>
        <button className="bg-success px-4 py-2 rounded-md font-semibold text-black">
          <a href={link}>Download Driver</a>
        </button>
      </div>
    </>
  );
};

export default ProductCard;

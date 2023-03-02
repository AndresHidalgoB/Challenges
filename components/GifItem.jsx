export const GifItem = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
    </div>
  );
};
